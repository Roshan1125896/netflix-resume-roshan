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
        title: "Customer Support (Phone, Chat & Email)",
        description:
          "Handled high-volume customer interactions across phone, chat, and email while maintaining strong CSAT scores and Amazon service standards.",
      },
      {
        title: "SME – New Hire Training",
        description:
          "Trained and mentored new associates on tools, policies, workflows, and quality benchmarks.",
      },
      {
        title: "DCE – Communication Training",
        description:
          "Delivered communication skill training sessions focused on call control, empathy, and clarity.",
      },
      {
        title: "Quality Audits",
        description:
          "Audited customer interactions and provided actionable feedback to improve call quality and compliance.",
      },
      {
        title: "Executive Escalation Handling",
        description:
          "Handled 15–20 high-priority customer and driver escalations daily, resolving ~95% within same business day against a 24-hour SLA.",
      },
    ],
    hr: [
      {
        title: "People Development",
        description:
          "Coached associates through structured feedback, mentoring, and development plans.",
      },
      {
        title: "Training & Onboarding",
        description:
          "Supported onboarding and continuous training initiatives for new hires.",
      },
      {
        title: "Performance Management",
        description:
          "Tracked KPIs such as CSAT, SLA, and quality metrics to improve outcomes.",
      },
      {
        title: "Audit & Quality Excellence",
        description:
          "Maintained 100% audit pass rate for 9 consecutive weeks post-promotion; recognized for Best ACHT & PRR.",
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
          "Managed sourcing, screening, interviewing, offer negotiation, and onboarding.",
      },
      {
        title: "40+ Hiring Closures",
        description:
          "Closed more than 40 roles across tech and non-tech domains.",
      },
      {
        title: "Candidate Screening",
        description:
          "Conducted structured interviews ensuring role and culture fit.",
      },
      {
        title: "ATS & Dashboards",
        description:
          "Maintained ATS and recruitment reporting dashboards.",
      },
    ],
    hr: [
      {
        title: "Talent Acquisition Strategy",
        description:
          "Built efficient sourcing strategies and pipelines.",
      },
      {
        title: "Employer Branding",
        description:
          "Strengthened employer brand through candidate engagement.",
      },
      {
        title: "Stakeholder Management",
        description:
          "Worked closely with hiring managers to align expectations.",
      },
      {
        title: "Hiring Analytics",
        description:
          "Used data-driven insights to optimize recruitment.",
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
          "Handled employee queries, HR documentation, and compliance.",
      },
      {
        title: "Exit Interviews",
        description:
          "Conducted exit interviews and documented insights.",
      },
      {
        title: "Learning & Development",
        description:
          "Designed and supported onboarding programs.",
      },
      {
        title: "Training Records",
        description:
          "Maintained trainee performance records and audits.",
      },
    ],
    hr: [
      {
        title: "HR Compliance",
        description:
          "Managed policies, records, and audits.",
      },
      {
        title: "Employee Engagement",
        description:
          "Supported engagement initiatives.",
      },
      {
        title: "Training Documentation",
        description:
          "Prepared onboarding and training manuals.",
      },
    ],
  },
]

const education: Episode[] = [
  {
    title: "BSc. Hotel & Hospitality Management",
    description:
      "SBIHM Kolkata – Graduated with 8.9 CGPA, with focus on people management and operations.",
  },
  {
    title: "Class XII (CBSE)",
    description: "KV Command Hospital – Scored 83.6%.",
  },
  {
    title: "Class X (CBSE)",
    description: "KV CRPF Durgapur – Scored 89.83%.",
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

  if (recruiterView) {
    return (
      <main className="bg-black min-h-screen text-white p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-red-600 mb-2">
            Roshan Alam
          </h1>
          <p className="text-gray-300 mb-4">
            Executive Customer & Driver Relations (EXR) | Employee Relations | HRBP-Aligned
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-red-600 mb-2">Professional Summary</h2>
            <p className="text-gray-300">
              Employee Relations–focused professional with experience managing escalations,
              compliance-sensitive cases, and cross-functional stakeholder coordination.
              Proven ability to resolve high-risk cases within SLA, reduce repeat escalations,
              and partner with Legal, Compliance, Operations, and CX teams.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-red-600 mb-2">Experience</h2>
            <ul className="list-disc ml-5 text-gray-300 space-y-2">
              <li><strong>Amazon India – Executive Customer & Driver Relations (EXR)</strong><br/>Handled 15–20 executive escalations daily, 85% FCR, reduced repeat escalations by 20%, 100% audit pass for 9 weeks.</li>
              <li><strong>TalentFlow – Recruitment Specialist</strong><br/>Closed 40+ roles, managed end-to-end hiring and ATS reporting.</li>
              <li><strong>Taj Bengal – HR Operations & L&D</strong><br/>Supported onboarding, training, HR documentation, and compliance.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-red-600 mb-2">Education</h2>
            <ul className="list-disc ml-5 text-gray-300">
              <li>BSc. Hotel & Hospitality Management – SBIHM Kolkata (8.9 CGPA)</li>
              <li>Class XII – CBSE (83.6%)</li>
              <li>Class X – CBSE (89.83%)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-red-600 mb-2">Achievements</h2>
            <ul className="list-disc ml-5 text-gray-300">
              <li>Designed Employee Wellness Program</li>
              <li>Vice President – SBIHM Committee</li>
              <li>2nd Place – Whisky Heritage Quiz</li>
              <li>Runner-up – Cocktail Competition</li>
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

  return (
    <main className="bg-black min-h-screen text-white p-4 md:p-10 overflow-x-hidden">

      <style jsx global>{`
        @keyframes netflixIntro {
          0% { opacity: 0; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
        .netflix-intro {
          animation: netflixIntro 2.5s ease-in-out forwards;
        }
      `}</style>

      {showIntro && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <h1 className="netflix-intro text-red-600 text-5xl md:text-8xl font-extrabold tracking-widest">
            ROSHAN&nbsp;ALAM
          </h1>
        </div>
      )}

      {/* (Rest of interactive view remains unchanged – your CX/HR cards, hamburger, modals, education, achievements, etc.) */}
    </main>
  )
}
