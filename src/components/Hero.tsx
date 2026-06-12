"use client";

import Image from "next/image";
import { useState } from "react";

const STATS = [
  { value: "50K+", label: "Open Roles" },
  { value: "12K+", label: "Companies" },
  { value: "2M+", label: "Job Seekers" },
];

const TAGS = ["Remote", "Full-time", "Part-time", "Internship", "Freelance"];

export default function HeroSection() {
  const [activeTag, setActiveTag] = useState("Remote");

  return (
    <section className="relative overflow-hidden bg-[#F5F8FF] pt-12 md:pt-20">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-[320px] rounded-full bg-[#DBEAFE] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#BFDBFE] opacity-50 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 md:px-10 lg:px-16 pt-6 pb-16 md:pb-20">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-[#1E3A8A] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
            1,240 new jobs posted today
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#111827]">
            Find Work That <span className="text-[#1E3A8A]">Fits You</span>,
            <br />
            Not the Other Way.
          </h1>

          {/* Subtitle */}
          <p className="max-w-md text-base sm:text-lg leading-relaxed text-[#6B7280]">
            Browse thousands of curated opportunities from top companies. Your
            next chapter starts here.
          </p>

          {/* Search */}
          {/* <div className="flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm max-w-xl">
            <div className="flex flex-1 items-center">
              <div className="pl-4 pr-2 text-[#9CA3AF]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, skill, or company…"
                className="flex-1 bg-transparent py-3.5 px-2 text-sm text-[#111827] placeholder-[#9CA3AF] outline-none"
              />
            </div>

            <button className="m-2 rounded-xl bg-[#1D4ED8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1E40AF]">
              Search Jobs
            </button>
          </div> */}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium ${
                  activeTag === tag
                    ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
                    : "border-[#E5E7EB] bg-white text-[#4B5563]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-8 pt-2">
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-[#111827]">
                  {s.value}
                </span>

                <span className="text-xs font-medium text-[#9CA3AF]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-130">
            {/* Main image card */}
            <div className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-xl">
              <Image
                src="/bg.png"
                alt="Job search illustration"
                width={700}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-3 left-2 sm:-left-6 rounded-2xl border border-[#F3F4F6] bg-white px-3 py-2 sm:px-4 sm:py-3 shadow-lg">
              <p className="text-xs font-bold text-[#111827]">
                328 applied today
              </p>

              <p className="text-[10px] text-[#9CA3AF]">
                New opportunities available
              </p>
            </div>

            {/* Match score */}
            <div className="absolute right-2 top-2 sm:-right-4 sm:-top-4 rounded-2xl bg-[#1D4ED8] px-3 py-2 sm:px-4 sm:py-3 text-white shadow-lg">
              <p className="text-[10px] opacity-70">Your match score</p>

              <p className="text-xl sm:text-2xl font-extrabold">94%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by */}
      {/* <div className="relative z-10 border-t border-[#E5E7EB] bg-white/70 px-4 py-5 sm:px-6 md:px-16">
        <p className="mb-4 text-center text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#9CA3AF]">
          Trusted by teams at
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 opacity-60">
          {["Notion", "Stripe", "Linear", "Vercel", "Figma", "Shopify"].map(
            (co) => (
              <span
                key={co}
                className="text-xs sm:text-sm font-bold tracking-tight text-[#374151]"
              >
                {co}
              </span>
            ),
          )}
        </div>
      </div> */}
    </section>
  );
}
