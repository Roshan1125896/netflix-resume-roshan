"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

type Episode = {
  title: string
  description: string
}

type Job = {
  company: string
  logo: string
  cx: Episode[]
  hr: Episode[]
}

/* ---------------- DATA ---------------- */

const jobs: Job[] = [
  {
    company: "Amazon India",
    logo: "/amazon.png",
    cx: [
      { title: "Customer Support (Phone, Chat & Email)", description: "Handled high-volume customer interactions with strong CSAT." },
      { title: "SME – New Hire Training", description: "Trained and mentored new associates." },
      { title: "DCE – Communication Training", description: "Delivered communication skill sessions." },
      { title: "Quality Audits", description: "Audited calls and improved quality metrics." },
      { title: "Policy & Workflow Improvements", description: "Improved SOPs and workflows." },
    ],
    hr: [
      { title: "People Development", description: "Coached associates for performance growth." },
      { title: "Training & Onboarding", description: "Supported onboarding programs." },
      { title: "Performance Management", description: "Tracked CSAT, SLA, and KPIs." },
      { title: "Process Optimization", description: "Improved HR processes." },
    ],
  },
  {
    company: "TalentFlow",
    logo: "/talentflow.png",
    cx: [
      { title: "End-to-End Recruitment", description: "Managed complete recruitment lifecycle." },
      { title: "40+ Hiring Closures", description: "Closed roles across departments." },
      { title: "Candidate Screening", description: "Conducted structured interviews." },
      { title: "ATS & Dashboards", description: "Maintained recruitment dashboards." },
    ],
    hr: [
      { title: "Talent Acquisition Strategy", description: "Built sourcing pipelines." },
      { title: "Employer Branding", description: "Enhanced candidate experience." },
      { title: "Stakeholder Management", description: "Aligned hiring managers." },
      { title: "Hiring Analytics", description: "Optimized recruitment with data." },
    ],
  },
  {
    company: "Taj Bengal Kolkata",
    logo: "/taj.png",
    cx: [
      { title: "HR Operations Support", description: "Handled HR documentation and queries." },
      { title: "Exit Interviews", description: "Conducted exit interviews." },
      { title: "Learning & Development", description: "Supported onboarding & training." },
      { title: "Training Records", description: "Maintained training audits." },
    ],
    hr: [
      { title: "HR Compliance", description: "Managed compliance & policies." },
      { title: "Employee Engagement", description: "Supported engagement initiatives." },
      { title: "Training Documentation", description: "Prepared HR manuals." },
    ],
  },
]

/* ---------------- COMPONENT ---------------- */

export default function Home() {
  const [mode, setMode] = useState<"CX" | "HR">("CX")
  const [recruiterView, setRecruiterView] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    if (!recruiterView) {
      const timer = setTimeout(() => setShowIntro(false), 2500)
      return () => clearTimeout(timer)
    } else {
      setShowIntro(false)
    }
  }, [recruiterView])

  /* ---------------- RECRUITER VIEW ---------------- */
  if (recruiterView) {
    return (
      <main className="bg-black min-h-screen text-white p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
            <div>
              <h1 className="text-4xl font-extrabold text-red-600">
                Roshan Alam
              </h1>
              <p className="text-gray-300 mt-2">
                HR Operations | Talent Acquisition | L&D | Amazonian
              </p>
              <p className="text-sm text-blue-400 mt-1">
                linkedin.com/in/roshan-alam-1016j
              </p>
            </div>

            <Image
              src="/roshan.jpg"
              alt="Roshan Alam"
              width={140}
              height={140}
              className="rounded-full border-2 border-red-600"
            />
          </div>

          {/* SUMMARY */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-red-600 mb-3">
              Professional Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Customer Experience and People Management professional with 5+ years
              of experience across Amazon India, TalentFlow, and Taj Bengal.
              Strong expertise in HR operations, recruitment, training, and
              performance management.
            </p>
          </section>

          {/* SKILLS */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-red-600 mb-3">
              Core Skills
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
              <li>• Talent Acquisition & Hiring</li>
              <li>• HR Operations & Compliance</li>
              <li>• Training & L&D</li>
              <li>• Stakeholder Management</li>
              <li>• Performance Metrics (CSAT, SLA)</li>
              <li>• Employee Engagement</li>
            </ul>
          </section>

          {/* EXPERIENCE */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-red-600 mb-3">
              Experience Highlights
            </h2>
            <ul className="list-disc ml-5 text-gray-300 space-y-2">
              <li>Amazon India – Customer Service & SME (CX, Training, QA)</li>
              <li>TalentFlow – End-to-End Recruitment (40+ closures)</li>
              <li>Taj Bengal – HR Operations & Learning & Development</li>
            </ul>
          </section>

          {/* EDUCATION */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-red-600 mb-3">
              Education
            </h2>
            <ul className="list-disc ml-5 text-gray-300">
              <li>BSc. Hotel & Hospitality Management – SBIHM Kolkata (8.9 CGPA)</li>
              <li>Class XII – CBSE (83.6%)</li>
              <li>Class X – CBSE (89.83%)</li>
            </ul>
          </section>

          {/* CONTACT */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-red-600 mb-3">
              Contact
            </h2>
            <p className="text-gray-300">📞 7044467898</p>
            <p className="text-gray-300">📧 roshan.alam.official@gmail.com</p>
            <p className="text-gray-300">
              📍 Khardah, Kolkata – 700117
            </p>
          </section>

          {/* BACK BUTTON */}
          <button
            onClick={() => setRecruiterView(false)}
            className="bg-red-600 px-6 py-3 rounded font-semibold"
          >
            Back to Interactive View
          </button>
        </div>
      </main>
    )
  }

  /* ---------------- INTERACTIVE VIEW ---------------- */

  return (
    <main className="bg-black min-h-screen text-white p-4 md:p-10 overflow-x-hidden">

      {/* NETFLIX INTRO */}
      {showIntro && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <h1 className="text-red-600 text-5xl md:text-8xl font-extrabold tracking-widest animate-netflixIntro">
            ROSHAN&nbsp;ALAM
          </h1>
        </div>
      )}

      {/* TOP ACTIONS */}
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl p-2"
        >
          ☰
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => setMode(mode === "CX" ? "HR" : "CX")}
            className="bg-red-600 px-4 py-2 rounded"
          >
            {mode} View
          </button>

          <button
            onClick={() => setRecruiterView(true)}
            className="border border-red-600 px-4 py-2 rounded"
          >
            Recruiter View
          </button>
        </div>
      </div>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div className="text-center md:text-right">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-600">
            Roshan Alam
          </h1>
          <a
            href="https://www.linkedin.com/in/roshan-alam-1016j/"
            target="_blank"
            className="text-blue-400 text-sm"
          >
            linkedin.com/in/roshan-alam-1016j
          </a>
        </div>

        <Image
          src="/roshan.jpg"
          alt="Roshan Alam"
          width={120}
          height={120}
          className="rounded-full border-2 border-red-600"
        />
      </div>

      {/* SECTIONS */}
      {jobs.map((job, idx) => (
        <section key={idx} className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
            {job.company}
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {(mode === "CX" ? job.cx : job.hr).map((item, i) => (
              <div
                key={i}
                className="min-w-[14rem] md:min-w-[16rem] h-[8rem] bg-zinc-800 rounded-xl flex items-center justify-center text-center font-bold cursor-pointer transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(229,9,20,0.9)]"
              >
                {item.title}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="bg-zinc-900 p-8 rounded-xl text-center">
            <Image src="/roshan.jpg" alt="" width={140} height={140} className="rounded-full mx-auto mb-4" />
            <p>📞 7044467898</p>
            <p>📧 roshan.alam.official@gmail.com</p>
            <p className="text-sm mt-2">Khardah, Kolkata – 700117</p>
            <button onClick={() => setMenuOpen(false)} className="mt-4 text-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}