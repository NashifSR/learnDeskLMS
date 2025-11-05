import React from "react";
import { BookOpen, Monitor } from "lucide-react";

const OfferSection = () => {
  const offers = [
    {
      icon: <BookOpen className="w-10 h-10 text-green-600" />,
      title: "প্রাতিষ্ঠানিক শিক্ষা (ক্লাস ৩ থেকে ৯)",
      description:
        "আমরা তৃতীয় শ্রেণী থেকে নবম শ্রেণী পর্যন্ত মানসম্পন্ন শিক্ষা প্রদান করি, জ্ঞান এবং চরিত্র উভয়কেই লালন করার জন্য সাধারণ শিক্ষার সাথে ইসলামী মূল্যবোধের মিশ্রণ করি।",
    },
    {
      icon: <Monitor className="w-10 h-10 text-green-600" />,
      title: "কম্পিউটার দক্ষতা প্রশিক্ষণ",
      description:
        "আমাদের কম্পিউটার শিক্ষা কার্যক্রম শিক্ষার্থীদের আধুনিক, প্রযুক্তি-চালিত বিশ্বে সাফল্যের জন্য প্রয়োজনীয় ডিজিটাল দক্ষতা দিয়ে সজ্জিত করে।",
    },
    {
      icon: <Monitor className="w-10 h-10 text-green-600" />,
      title: "ডিজিটাল প্রক্রিয়ায় শিক্ষাদান",
      description:
        "আমরা ডিজিটাল মাধ্যমের মাধ্যমে মানসম্পন্ন শিক্ষা প্রদান করি, আকর্ষণীয় এবং ইন্টারেক্টিভ শেখার অভিজ্ঞতা প্রদান করি যা জ্ঞানকে সহজলভ্য করে তোলে।",
    },
  ];

  return (
    <section className="py-20 w-full bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          আমরা যা প্রদান করি
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          আমাদের মাদ্রাসা শিক্ষার্থীদের দুনিয়া ও আখেরাতের সাফল্যের জন্য প্রস্তুত করার জন্য একাডেমিক এবং ব্যবহারিক উভয় শিক্ষা প্রদান করে।
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{offer.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {offer.title}
              </h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-8">
          <a
            href="tel:+880123456789"
            className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-all text-lg"
          >
            এখনই কল করুন: ০১৭১১ ২০০ ১০৮
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
