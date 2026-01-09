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

const education: Episode[] = [
  { title: "BSc. Hotel & Hospitality Management", description: "SBIHM Kolkata – 8.9 CGPA" },
  { title: "Class XII (CBSE)", description: "83.6%" },
  { title: "Class X (CBSE)", description: "89.83%" },
]

const achievements: Episode[] = [
  { title: "Employee Wellness Program", description: "Designed mental wellness initiatives." },
  { title: "Vice President – Committee", description: "Led student engagement." },
  { title: "2nd Place – Whisky Heritage Quiz", description: "Paul John, Goa." },
  { title: "Runner-up – Cocktail Making", description: "Paul John, Goa." },
]

export default function Home() {
  const [mode, setMode] = useState<"CX" | "HR">("CX")
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState<any>(null)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-black min-h-screen text-white p-4 md:p-10 overflow-x-hidden">

      {/* INTRO */}
      {showIntro && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <h1 className="text-red-600 text-5xl md:text-8xl font-extrabold tracking-widest animate-netflixIntro">
            ROSHAN&nbsp;ALAM
          </h1>
        </div>
      )}

      {/* HAMBURGER */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 left-4 text-3xl z-50 p-2"
      >
        ☰
      </button>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
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

      {/* MODE TOGGLE */}
      <div className="flex justify-center md:justify-end mb-10">
        <button
          onClick={() => setMode(mode === "CX" ? "HR" : "CX")}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Switch to {mode === "CX" ? "HR" : "CX"} Mode
        </button>
      </div>

      {/* SECTIONS */}
      {[...jobs, { company: "Education", logo: "", cx: education, hr: education }, { company: "Achievements", logo: "", cx: achievements, hr: achievements }].map(
        (section, idx) => (
          <section key={idx} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              {section.logo && <Image src={section.logo} alt="" width={32} height={32} />}
              <h2 className="text-2xl md:text-3xl font-bold text-red-600">
                {section.company}
              </h2>
            </div>

            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
              {(mode === "CX" ? section.cx : section.hr).map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(item)}
                  className="snap-start min-w-[14rem] md:min-w-[16rem] h-[8rem] bg-zinc-800 rounded-xl flex items-center justify-center text-center font-bold text-sm cursor-pointer transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(229,9,20,0.9)]"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </section>
        )
      )}

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-zinc-900 p-6 rounded-xl max-w-xl w-full">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold text-red-600">{selected.title}</h2>
              <button onClick={() => setSelected(null)}>✕</button>
            </div>
            <p className="text-gray-300">{selected.description}</p>
          </div>
        </div>
      )}

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
