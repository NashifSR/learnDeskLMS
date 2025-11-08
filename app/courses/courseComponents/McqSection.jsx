
"use client";
import useMCQ from "@/app/Hooks/useMcq";
import React, { useState, useEffect } from "react";

const McqSection = ({ lesson, user, course }) => {
  const { mcq, isLoading, isError } = useMCQ();
  const [selectedSet, setSelectedSet] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  // Load MCQs for this course & lesson
  const mcqList = mcq?.[course]?.filter(
    (item) => item.lesson_slug === lesson && item.userType === user
  ) || [];

  // Extract sets dynamically
  const sets = [...new Set(mcqList.map((q) => q.question_set))];

  // Filter by selected set
  const filteredQuestions = selectedSet
    ? mcqList.filter((q) => q.question_set === selectedSet)
    : [];

  // Handle answer select
  const handleOptionSelect = (id, selectedOption) => {
    setAnswers((prev) => {
      const updated = prev.filter((a) => a.id !== id);
      return [...updated, { id, selectedOption }];
    });
  };

  // Handle submission
  const handleSubmit = () => {
    let correctCount = 0;
    answers.forEach((a) => {
      const q = filteredQuestions.find((x) => x.id == a.id);
      if (q && q.correct_answer === a.selectedOption) correctCount++;
    });
    setResult({
      set: selectedSet,
      score: correctCount,
      total: filteredQuestions.length,
    });
  };

  const closeModal = () => {
    setResult(null);
    setAnswers([]);
  };

  if (isLoading)
    return <p className="text-center text-emerald-700">Loading MCQs...</p>;
  if (isError)
    return <p className="text-center text-red-600">Error loading MCQs.</p>;
  if (!mcqList.length)
    return (
      <p className="text-center text-gray-600">No MCQs available yet.</p>
    );

  return (
    <div className="space-y-6">
      {/* Set Selector */}
      <div className="flex flex-wrap gap-3 mb-4">
        {sets.map((setName) => (
          <button
            key={setName}
            onClick={() => setSelectedSet(setName)}
            className={`px-4 py-2 rounded-full font-medium shadow transition ${
              selectedSet === setName
                ? "bg-emerald-600 text-white"
                : "bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50"
            }`}
          >
            {setName}
          </button>
        ))}
      </div>

      {/* Questions */}
      {selectedSet && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-6"
        >
          {filteredQuestions.map((q, index) => (
            <div
              key={q.id}
              className="p-4 bg-emerald-50 rounded-lg border border-emerald-100 shadow-sm"
            >
              <h3 className="font-semibold text-emerald-900 mb-2">
                {index + 1}. {q.question}
              </h3>
              <div className="space-y-2">
                {q.options.map((opt, i) => (
                  <label
                    key={i}
                    className={`flex items-center gap-2 p-2 rounded-md cursor-pointer border ${
                      answers.find((a) => a.id === q.id)?.selectedOption === opt
                        ? "bg-emerald-100 border-emerald-500"
                        : "border-gray-300 hover:bg-emerald-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={opt}
                      onChange={() => handleOptionSelect(q.id, opt)}
                      checked={
                        answers.find((a) => a.id === q.id)?.selectedOption ===
                        opt
                      }
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* Submit */}
          {filteredQuestions.length > 0 && (
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition"
            >
              Submit Answers
            </button>
          )}
        </form>
      )}

      {/* Result Modal */}
      {result && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-sm mx-auto">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">
              🎉 Great Job!
            </h2>
            <p className="text-gray-700 mb-1">
              You completed <strong>{result.set}</strong>
            </p>
            <p className="text-lg font-semibold text-emerald-800 mb-4">
              You got {result.score} / {result.total} correct!
            </p>
            <button
              onClick={closeModal}
              className="px-5 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default McqSection;
