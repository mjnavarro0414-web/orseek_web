"use client";

import React from "react";

/* ─── Data (unchanged) ─── */
const LOCAL_JOBS = [
  {
    role: "Customer Service Rep",
    co: "Concentrix",
    loc: "0.3 km · BGC",
    pay: "₱25k/mo",
    urgent: true,
    bg: "#DBEAFE",
    fg: "#1E40AF",
  },
  {
    role: "Software Engineer",
    co: "Sprout Solutions",
    loc: "1.2 km · Pasig",
    pay: "₱75k/mo",
    urgent: false,
    bg: "#E0F2FE",
    fg: "#1D4ED8",
  },
  {
    role: "Registered Nurse",
    co: "The Medical City",
    loc: "2.1 km · Ortigas",
    pay: "₱32k/mo",
    urgent: true,
    bg: "#DBEAFE",
    fg: "#1E3A8A",
  },
  {
    role: "Accounting Staff",
    co: "Jollibee Foods",
    loc: "2.8 km · Pasig",
    pay: "₱28k/mo",
    urgent: false,
    bg: "#EFF6FF",
    fg: "#1E40AF",
  },
];

const TOP_ROLES = [
  { name: "Customer Service", count: 312, pct: 100 },
  { name: "Sales Associate", count: 245, pct: 79 },
  { name: "Software Engineer", count: 198, pct: 63 },
  { name: "Healthcare / Nursing", count: 175, pct: 56 },
  { name: "Accounting / Finance", count: 142, pct: 46 },
];

const SKILLS = [
  { name: "MS Office / Excel", match: 96, demand: "Very High" },
  { name: "English Communication", match: 91, demand: "High" },
  { name: "Customer Handling", match: 85, demand: "High" },
  { name: "Basic Accounting", match: 74, demand: "Medium" },
];

const DISTRICTS = [
  { name: "Pasig City", count: 1240, newToday: 47 },
  { name: "Ortigas Center", count: 980, newToday: 31 },
  { name: "BGC, Taguig", count: 2100, newToday: 89 },
  { name: "Makati CBD", count: 1850, newToday: 62 },
];

const SALARY_ROWS = [
  {
    role: "Customer Service",
    entry: "₱18k",
    mid: "₱25k",
    senior: "₱42k",
    trend: "+8%",
  },
  {
    role: "Software Engineer",
    entry: "₱35k",
    mid: "₱75k",
    senior: "₱150k",
    trend: "+15%",
  },
  {
    role: "Registered Nurse",
    entry: "₱22k",
    mid: "₱32k",
    senior: "₱58k",
    trend: "+11%",
  },
  {
    role: "Sales Associate",
    entry: "₱16k",
    mid: "₱24k",
    senior: "₱45k",
    trend: "+6%",
  },
  {
    role: "Accounting Staff",
    entry: "₱20k",
    mid: "₱32k",
    senior: "₱60k",
    trend: "+9%",
  },
];

const COMPANIES = [
  { name: "Concentrix", cat: "BPO", bg: "#DBEAFE", fg: "#1E40AF" },
  { name: "SM Retail", cat: "Retail", bg: "#EFF6FF", fg: "#1E3A8A" },
  { name: "Sprout", cat: "Tech", bg: "#DBEAFE", fg: "#1D4ED8" },
  { name: "Medical City", cat: "Health", bg: "#E0F2FE", fg: "#1E3A8A" },
  { name: "Jollibee", cat: "F&B", bg: "#EFF6FF", fg: "#1E40AF" },
  { name: "Accenture", cat: "IT / Cons.", bg: "#DBEAFE", fg: "#1E3A8A" },
];

/* ─── Components (unchanged logic, only safer styling) ─── */

function NearbyJobs() {
  return (
    <div className="flex flex-col gap-2">
      {LOCAL_JOBS.map((j, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-3"
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold"
            style={{ background: j.bg, color: j.fg }}
          >
            {j.co[0]}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold text-[#111827]">
              {j.role}
            </p>
            <p className="text-[10px] text-[#6B7280]">
              {j.co} · {j.loc}
            </p>
          </div>

          <span
            className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold"
            style={{ background: j.bg, color: j.fg }}
          >
            {j.pay}
          </span>
        </div>
      ))}
    </div>
  );
}

function TopRoles() {
  return (
    <div className="mt-4 flex flex-col gap-3">
      {TOP_ROLES.map((r, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="w-4 text-center text-xs font-bold text-[#93C5FD]">
            {i + 1}
          </span>

          <div className="flex-1">
            <div className="mb-1 flex justify-between">
              <span className="text-xs font-semibold text-[#374151]">
                {r.name}
              </span>
              <span className="text-[10px] text-[#9CA3AF]">{r.count} open</span>
            </div>

            <div className="h-2 w-full rounded-full bg-[#EFF6FF]">
              <div
                className="h-2 rounded-full bg-[#3B82F6]"
                style={{ width: `${r.pct}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SkillBars() {
  return (
    <div className="mt-4 flex flex-col gap-3">
      {SKILLS.map((s, i) => (
        <div key={i}>
          <div className="mb-1 flex justify-between">
            <span className="text-xs font-semibold text-[#374151]">
              {s.name}
            </span>
            <span className="text-[10px] text-[#6B7280] uppercase">
              {s.demand}
            </span>
          </div>

          <div className="h-2 w-full rounded-full bg-[#EFF6FF]">
            <div
              className="h-2 rounded-full bg-[#2563EB]"
              style={{ width: `${s.match}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function DistrictList() {
  return (
    <div className="mt-3 flex flex-col gap-2">
      {DISTRICTS.map((d, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-xl bg-white/10 p-3"
        >
          <span className="text-xs font-medium text-black">{d.name}</span>

          <div className="text-right">
            <p className="text-sm font-bold text-black">
              {d.count.toLocaleString()}
            </p>
            <p className="text-[10px] text-black/50">+{d.newToday} today</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SalaryTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-125 text-xs text-black">
        <thead className="text-black/70 uppercase tracking-widest">
          <tr>
            <th className="py-2 text-left">Role</th>
            <th>Entry</th>
            <th>Mid</th>
            <th>Senior</th>
            <th>YoY</th>
          </tr>
        </thead>
        <tbody>
          {SALARY_ROWS.map((r, i) => (
            <tr key={i} className="border-t border-white/10">
              <td className="py-2 font-semibold">{r.role}</td>
              <td className="text-center text-white/60">{r.entry}</td>
              <td className="text-center font-bold">{r.mid}</td>
              <td className="text-center text-white/60">{r.senior}</td>
              <td className="text-center text-[#60A5FA]">{r.trend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HiringCompanies() {
  return (
    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
      {COMPANIES.map((c, i) => (
        <div
          key={i}
          className="flex flex-col items-center rounded-xl border border-[#E5E7EB] p-3 text-center"
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold"
            style={{ background: c.bg, color: c.fg }}
          >
            {c.name[0]}
          </div>

          <p className="mt-1 text-xs font-semibold text-[#111827]">{c.name}</p>

          <span className="mt-1 rounded-full bg-[#EFF6FF] px-2 py-0.5 text-[10px] text-[#1E40AF]">
            {c.cat}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── Card ─── */
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#E5E7EB] bg-white p-5 ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── MAIN ─── */
export default function FeaturesSection() {
  return (
    <section className="relative bg-[#F8FAFC] px-4 py-16 sm:px-6 md:px-12 lg:px-16">
      {/* header */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
          Why LocalWork PH
        </span>

        <h2 className="mt-2 text-2xl font-extrabold text-[#111827] sm:text-4xl">
          Jobs in your neighborhood
        </h2>

        <p className="mt-3 text-sm text-[#6B7280] sm:text-base">
          Real local opportunities across Metro Manila.
        </p>
      </div>

      {/* GRID (mobile-safe) */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-12">
        <div className="md:col-span-4">
          <Card>
            <h3 className="text-sm font-bold text-[#111827]">
              Hiring Near You
            </h3>
            <NearbyJobs />
          </Card>
        </div>

        <div className="md:col-span-5">
          <Card>
            <h3 className="text-sm font-bold text-[#111827]">
              Most In-Demand Roles
            </h3>
            <TopRoles />
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card>
            <h3 className="text-sm font-bold text-[#111827]">Active Jobs</h3>
            <p className="text-2xl font-bold text-[#3B82F6]">6,840</p>
          </Card>
        </div>

        <div className="md:col-span-5">
          <Card>
            <h3 className="text-sm font-bold text-[#111827]">Skill Match</h3>
            <SkillBars />
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card className="bg-[#1E293B] text-black">
            <h3 className="text-sm font-bold">Jobs by District</h3>
            <DistrictList />
          </Card>
        </div>

        <div className="md:col-span-8">
          <Card className="bg-[#1E3A8A] text-black">
            <h3 className="text-sm font-bold">Salary Guide</h3>
            <SalaryTable />
          </Card>
        </div>

        <div className="md:col-span-4">
          <Card>
            <h3 className="text-sm font-bold">Hiring Companies</h3>
            <HiringCompanies />
          </Card>
        </div>
      </div>
    </section>
  );
}
