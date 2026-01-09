"use client"

import { useState } from "react"
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
        title: "Policy & Workflow Improvements",
        description:
          "Identified policy gaps and collaborated with leadership to improve operational workflows.",
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
        title: "Process Optimization",
        description:
          "Improved SOPs, workflows, and policy clarity.",
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
      "SBIHM Kolkata – 8.9 CGPA, focus on people management & operations.",
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
      "Designed and implemented mental wellness initiatives.",
  },
  {
    title: "Vice President – Committee",
    description:
      "Led HR & student engagement initiatives at SBIHM.",
  },
  {
    title: "2nd Place – Whisky Heritage Quiz",
    description:
      "Paul John Quiz, Goa.",
  },
  {
    title: "Runner-up – Cocktail Making",
    description:
      "Paul John Cocktail Competition.",
  },
]

export default function Home() {
  const [mode, setMode] = useState<"CX" | "HR">("CX")
  const [selected, setSelected] = useState<{
    title: string
    description: string
    company: string
    logo: string
  } | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="bg-black min-h-screen text-white p-10 relative overflow-x-hidden">

      {/* HAMBURGER */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-6 left-6 text-3xl z-50"
      >
        ☰
      </button>

      {/* HEADER */}
      <div className="flex justify-end mb-16">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-red-600">
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
            width={160}
            height={160}
            className="rounded-full border-2 border-red-600 object-cover"
          />
        </div>
      </div>

      {/* MODE TOGGLE */}
      <div className="flex justify-end mb-12">
        <button
          onClick={() => setMode(mode === "CX" ? "HR" : "CX")}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Switch to {mode === "CX" ? "HR" : "CX"} Mode
        </button>
      </div>

      {/* JOBS */}
      {jobs.map((job, idx) => (
        <section key={idx} className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <Image src={job.logo} alt={job.company} width={40} height={40} />
            <h2 className="text-3xl font-bold text-red-600">
              {job.company}
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-6">
            {(mode === "CX" ? job.cx : job.hr).map((ep, i) => (
              <div
                key={i}
                onClick={() =>
                  setSelected({
                    title: ep.title,
                    description: ep.description,
                    company: job.company,
                    logo: job.logo,
                  })
                }
                className="
                  min-w-[16rem] h-[8rem]
                  bg-zinc-800 rounded-xl
                  flex items-center justify-center text-center
                  font-bold text-sm cursor-pointer
                  transition-all duration-300
                  hover:scale-110 hover:-translate-y-2
                  hover:shadow-[0_0_30px_rgba(229,9,20,0.9)]
                "
              >
                {ep.title}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* EDUCATION */}
      <Section title="Education" items={education} setSelected={setSelected} />

      {/* ACHIEVEMENTS */}
      <Section title="Achievements" items={achievements} setSelected={setSelected} />

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-20 blur-2xl"
            style={{ backgroundImage: `url(${selected.logo})` }}
          />
          <div className="relative bg-zinc-900 p-8 rounded-xl max-w-3xl w-[85%]">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold text-red-600">
                {selected.title}
              </h2>
              <button onClick={() => setSelected(null)}>✕</button>
            </div>
            <p className="text-gray-300">{selected.description}</p>
          </div>
        </div>
      )}

      {/* HAMBURGER OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center">
          <div className="bg-zinc-900 p-8 rounded-xl text-center">
            <Image
              src="/roshan.jpg"
              alt="Roshan Alam"
              width={160}
              height={160}
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
  setSelected: any
}) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-5 text-red-600">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-6">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() =>
              setSelected({
                title: item.title,
                description: item.description,
                company: title,
                logo: "",
              })
            }
            className="
              min-w-[16rem] h-[8rem]
              bg-zinc-800 rounded-xl
              flex items-center justify-center text-center
              font-bold text-sm cursor-pointer
              transition-all duration-300
              hover:scale-110 hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(229,9,20,0.9)]
            "
          >
            {item.title}
          </div>
        ))}
      </div>
    </section>
  )
}
