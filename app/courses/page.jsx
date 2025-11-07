'use client';
import React, { useState } from "react";
import Link from "next/link";

const coursesData = {
  madrasa: [
    { title: "Play: Quran Basics", grade: "Play", description: "Intro to Arabic letters and short surahs" },
    { title: "Class 1: Quran & Fiqh", grade: "Class 1", description: "Foundational Quran, daily duas, and basic fiqh" },
    { title: "Class 2: Quran & Tajweed", grade: "Class 2", description: "Improve recitation and memorize short surahs" },
  ],
  school: [
    { title: "Play: Basic Literacy", grade: "Play", description: "Intro to letters, numbers, and colors" },
    { title: "Class 1: Math & English", grade: "Class 1", description: "Basic math skills and English reading" },
    { title: "Class 2: Science & History", grade: "Class 2", description: "Introductory science and history" },
  ],
  college: [
    { title: "Class 1: Intro to Science", grade: "First Year", description: "Fundamentals of biology and chemistry" },
    { title: "Class 2: Advanced Math", grade: "Second Year", description: "Calculus, algebra, and statistics" },
  ],
  university: [
    { title: "Bachelor: Computer Science", grade: "Year 1", description: "Intro to programming and algorithms" },
    { title: "Bachelor: Mathematics", grade: "Year 1", description: "Linear algebra and calculus" },
  ]
};

const CoursesPage = () => {
  const [userType, setUserType] = useState("madrasa"); // This would come from user registration / selection
  const [selectedGrade, setSelectedGrade] = useState("");

  const courses = coursesData[userType];
  const grades = [...new Set(courses.map(course => course.grade))];

  const filteredCourses = selectedGrade
    ? courses.filter(course => course.grade === selectedGrade)
    : courses;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 p-8">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">
          {userType.charAt(0).toUpperCase() + userType.slice(1)} Courses
        </h1>
        <p className="text-gray-700 text-lg">
          Browse structured courses for your {userType}.
        </p>
      </div>

      {/* Grade Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {/* All Classes Button */}
        <button
          onClick={() => setSelectedGrade("")}
          className={`px-4 py-2 rounded-full font-medium shadow ${
            selectedGrade === ""
              ? "bg-emerald-600 text-white"
              : "bg-white text-emerald-800 hover:bg-emerald-100"
          } transition`}
        >
          All Classes
        </button>

        {grades.map((grade, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedGrade(selectedGrade === grade ? "" : grade)}
            className={`px-4 py-2 rounded-full font-medium shadow ${
              selectedGrade === grade
                ? "bg-emerald-600 text-white"
                : "bg-white text-emerald-800 hover:bg-emerald-100"
            } transition`}
          >
            {grade}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-emerald-900 mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm mb-4">
              {course.grade}
            </span>
            <Link
              href={`/courses/${userType}/${course.grade.toLowerCase().replace(" ", "-")}`}
              className="block text-center bg-emerald-600 text-white font-semibold py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
