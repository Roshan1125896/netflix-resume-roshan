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
          "Managed sourcing, screening, interviewing, offer negotiation, and onboarding across roles.",
      },
      {
        title: "40+ Hiring Closures",
        description:
          "Closed 40+ positions across departments within timelines.",
      },
    ],
    hr: [
      {
        title: "Talent Acquisition Strategy",
        description:
          "Built sourcing pipelines and partnered with hiring managers.",
      },
      {
        title: "Employer Branding",
        description:
          "Improved candidate experience through structured engagement.",
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

const education: Episode[] = [
  {
    title: "BSc. Hotel & Hospitality Management",
    description:
      "SBIHM Kolkata – Graduated with 8.9 CGPA, focus on people management and operations.",
  },
  {
    title: "Class XII (CBSE)",
    description: "KV Command Hospital – 83.6%.",
  },
  {
    title: "Class X (CBSE)",
    description: "KV CRPF Durgapur – 89.83%.",
  },
]

const achievements: Episode[] = [
  {
    title: "Employee Wellness Program",
    description:
      "Designed and implemented a wellness initiative integrating mental health support and flexible work practices.",
  },
  {
    title: "Vice President – Committee (SBIHM)",
    description:
      "Improved HR infrastructure, feedback systems, and student engagement initiatives.",
  },
  {
    title: "2nd Place – Whisky Heritage Quiz",
    description:
      "Secured second place at Paul John Whisky Heritage Quiz, Goa.",
  },
  {
    title: "Runner-up – Cocktail Making Competition",
    description:
      "Runner-up at Paul John Cocktail Making Competition, Goa.",
  },
]

/* ================= COMPONENT ================= */
export default function Home() {
  const [mode, setMode] = useState<"CX" | "HR">("CX")
  const [recruiterView, setRecruiterView] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState<Episode | null>(null)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    if (!recruiterView) {
      const timer = setTimeout(() => setShowIntro(false), 2500)
      return () => clearTimeout(timer)
    } else {
      setShowIntro(false)
    }
  }, [recruiterView])

  /* ================= RECRUITER VIEW (FIXED) ================= */
  if (recruiterView) {
    return (
      <main className="bg-black min-h-screen text-white p-6 md:p-12">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-extrabold text-red-600 mb-2">
            Roshan Alam
          </h1>

          <p className="text-gray-300 mb-4">
            Executive Customer & Driver Relations (EXR) | Employee Relations | HRBP-Aligned
          </p>

          <p className="text-gray-400 mb-8">
            Promoted to EXR in October 2025
          </p>

          {/* EXPERIENCE */}
          {jobs.map((job, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-xl font-bold text-red-500 mb-2">
                {job.company}
              </h2>

              {job.promotion && (
                <p className="text-sm text-gray-400 mb-2">{job.promotion}</p>
              )}

              <ul className="list-disc ml-5 text-gray-300 space-y-2">
                {(mode === "CX" ? job.cx : job.hr).map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* EDUCATION */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-red-500 mb-2">Education</h2>
            <ul className="list-disc ml-5 text-gray-300 space-y-2">
              {education.map((e, i) => (
                <li key={i}>
                  <strong>{e.title}:</strong> {e.description}
                </li>
              ))}
            </ul>
          </section>

          {/* ACHIEVEMENTS */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-red-500 mb-2">Achievements</h2>
            <ul className="list-disc ml-5 text-gray-300 space-y-2">
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

  /* ================= INTERACTIVE VIEW (UNCHANGED) ================= */
  return (
    <main className="bg-black min-h-screen text-white p-10">
      <p className="text-gray-400">
        Interactive View unchanged.
      </p>
    </main>
  )
}
