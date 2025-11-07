'use client';
import React from 'react';
import Link from 'next/link';
import useCourses from '@/app/Hooks/useCourses';
import useLessons from '@/app/Hooks/useLessons';

const CoursePage = ({ params }) => {
  const { userType, courseSlug } = React.use(params);

  const {
    courses,
    isLoading: coursesLoading,
    isError: coursesError,
  } = useCourses();

  const {
    lessons,
    isLoading: lessonsLoading,
    isError: lessonsError,
  } = useLessons();

  if (coursesLoading || lessonsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50">
        <p className="text-emerald-700 text-lg">Loading...</p>
      </div>
    );
  }

  if (coursesError || lessonsError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50 p-8">
        <p className="text-red-600 text-lg">
          Something went wrong while fetching data.
        </p>
      </div>
    );
  }

  const course = courses[userType]?.find((c) => c.gradeSlug === courseSlug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50 p-8">
        <h1 className="text-2xl font-bold text-emerald-900">Course Not Found</h1>
      </div>
    );
  }

  // Filter lessons for this course
  const courseLessons = lessons.filter(
    (l) => l.userType === userType && l.gradeSlug === courseSlug
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 p-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-700">
        <Link href="/courses" className="text-emerald-600 hover:underline">
          All Courses
        </Link>{' '}
        &gt;{' '}
        <Link
          href={`/courses/${userType}`}
          className="text-emerald-600 hover:underline"
        >
          {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </Link>{' '}
        &gt; <span className="text-gray-700">{course.title}</span>
      </div>

      {/* Course Hero */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-4">{course.title}</h1>
        <p className="text-gray-700 mb-4">{course.description}</p>
      </div>

      {/* Lessons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseLessons.length > 0 ? (
          courseLessons.map((lesson, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-emerald-900 mb-3">{lesson.subject}</h2>
              <p className="text-gray-700 mb-4">
                {lesson.description || 'Lesson content will go here...'}
              </p>

              {/* Sub-lessons list with buttons */}
              {lesson.lessons && lesson.lessons.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {lesson.lessons.map((subLesson, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <span>{subLesson}</span>
                      <Link
                        href={`/courses/${userType}/${courseSlug}/${subLesson
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                        className="ml-2 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded hover:bg-emerald-700 transition"
                      >
                        View Lesson
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))
        ) : (
          <p className="text-gray-700 col-span-full text-center">
            No lessons available yet for this course.
          </p>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
