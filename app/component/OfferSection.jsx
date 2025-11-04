import React from "react";
import { BookOpen, Monitor } from "lucide-react";

const OfferSection = () => {
  const offers = [
    {
      icon: <BookOpen className="w-10 h-10 text-green-600" />,
      title: "Academic Education (Class 3–9)",
      description:
        "We provide quality education from Class 3 to Class 9, blending Islamic values with general education to nurture both knowledge and character.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-green-600" />,
      title: "Computer Skills Training",
      description:
        "Our computer education program equips students with essential digital skills to thrive in a modern, technology-driven world.",
    },
  ];

  return (
    <section className="py-20 w-full bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          আমরা যা অফার করি
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
