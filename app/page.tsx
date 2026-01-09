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
  promotion?: string
  cx: Episode[]
  hr: Episode[]
}

const jobs: Job[] = [
  {
    company: "Amazon India",
    logo: "/amazon.png",
    promotion: "Promoted to Executive Customer & Driver Relations (EXR) – Oct 2025",
    cx: [
      {
        title: "Executive Escalation Handling",
        description:
          "Handled 15–20 high-priority customer and driver escalations daily, resolving ~95% within same business day against a 24-hour SLA.",
      },
      {
        title: "First Contact Resolution (85%)",
        description:
          "Achieved ~85% FCR through effective probing, policy interpretation, and stakeholder coordination.",
      },
      {
        title: "Repeat Escalation Reduction",
        description:
          "Reduced repeat escalations by ~20% through root-cause analysis and corrective action.",
      },
      {
        title: "Compliance & Policy Exceptions",
        description:
          "Managed compliance-sensitive and legal-impact cases including refund exceptions and goodwill adjustments.",
      },
    ],
    hr: [
      {
        title: "Employee & Stakeholder Relations",
        description:
          "Coordinated with Legal, Compliance, Operations, and Support teams to ensure risk-aware, fair resolutions.",
      },
      {
        title: "Audit & Quality Excellence",
        description:
          "Maintained 100% audit pass rate for 9 consecutive weeks post-promotion; recognized for Best ACHT & PRR.",
      },
      {
        title: "Escalation Frameworks",
        description:
          "Designed escalation templates and frameworks using internal CRM and Outlook to improve TAT and consistency.",
      },
    ],
  },
  {
    company: "TalentFlow",
    logo: "/talentflow.png",
    cx: [
      {
        title: "End-to-End Recruitment",
        description:
          "Managed sourcing, screening, interviewing, offer negotiation, and onboarding across multiple roles.",
      },
      {
        title: "40+ Hiring Closures",
        description:
          "Closed 40+ positions within defined timelines across functions.",
      },
    ],
    hr: [
      {
        title: "Talent Acquisition Strategy",
        description:
          "Built sourcing pipelines and partnered with hiring managers to align expectations.",
      },
      {
        title: "Employer Branding",
        description:
          "Improved candidate experience through structured communication and feedback.",
      },
    ],
  },
  {
    company: "Taj Bengal Kolkata",
    logo: "/taj.png",
    cx: [
      {
        title: "HR Operations Support",
        description:
          "Handled employee queries, HR documentation, and policy guidance.",
      },
    ],
    hr: [
      {
        title: "Learning & Development",
        description:
          "Supported onboarding, training execution, and documentation.",
      },
    ],
  },
]

export default function Home() {
  const [mode, setMode] = useState<"CX" | "HR">("CX")
  const [selected, setSelected] = useState<any>(null)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500)
    return () => clearTimeout(timer)
  }, [])

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

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">
        <div className="text-center md:text-left">
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
      <div className="flex justify-end mb-12">
        <button
          onClick={() => setMode(mode === "CX" ? "HR" : "CX")}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Switch to {mode === "CX" ? "HR" : "CX"} View
        </button>
      </div>

      {/* JOB SECTIONS */}
      {jobs.map((job, idx) => (
        <section key={idx} className="mb-16">
          <div className="flex items-center gap-4 mb-2">
            <Image src={job.logo} alt={job.company} width={36} height={36} />
            <h2 className="text-2xl md:text-3xl font-bold text-red-600">
              {job.company}
            </h2>
          </div>

          {job.promotion && (
            <p className="text-sm text-gray-400 mb-4">
              {job.promotion}
            </p>
          )}

          <div className="flex gap-4 overflow-x-auto pb-4">
            {(mode === "CX" ? job.cx : job.hr).map((item, i) => (
              <div
                key={i}
                onClick={() => setSelected(item)}
                className="
                  min-w-[14rem] md:min-w-[16rem] h-[8rem]
                  bg-zinc-800 rounded-xl
                  flex items-center justify-center text-center
                  font-bold text-sm cursor-pointer
                  transition-all
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(229,9,20,0.9)]
                "
              >
                {item.title}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-zinc-900 p-6 rounded-xl max-w-xl w-full">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold text-red-600">
                {selected.title}
              </h2>
              <button onClick={() => setSelected(null)}>✕</button>
            </div>
            <p className="text-gray-300">{selected.description}</p>
          </div>
        </div>
      )}
    </main>
  )
}
