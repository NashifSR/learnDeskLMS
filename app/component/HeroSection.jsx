import React from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-12 overflow-hidden from-transparent via-white to-emerald-50 rounded-b-2xl shadow">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[url('/patterns/islamic-pattern.svg')] bg-repeat opacity-5 pointer-events-none"
        style={{ backgroundSize: "250px 250px" }}
      />

      {/* Optional decorative circles */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-emerald-100 rounded-full opacity-20 -translate-x-1/2 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-amber-100 rounded-full opacity-20 blur-2xl pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-emerald-800 drop-shadow-lg leading-tight animate-fadeIn">
          আল ফুরকান ইসলামিয়া বালিকা মাদ্রাসা
        </h1>

        <p className="text-base sm:text-lg md:text-xl italic mt-4 text-gray-700 animate-fadeIn delay-100">
          “আমরা বিশ্বাস, জ্ঞান এবং চরিত্র বিকাশ করি”
        </p>

        <p className="mt-6 text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg animate-fadeIn delay-200">
          এটি এমন একটি জায়গা যেখানে মেয়েরা সামাজিক, ধর্মীয় এবং নৈতিকভাবে বেড়ে
          ওঠে। <br></br>
          আমরা প্রয়োজনীয় জীবন দক্ষতা সহ খাঁটি ইসলামী শিক্ষার জন্য
          দিকনির্দেশনা প্রদান করি — আমাদের শিক্ষার্থীদের উদ্দেশ্য, আত্মবিশ্বাস
          এবং ইসলামের প্রতি নিষ্ঠার সাথে জীবনযাপনের জন্য প্রস্তুত করি।
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fadeIn delay-300">
          <Link
            href="#about"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-all shadow-md hover:scale-105"
          >
            আমাদের মাদ্রাসা সম্পর্কে
          </Link>

          <Link
            href="tel:+880123456789"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all shadow-md hover:scale-105"
          >
            <Phone className="w-5 h-5" /> এখনই ফোন করুন
          </Link>

          <Link
            href="https://wa.me/880123456789"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all shadow-md hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
