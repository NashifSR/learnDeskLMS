'use client';
import React, { useState, useEffect } from 'react';
import useLessons from '@/app/Hooks/useLessons';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';

const LessonPage = (params) => {
  const { userType, courseSlug, lessonSlug } = React.use(params);
  const { lessons, isLoading, isError } = useLessons();
  const [activeTab, setActiveTab] = useFormStatus('mcq'); // 'mcq', 'short', 'broad'
  const [lessonContent, setLessonContent] = useState(null);

  // Load the lesson data
  useEffect(() => {
    if (!lessons) return;

    const courseLessons = lessons.filter(
      (l) => l.userType === userType && l.gradeSlug === courseSlug
    );

    let foundLesson = null;
    courseLessons.forEach((l) => {
      const subLesson = l.lessons.find(
        (sl) => sl.toLowerCase().replace(/\s+/g, '-') === lessonSlug
      );
      if (subLesson) {
        foundLesson = {
          subject: l.subject,
          courseTitle: l.title,
          subLesson,
          description: l.description,
        };
      }
    });

    setLessonContent(foundLesson);
  }, [lessons, userType, courseSlug, lessonSlug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50">
        <p className="text-emerald-700 text-lg">Loading lesson...</p>
      </div>
    );
  }

  if (isError || !lessonContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50">
        <p className="text-red-600 text-lg">
          Error loading lesson or lesson not found.
        </p>
      </div>
    );
  }

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
        &gt;{' '}
        <Link
          href={`/courses/${userType}/${courseSlug}`}
          className="text-emerald-600 hover:underline"
        >
          {lessonContent.courseTitle}
        </Link>{' '}
        &gt; <span className="text-gray-700">{lessonContent.subLesson}</span>
      </div>

      {/* Lesson Header */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-6">
        <h1 className="text-3xl font-bold text-emerald-900 mb-2">
          {lessonContent.subLesson}
        </h1>
        <h2 className="text-xl font-semibold text-emerald-800 mb-4">
          Subject: {lessonContent.subject}
        </h2>
        <p className="text-gray-700">{lessonContent.description}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('mcq')}
          className={`px-4 py-2 rounded-full font-semibold shadow ${
            activeTab === 'mcq'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-emerald-700 hover:bg-emerald-100'
          } transition`}
        >
          MCQs
        </button>
        <button
          onClick={() => setActiveTab('short')}
          className={`px-4 py-2 rounded-full font-semibold shadow ${
            activeTab === 'short'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-emerald-700 hover:bg-emerald-100'
          } transition`}
        >
          Short Questions
        </button>
        <button
          onClick={() => setActiveTab('broad')}
          className={`px-4 py-2 rounded-full font-semibold shadow ${
            activeTab === 'broad'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-emerald-700 hover:bg-emerald-100'
          } transition`}
        >
          Broad Questions
        </button>
      </div>

      {/* Render Active Component */}
      <div className="bg-white rounded-xl shadow-md p-6">
        {activeTab === 'mcq' && <MCQ lessonSlug={lessonSlug} />}
        {activeTab === 'short' && <ShortQ lessonSlug={lessonSlug} />}
        {activeTab === 'broad' && <BroadQ lessonSlug={lessonSlug} />}
      </div>
    </div>
  );
};

export default LessonPage;
