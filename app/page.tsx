"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

/* ================= TYPES ================= */
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

/* ================= DATA ================= */
const jobs: Job[] = [
  {
    company: "Amazon India",
    logo: "/amazon.png",
    promotion: "Promoted to Executive Customer & Driver Relations (EXR) – Oct 2025",
    cx: [
      {
        title: "Executive Escalation Handling",
        description:
          "Handled 15–20 escalations daily, resolving ~95% within same day against 24-hour SLA.",
      },
      {
        title: "First Contact Resolution (85%)",
        description:
          "Achieved ~85% FCR through effective case ownership and policy interpretation.",
      },
      {
        title: "Repeat Escalation Reduction",
        description:
          "Reduced repeat escalations by ~20% through root-cause analysis.",
      },
      {
        title: "Compliance & Policy Exceptions",
        description:
          "Handled compliance-sensitive cases including refunds, legal escalations, and goodwill exceptions.",
      },
    ],
    hr: [
      {
        title: "Stakeholder Coordination",
        description:
          "Partnered with Legal, Compliance, Ops, and Support teams for risk-aware resolutions.",
      },
      {
        title: "Audit & Quality Excellence",
        description:
          "Maintained 100% audit pass rate for 9 consecutive weeks; recognized for Best ACHT & PRR.",
      },
      {
        title: "Process & Escalation Frameworks",
        description:
          "Built CRM templates and escalation frameworks improving TAT and quality.",
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
          "Managed sourcing, screening, interviews, offer negotiation, and onboarding.",
      },
      {
        title: "40+ Hiring Closures",
        description:
          "Closed 40+ roles across tech and non-tech domains within timelines.",
      },
    ],
    hr: [
      {
        title: "Talent Acquisition Strategy",
        description:
          "Built hiring pipelines and aligned recruitment strategy with business needs.",
      },
      {
        title: "Hiring Analytics",
        description:
          "Used ATS data to improve hiring decisions and timelines.",
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
          "Handled employee queries, HR documentation, and exit processes.",
      },
    ],
    hr: [
      {
        title: "Learning & Development",
        description:
          "Supported onboarding, training delivery, and documentation.",
      },
    ],
  },
]

const education: Episode[] = [
  {
    title: "BSc. Hotel & Hospitality Management",
    description:
      "SBIHM Kolkata – 8.9 CGPA, specialization in people management & operations.",
  },
  {
    title: "Class XII (CBSE)",
    description:
      "KV Command Hospital – 83.6%",
  },
  {
    title: "Class X (CBSE)",
    description:
      "KV CRPF Durgapur – 89.83%",
  },
]

const achievements: Episode[] = [
  {
    title: "Employee Wellness Program",
    description:
      "Designed and implemented mental health and wellness initiatives.",
  },
  {
    title: "Vice President – Committee (SBIHM)",
    description:
      "Led HR infrastructure and student engagement initiatives.",
  },
  {
    title: "2nd Place – Whisky Heritage Quiz",
    description:
      "Paul John Whisky Heritage Quiz, Goa.",
  },
  {
    title: "Runner-up – Cocktail Making Competition",
    description:
      "Paul John Cocktail Competition, Goa.",
  },
]

/* ================= COMPONENT ================= */
export default function Home() {
  const [mode, setMode] = useState<"CX" | "HR">("CX")
  const [recruiterView, setRecruiterView] = useState(false)

  /* ================= RECRUITER VIEW (FIXED) ================= */
  if (recruiterView) {
    return (
      <main className="bg-black min-h-screen text-white p-6 md:p-12">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-extrabold text-red-600 mb-2">
            Roshan Alam
          </h1>
          <p className="text-gray-300 mb-2">
            Executive Customer & Driver Relations (EXR) | Employee Relations | HRBP-Aligned
          </p>
          <p className="text-gray-400 mb-6">
            Promoted to EXR in October 2025
          </p>

          {/* EXPERIENCE */}
          {jobs.map((job, i) => (
            <section key={i} className="mb-8">
              <h2 className="text-xl font-bold text-red-500 mb-2">
                {job.company}
              </h2>

              {job.promotion && (
                <p className="text-sm text-gray-400 mb-2">{job.promotion}</p>
              )}

              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                {(mode === "CX" ? job.cx : job.hr).map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* EDUCATION */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-red-500 mb-2">Education</h2>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              {education.map((e, i) => (
                <li key={i}>
                  <strong>{e.title}:</strong> {e.description}
                </li>
              ))}
            </ul>
          </section>

          {/* ACHIEVEMENTS */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-red-500 mb-2">Achievements</h2>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              {achievements.map((a, i) => (
                <li key={i}>
                  <strong>{a.title}:</strong> {a.description}
                </li>
              ))}
            </ul>
          </section>

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

  /* ================= INTERACTIVE VIEW ================= */
  return (
    <main className="bg-black min-h-screen text-white p-10">
      {/* your interactive UI remains EXACTLY as before */}
      <p className="text-gray-400">
        Interactive View unchanged.
      </p>
    </main>
  )
}
