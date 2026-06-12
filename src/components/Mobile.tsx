"use client";

export default function MobileAppSection() {
  return (
    <section className="relative bg-linear-to-b from-[#F8FAFC] to-[#EFF6FF] py-14 md:py-24 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* soft background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-112.5 h-112.5 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* HEADER */}
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Orseek Mobile App
        </span>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Take Orseek <span className="text-blue-700">Anywhere</span>
        </h2>

        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
          Stay updated with real-time job alerts and AI-powered applications
          directly from your phone.
        </p>

        {/* BUTTON */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            // href="/orseek.rar"
            download
            className="inline-flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl shadow-md"
          >
            <span className="text-sm font-semibold">Download Android APK</span>
          </a>
        </div>

        {/* IMAGE */}
        {/* <div className="mt-10">
          <div className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-4xl rounded-2xl overflow-hidden shadow-lg border border-blue-100 bg-white">
            <img
              src="watermarked_img_8848223840440416101.png"
              alt="Mobile App Preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
