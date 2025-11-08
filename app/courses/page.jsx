'use client';
import React, { useState } from "react";
import Link from "next/link";
import useBooks from "../Hooks/mainHooks/useBooks";

const CoursesPage = () => {
  const [userType, setUserType] = useState("madrasa"); // Could come from user selection
  const [selectedGrade, setSelectedGrade] = useState("");

  const { books, isLoading, isError } = useBooks();

  // Early returns for loading and error states
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50">
        <p className="text-emerald-700 text-lg">Loading books...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50">
        <p className="text-red-600 text-lg">Failed to load books.</p>
      </div>
    );
  }

  // Filter books by userType and selected grade
  const filteredBooks = books.filter((book) => {
    if (!book.system) return false;
    if (book.system.toLowerCase() !== userType.toLowerCase()) return false;
    if (selectedGrade && book.level !== selectedGrade) return false;
    return true;
  });

  // Extract unique grades for the grade filter buttons
  const grades = [
    ...new Set(
      books
        .filter((book) => book.system?.toLowerCase() === userType.toLowerCase())
        .map((book) => book.level)
    ),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 p-8">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">
          {userType.charAt(0).toUpperCase() + userType.slice(1)} Courses
        </h1>
        <p className="text-gray-700 text-lg">
          Browse structured books for your {userType}.
        </p>
      </div>

      {/* Grade Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedGrade("")}
          className={`px-4 py-2 rounded-full font-medium shadow ${
            selectedGrade === ""
              ? "bg-emerald-600 text-white"
              : "bg-white text-emerald-800 hover:bg-emerald-100"
          } transition`}
        >
          All Grades
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

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-emerald-900 mb-2">
                {book.bookTitle}
              </h2>
              
              {/* Book Details */}
              <p className="text-gray-700 mb-2">
                Chapters: {book.numChapters || "N/A"}
              </p>
              <p className="text-gray-700 mb-2">
                Author: {book.author || "N/A"}
              </p>
              <p className="text-gray-700 mb-4">
                Curriculum: {book.curriculumn || "N/A"}
              </p>

              {/* Grade Badge */}
              <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm mb-4">
                {book.level}
              </span>

              {/* View Book Button */}
              <Link
                href={`/courses/${userType}/${book.bookCode}`}
                className="block text-center bg-emerald-600 text-white font-semibold py-2 rounded-lg hover:bg-emerald-700 transition"
              >
                View Book
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700 col-span-full text-center">
          No books available.
        </p>
      )}
    </div>
  );
};

export default CoursesPage;
