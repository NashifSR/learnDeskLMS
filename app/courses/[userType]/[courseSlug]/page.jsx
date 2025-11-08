'use client';
import React from 'react';
import Link from 'next/link';
import useChapters from '@/app/Hooks/mainHooks/useChapters';

const CoursePage = ({ params }) => {
  const { userType, courseSlug } = React.use(params);
  const { chapters, isLoading, isError } = useChapters();

  // Filter chapters for this course
  const courseChapters = chapters.filter(
    (chapter) => chapter.bookCode === courseSlug
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50">
        <p className="text-emerald-700 text-lg">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50 p-8">
        <p className="text-red-600 text-lg">
          Something went wrong while fetching data.
        </p>
      </div>
    );
  }

  if (!courseChapters || courseChapters.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50 p-8">
        <h1 className="text-2xl font-bold text-emerald-900">Course Not Found</h1>
      </div>
    );
  }

  // Use first chapter for hero info
  const courseHero = courseChapters[0];

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
        &gt; <span className="text-gray-700">{courseSlug}</span>
      </div>

      {/* Course Hero */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-4">{courseHero.chapterTitle}</h1>
        {courseHero.description && (
          <p className="text-gray-700 mb-4">{courseHero.description}</p>
        )}
      </div>

      {/* Chapters List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseChapters.map((chapter, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-emerald-900 mb-3">{chapter.chapterTitle}</h2>
            <p className="text-gray-700 mb-4">
              {chapter.description || 'Chapter content will go here...'}
            </p>

            {/* Optional: sub-chapter buttons */}
            {/* {chapter.subChapters && chapter.subChapters.length > 0 && (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {chapter.subChapters.map((sub, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span>{sub}</span>
                    <Link
                      href={`/courses/${userType}/${courseSlug}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                      className="ml-2 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded hover:bg-emerald-700 transition"
                    >
                      View
                    </Link>
                  </li>
                ))}
              </ul>
            )} */}
          </article>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
