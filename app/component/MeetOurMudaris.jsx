import React from "react";

const MeetOurMudaris = () => {
  const teachers = [
    {
      name: "মাওলানা সাইফুল্লাহ হাসান",
      role: "কোরআন ও তাজবীদ শিক্ষক",
      photo: "/teachers/saifullah.jpg",
      bio: "কোরআন তেলাওয়াত ও তাজবীদে বিশেষজ্ঞ। আল্লাহর কিতাবের প্রতি আন্তরিকতা ও ভালোবাসার সাথে শিক্ষা দেন।",
    },
    {
      name: "মাওলানা নূরুল আলম",
      role: "হাদিস ও ফিকহ প্রশিক্ষক",
      photo: "/teachers/nurul.jpg",
      bio: "ব্যবহারিক উদাহরণের মাধ্যমে শিক্ষার্থীদের হাদিস এবং ইসলামী আইনশাস্ত্র সম্পর্কে ধারণা গভীর করার জন্য নিবেদিতপ্রাণ",
    },
    {
      name: "ওস্তাদ কামরুল হাসান",
      role: "আরবি ভাষা ও সাহিত্য শিক্ষক",
      photo: "/teachers/kamrul.jpg",
      bio: "শিক্ষার্থীদের আরবি আয়ত্ত করতে এবং ইসলামী গ্রন্থের সৌন্দর্য উপলব্ধি করতে সাহায্য করার জন্য নিবেদিত প্রাণ।",
    },
    {
      name: "ওস্তাদ ফরিদ উদ্দিন",
      role: "কম্পিউটার ও আধুনিক বিদ্যা প্রশিক্ষক",
      photo: "/teachers/farid.jpg",
      bio: "কম্পিউটার সাক্ষরতা এবং ডিজিটাল দক্ষতার মাধ্যমে আধুনিক শিক্ষার সাথে ঐতিহ্যবাহী ইসলামী শিক্ষার সেতুবন্ধন।",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 text-center bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow" id="ustads">
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
        আমাদের শিক্ষকদের সাথে দেখা করুন
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-base sm:text-lg">
        আমাদের যোগ্য এবং উচ্চশিক্ষিত শিক্ষকরা আপনার মেয়েদের জন্য সর্বোত্তম
        ইসলামিক এবং একাডেমিক শিক্ষা প্রদানের জন্য প্রতিশ্রুতিবদ্ধ।
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
          >
            <img
              src={teacher.photo}
              alt={teacher.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-1">
                {teacher.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{teacher.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {teacher.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurMudaris;
