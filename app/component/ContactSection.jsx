import React from "react";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-12 text-center bg-gradient-to-b from-transparent via-white to-emerald-50 rounded-b-2xl shadow"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
        যোগাযোগ এবং অবস্থান
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-base sm:text-lg">
        আপনার কোন প্রশ্ন আছে অথবা আপনার মেয়েকে ভর্তি করতে চান? ফোন, হোয়াটসঅ্যাপ, অথবা আমাদের যোগাযোগ ফর্মের মাধ্যমে আমাদের সাথে যোগাযোগ করুন।
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <form className="bg-emerald-50 p-8 rounded-2xl shadow-md space-y-4">
          <input
            type="text"
            placeholder="আপনার নাম"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="Phone"
            placeholder="ফোন নাম্বার"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            placeholder="বার্তা"
            rows="4"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button
            type="পাঠান"
            className="w-full py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md"
          >
            বার্তা পাঠান
          </button>
        </form>

        {/* Contact Info & Map */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-green-600" />
            <a href="tel:+880123456789" className="text-gray-700 hover:text-green-600">
              ০১৭১ ২০০ ১০৮
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-green-600" />
            <a
              href="https://wa.me/880123456789"
              target="_blank"
              className="text-gray-700 hover:text-green-600"
            >
              WhatsApp Chat
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-green-600" />
            <span className="text-gray-700">
              আল ফুরকান ইলামিয়া বালিকা মাদ্রাসা, প্রফেসর পাড়া, লতিফপুর বাজারের পাশে, গোড়াই, মির্জাপুর, টাঙ্গাইল
            </span>
          </div>

          {/* Optional: Embedded Google Map */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Madrasa Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d183.73559979267574!2d90.14666616657153!3d24.118333099937786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1762233134392!5m2!1sen!2sbd"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
