import React from "react";
import { BookOpen, UserCheck, Home, Star } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "সুষম পাঠ্যক্রম",
      description:
        "ছাত্রীদের সামগ্রিক বিকাশের জন্য ইসলামী শিক্ষার সাথে একাডেমিক এবং ব্যবহারিক দক্ষতার সমন্বয় করে।",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-green-600" />,
      title: "যোগ্য শিক্ষক/শিক্ষিকা",
      description:
        "জ্ঞান, চরিত্র এবং আত্মবিশ্বাস লালন করার জন্য নিবেদিতপ্রাণ অভিজ্ঞ এবং যত্নশীল মহিলা শিক্ষক।",
    },
    {
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: "নিরাপদ পরিবেশ",
      description:
        "শিক্ষার্থীদের শেখার, বেড়ে ওঠার এবং সমৃদ্ধির জন্য একটি নিরাপদ, ইতিবাচক এবং লালনশীল স্থান।",
    },
    {
      icon: <Star className="w-8 h-8 text-green-600" />,
      title: "চারিত্রিক বিকাশের উপর মনোযোগ",
      description:
        "শিক্ষাগত উৎকর্ষতার পাশাপাশি আখলাক, শৃঙ্খলা এবং নেতৃত্বের উপর জোর দেয়।",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 px-6 sm:px-12 bg-white text-center relative bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
        কেন আমাদের বেছে নিবেন
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-base sm:text-lg">
        আল ফুরক্বান ইসলামিয়া বালিকা মাদ্রাসায়, আমরা প্রতিটি শিক্ষার্থীর জন্য জ্ঞান, মূল্যবোধ এবং ব্যক্তিগত বিকাশের নিখুঁত ভারসাম্য প্রদানের জন্য প্রচেষ্টা করি।
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {points.map((point, index) => (
          <div
            key={index}
            className="bg-emerald-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex justify-center mb-4">{point.icon}</div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">
              {point.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
