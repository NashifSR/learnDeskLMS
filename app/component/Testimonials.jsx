import React from "react";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "শফিকুল ইসলাম",
      relation: "মুরুব্বি",
      text: "আল ফুরকান গার্লস মাদরাসা আমাদের এলাকার শিশুদের আধ্যাত্মিক ও শিক্ষাগত বিকাশে অনন্য অবদান রাখছে। শিক্ষকগণ খুব যত্নশীল এবং পথপ্রদর্শক।",
    },
    {
      name: "মাহফুজুর রহমান",
      relation: "মুরুব্বি",
      text: "মাদরাসার পরিবেশ শান্তিপূর্ণ এবং শিক্ষার্থীদের চরিত্র গঠনের দিকে মনোযোগী। আমাদের শিক্ষার্থীদের জন্য এটি খুবই গুরুত্বপূর্ণ একটি প্রতিষ্ঠান।",
    },
    {
      name: "সরফিকুল হক",
      relation: "মুরুব্বি",
      text: "এখানে কোরআন শিক্ষা, জীবনমুখী দক্ষতা ও নৈতিক শিক্ষা একসাথে শেখানো হয়। এটি শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করে।",
    },
    {
      name: "আজিজুল হক",
      relation: "মুরুব্বি",
      text: "শিক্ষার্থীদের আত্মবিশ্বাস এবং আধ্যাত্মিকতা উন্নয়নের প্রতি এই মাদরাসার দৃষ্টি প্রশংসনীয়। আমাদের শিশুদের জন্য এটি আশীর্বাদস্বরূপ।",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-6 sm:px-12 text-center bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
        Testimonials
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-base sm:text-lg">
        Hear what parents and students have to say about Al Furkan Girls
        Madrasa.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="mb-4">
              <MessageSquare className="w-6 h-6 text-green-600 mb-2" />
              <p className="text-gray-700 text-sm">{t.text}</p>
            </div>
            <div className="mt-4 text-left">
              <h3 className="text-md font-semibold text-emerald-800">
                {t.name}
              </h3>
              {/* <p className="text-gray-500 text-sm">{t.relation}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
