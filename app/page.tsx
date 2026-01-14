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
      {
        title: "Policy & Workflow Improvements",
        description:
          "Identified policy gaps and partnered with leadership to improve SOPs and operational workflows.",
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
      {
        title: "People Development",
        description:
          "Mentored associates through structured feedback, coaching, and performance improvement plans.",
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
      {
        title: "Candidate Screening",
        description:
          "Conducted structured interviews ensuring strong role and culture fit.",
      },
      {
        title: "ATS & Dashboards",
        description:
          "Maintained ATS, hiring metrics, and recruitment reporting dashboards.",
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
      {
        title: "Stakeholder Management",
        description:
          "Aligned hiring goals with business leaders and delivery teams.",
      },
      {
        title: "Hiring Analytics",
        description:
          "Used data-driven insights to optimize recruitment cycles and quality.",
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
    description:
      "KV Command Hospital – Scored 83.6%.",
  },
  {
    title: "Class X (CBSE)",
    description:
      "KV CRPF Durgapur – Scored 89.83%.",
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
                HR Operations | Talent Acquisition | L&D | Ex-Amazon
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
  
function Section({
  title,
  items,
  setSelected,
}: {
  title: string
  items: Episode[]
  setSelected: (item: Episode) => void
}) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(item)}
            className="min-w-[14rem] md:min-w-[16rem] h-[8rem] bg-zinc-800 rounded-xl flex items-center justify-center text-center font-bold text-sm cursor-pointer transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(229,9,20,0.9)]"
          >
            {item.title}
          </div>
        ))}
      </div>
    </section>
  )
}
