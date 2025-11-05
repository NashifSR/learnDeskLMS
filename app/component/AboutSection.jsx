import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-6 sm:px-12 relative bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow"
    >
      {/* Left: Image or Illustration */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg border-4 border-emerald-200">
          <img
            src="/madrasa.png" // just reference from public folder
            alt="Students studying Qur'an"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Decorative circle */}
        <div className="absolute -z-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800">
          আমাদের মাদ্রাসা
        </h2>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          <strong>আল ফুরক্বান বালিকা মাদ্রাসা</strong> দ্বীন এবং দুনিয়া, উভয়কেই
          গড়ে তোলার জন্য — মেয়েশিশুদের ঈমান, বুদ্ধি এবং
          ব্যক্তিত্ব লালন-পালন করে। আমাদের লক্ষ্য হলো শিক্ষিত, আত্মবিশ্বাসী এবং
          ধর্মীয়ভাবে মুসলিম নারীদের একটি প্রজন্মকে অনুপ্রাণিত করা।
        </p>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          আমরা এমন একটি সামগ্রিক পরিবেশ প্রদান করি যেখানে কুরআনের শিক্ষা ব্যবহারিক
          দক্ষতার সাথে মিলিত হয়, ঐতিহ্যবাহী ইসলামী শিক্ষাকে আধুনিক শিক্ষা ব্যবস্থার সাথে মিশ্রিত করে। জ্ঞান, শৃঙ্খলা এবং মানবিকতার মাধ্যমে, আমরা
          আমাদের শিক্ষার্থীদের বিশ্বাস এবং সততার সাথে নেতৃত্ব দেওয়ার জন্য
          প্রস্তুত করি।
        </p>

        <div className="pt-4">
          <a
            href="#programs"
            className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md"
          >
            আমাদের কার্জক্রমগুলি দেখুন
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
