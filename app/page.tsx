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
          <h1 className="text-4xl font-extrabold text-red-600 mb-2">Roshan Alam</h1>
          <p className="text-gray-300 mb-6">
            Executive Customer & Driver Relations (EXR) | Employee Relations | HRBP-Aligned
          </p>

          <p className="text-gray-300 mb-6">
            Employee Relations–focused professional with experience managing escalations,
            compliance-sensitive cases, and cross-functional stakeholder coordination.
          </p>

          <ul className="list-disc ml-5 text-gray-300 space-y-2 mb-8">
            <li>Amazon India – Executive Customer & Driver Relations (EXR)</li>
            <li>TalentFlow – End-to-End Recruitment</li>
            <li>Taj Bengal – HR Operations & L&D</li>
          </ul>

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
      {showIntro && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <h1 className="text-red-600 text-5xl md:text-8xl font-extrabold tracking-widest animate-netflixIntro">
            ROSHAN&nbsp;ALAM
          </h1>
        </div>
      )}

      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 left-4 text-3xl z-50"
      >
        ☰
      </button>

      <div className="flex justify-end gap-3 mb-10">
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

      <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">
        <div>
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
                className="min-w-[14rem] md:min-w-[16rem] h-[8rem] bg-zinc-800 rounded-xl flex items-center justify-center text-center font-bold text-sm cursor-pointer transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(229,9,20,0.9)]"
              >
                {item.title}
              </div>
            ))}
          </div>
        </section>
      ))}

      <Section title="Education" items={education} setSelected={setSelected} />
      <Section title="Achievements" items={achievements} setSelected={setSelected} />

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

      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="bg-zinc-900 p-8 rounded-xl text-center">
            <Image
              src="/roshan.jpg"
              alt="Roshan Alam"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4 border-2 border-red-600"
            />
            <p>📞 7044467898</p>
            <p>📧 roshan.alam.official@gmail.com</p>
            <p className="text-sm mt-2">
              Karishma Apt 4A, Khardah, Jelia Para, 700117
            </p>
            <button
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
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
