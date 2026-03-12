import { Link } from 'react-router-dom'
import {
  FileText, BookOpen, MessageSquare, Upload, Settings, FolderOpen, Download, Shield, Moon, ArrowRight, Check, X as XIcon, ChevronDown, ChevronUp, Play, FileDown
} from 'lucide-react'
import { useState } from 'react'
import AppTourModal from '../components/AppTourModal'

const stats = [
  { value: '47.5', label: 'hrs/week', sub: 'Average NZ teacher workload — 2nd in OECD' },
  { value: '38%', label: 'of time', sub: 'Actually spent in the classroom' },
  { value: '7hrs', label: 'per week', sub: 'Lost to lesson planning alone' },
  { value: '30hrs', label: 'per cycle', sub: 'Report comment writing — up to 300+ comments' },
]

const features = [
  {
    icon: FileText,
    title: 'Lesson Plan Generation',
    description: 'Fill in a short form — topic, year level, learning area, duration. Get a complete, NZ Curriculum-aligned lesson plan in seconds. Includes learning intentions, success criteria, timing, differentiation strategies, and cultural responsiveness notes.',
  },
  {
    icon: BookOpen,
    title: 'Unit Plan Generation',
    description: 'Generate full multi-week units from a single form. Includes unit overview, curriculum alignment, essential questions, full lesson sequence, assessment plan, and differentiation strategy.',
  },
  {
    icon: MessageSquare,
    title: 'Report Comment Generation',
    description: 'Generate student report comments ready for personalisation. Supports single students or groups at multiple achievement levels. Strengths-based, forward-looking, written for parents — not marking rubrics.',
  },
  {
    icon: Upload,
    title: 'Bring Your Own Curriculum',
    description: 'Upload your school\'s teaching sequences, scope-and-sequences, or subject plans. Workdesk reads them and cites which materials were used. Every plan includes a "Curriculum Materials Consulted" section.',
  },
  {
    icon: Settings,
    title: 'Personalised to Your Context',
    description: 'One-time setup: school, year levels, class composition, term priorities. Every document is tailored, not generic. Context is stored locally and reused across every session.',
  },
  {
    icon: FolderOpen,
    title: 'Generated Resources Library',
    description: 'All your documents, saved and organised in the app. View, preview, export, or delete from the sidebar. Grouped by type: lesson plans, unit plans, report comments.',
  },
  {
    icon: Download,
    title: 'Export to Your Computer',
    description: 'Save any document in one click as a Word file (.docx). Opens directly in Microsoft Word, Google Docs, or any compatible editor — ready to use immediately.',
  },
  {
    icon: MessageSquare,
    title: 'Full Chat Interface',
    description: 'Free-form conversation with Claude AI for any task. Draft parent emails, create rubrics, brainstorm ideas, write guides. Conversations are saved and can be resumed.',
  },
  {
    icon: Shield,
    title: 'Privacy-First by Design',
    description: 'Runs on your own computer. No school data stored in the cloud. The only external connection is to Claude AI for processing — your school and student information never leaves the device.',
  },
  {
    icon: Moon,
    title: 'Light & Dark Mode',
    description: 'Full theme support. Use it however you prefer, in whatever environment you\'re in.',
  },
]

const comparison = [
  { feature: 'Learning curve', generic: 'Requires expert prompting', workdesk: 'Fill in a form, click generate' },
  { feature: 'Curriculum focus', generic: 'Generic, not NZ-specific', workdesk: 'Built around NZ Curriculum — objectives, key competencies, conventions' },
  { feature: 'File management', generic: 'Copy-paste and format manually', workdesk: 'Documents saved and organised automatically' },
  { feature: 'Personalisation', generic: 'No memory, generic every time', workdesk: 'Remembers your school, class, and term priorities' },
  { feature: 'Custom content', generic: 'Can\'t use your own materials', workdesk: 'Import and reference your teaching sequences' },
]

const faqs = [
  {
    q: 'Will it sound like a robot?',
    a: 'It\'s personalised to your school, class, and context — not generic. You\'ll still edit it, but it gets you 80% of the way there instantly. Most teachers find the output needs only minor tweaks.',
  },
  {
    q: 'Is it safe to use with student information?',
    a: 'Nothing leaves your device. Workdesk is privacy-first by design. The only external connection is to Claude AI for generating text — your school name, student context, and any uploaded materials stay on your computer.',
  },
  {
    q: 'I\'m not tech-savvy. Can I still use it?',
    a: 'If you can download an app and fill out a form, you can use Workdesk. That\'s all it takes. There\'s a short setup wizard (about 10 minutes) and then you\'re generating documents.',
  },
  {
    q: 'I\'ve tried ChatGPT and it wasn\'t useful.',
    a: 'Generic AI gives generic results. Workdesk is built around the NZ Curriculum — it knows your year level, your learning areas, and your school context. The results are significantly more relevant and usable.',
  },
  {
    q: 'I don\'t have time to learn something new.',
    a: '10 minutes to set up. Then it saves you hours every single reporting cycle — and every week on lesson planning. The payoff is immediate.',
  },
]

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900">{q}</span>
        {open ? <ChevronUp size={18} className="text-gray-400 shrink-0" /> : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
      </button>
      {open && (
        <p className="text-gray-600 text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  )
}

const curriculumSubjects = [
  {
    subject: 'English',
    files: [
      { year: 'Full Yr 0–10', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English\u2013Yr0-10-Oct-2025.md' },
      { year: 'Yr 0–1', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English-Yr0-1-Teaching-Sequence-.md' },
      { year: 'Yr 2', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English-Yr2-Teaching-Sequence-.md' },
      { year: 'Yr 3', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English-Yr3-Teaching-Sequence-.md' },
      { year: 'Yr 4', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English-Yr4-Teaching-Sequence-.md' },
      { year: 'Yr 5', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English-Yr5-Teaching-Sequence-.md' },
      { year: 'Yr 6', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English-Yr6-Teaching-Sequence-.md' },
      { year: 'Yr 7', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English\u2013Yr7-Teaching-Sequence-.md' },
      { year: 'Yr 8', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English-Yr8-Teaching-Sequence-.md' },
      { year: 'Yr 9', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English-Yr9-Teaching-Sequence-.md' },
      { year: 'Yr 10', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/english/English-Yr10-Teaching-Sequence-.md' },
    ],
  },
  {
    subject: 'Mathematics & Statistics',
    files: [
      { year: 'Full Yr 0–10', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics\u2013and\u2013Statistics-Yr0-10.md' },
      { year: 'Yr 0–1', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics-and-Statistics-Yr0-1-Teaching-Sequence-.md' },
      { year: 'Yr 2', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics-and-Statistics-Yr-2-Teaching-Sequence-.md' },
      { year: 'Yr 3', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics-and-Statistics-Yr-3-Teaching-Sequence-.md' },
      { year: 'Yr 4', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics-and-Statistics-Yr-4-Teaching-Sequence-.md' },
      { year: 'Yr 5', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics-and-Statistics\u2013Yr-5-Teaching-Sequence-.md' },
      { year: 'Yr 6', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics-and-Statistics-Yr-6-Teaching-Sequence-.md' },
      { year: 'Yr 7', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics-and-Statistics\u2013Yr-7-Teaching-Sequence-.md' },
      { year: 'Yr 8', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics-and-Statistics-Yr-8-Teaching-Sequence-.md' },
      { year: 'Yr 9', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics-and-Statistics-Yr-9-Teaching-Sequence-.md' },
      { year: 'Yr 10', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/maths/Mathematics-and-Statistics-Yr-10-Teaching-Sequence-.md' },
    ],
  },
  {
    subject: 'Science',
    files: [
      { year: 'Full Yr 0–10', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Draft-Yr0-10-Oct--2025.md' },
      { year: 'Yr 1', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Yr-1-teaching-sequence.md' },
      { year: 'Yr 2', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Yr-2-teaching-sequence.md' },
      { year: 'Yr 3', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Yr-3-teaching-sequence.md' },
      { year: 'Yr 4', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Yr-4-teaching-sequence.md' },
      { year: 'Yr 5', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Yr-5-teaching-sequence.md' },
      { year: 'Yr 6', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Yr-6-teaching-sequence.md' },
      { year: 'Yr 7', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Yr-7-teaching-sequence.md' },
      { year: 'Yr 8', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Yr-8-teaching-sequence.md' },
      { year: 'Yr 9', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Yr-9-teaching-sequence.md' },
      { year: 'Yr 10', url: 'https://raw.githubusercontent.com/spurstate/workdesk-releases/main/nz_curriculum/science/Science-Yr-10-teaching-sequence.md' },
    ],
  },
]

async function downloadCurriculumFile(url: string) {
  const filename = decodeURIComponent(url.split('/').pop() ?? 'curriculum.md')
  const response = await fetch(url)
  const blob = await response.blob()
  const objectUrl = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = objectUrl
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(objectUrl)
}

export default function Workdesk() {
  const [tourOpen, setTourOpen] = useState(false)
  const [tourStep, setTourStep] = useState(0)

  const openTour = () => { setTourStep(0); setTourOpen(true) }
  const closeTour = () => setTourOpen(false)
  const nextStep = () => setTourStep(s => Math.min(s + 1, 7))
  const prevStep = () => setTourStep(s => Math.max(s - 1, 0))

  return (
    <div className="pt-16">
      <AppTourModal
        isOpen={tourOpen}
        step={tourStep}
        onClose={closeTour}
        onNext={nextStep}
        onPrev={prevStep}
        onSetStep={setTourStep}
      />
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-36 md:pt-32 md:pb-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 border border-green-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Free Beta — Windows & Mac
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 leading-tight tracking-tight mb-6">
              Report writing used to take 20 hours.<br className="hidden sm:block" />
              <span className="text-blue-600">Now it takes two.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              Workdesk is a desktop app for teachers. Lesson plans, unit plans, and report comments — generated in seconds, built around the New Zealand Curriculum, personalised to your school, environment and class.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openTour}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Play size={15} />
                  See how it works
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  Apply for beta access
                </Link>
              </div>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors self-start"
              >
                See all features
                <ArrowRight size={14} />
              </a>
            </div>
            <p className="mt-5 text-sm text-gray-400">
              Seeking a small group of Auckland primary school teachers as beta testers. Spurstate covers all API costs during the trial.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 text-white py-16 relative overflow-hidden">
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-no-repeat bg-right bg-contain pointer-events-none opacity-10"
          style={{ backgroundImage: 'url(/assets/cover_photo_no_text.png)' }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-10">The numbers don't lie</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="border-l-2 border-blue-400 pl-5">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-blue-300 text-sm font-semibold mb-1">{s.label}</div>
                <div className="text-blue-500 text-sm leading-relaxed">{s.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-white-800 text-sm mt-8">Source: OECD Teaching and Learning International Survey, NZ Ministry of Education data.</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-4xl font-bold text-gray-950 leading-tight mb-4">
              Everything a teacher in New Zealand needs.
            </h2>
            <p className="text-lg text-gray-600">
              Download it. Fill in a form. Get your lesson plan. That's it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum downloads */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Curriculum Resources</p>
            <h2 className="text-4xl font-bold text-gray-950 leading-tight mb-4">
              Download curriculum files for Workdesk.
            </h2>
            <p className="text-lg text-gray-600">
              These are text files from Tāhūrangi — the New Zealand Curriculum refresh. Upload them into Workdesk so it plans around exactly what you're teaching. Choose the files for your year level and learning area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curriculumSubjects.map((subject) => (
              <div key={subject.subject} className="rounded-2xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-sm transition-all bg-white">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <BookOpen size={18} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{subject.subject}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {subject.files.map((file) => (
                    <button
                      key={file.year}
                      onClick={() => downloadCurriculumFile(file.url)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 font-medium hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      <FileDown size={13} />
                      {file.year}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Why Workdesk</p>
            <h2 className="text-4xl font-bold text-gray-950 leading-tight mb-4">
              Generic AI isn't built for teaching.
            </h2>
            <p className="text-lg text-gray-600">
              ChatGPT requires expert prompting, produces generic results, and has no knowledge of the NZ Curriculum. Workdesk does.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500 w-1/3" />
                  <th className="py-4 px-6 text-sm font-semibold text-gray-500 text-center">Generic AI (ChatGPT)</th>
                  <th className="py-4 px-6 text-sm font-bold text-blue-600 text-center bg-blue-50 rounded-t-xl">Workdesk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparison.map((row, i) => (
                  <tr key={i} className="bg-white">
                    <td className="py-4 px-6 text-sm font-medium text-gray-700">{row.feature}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-2">
                        <XIcon size={16} className="text-red-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-500">{row.generic}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 bg-blue-50/50">
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{row.workdesk}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Privacy callout */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
            <Shield size={24} className="text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-950 mb-4">Private by design.</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Nothing leaves your device. Workdesk runs on your own computer — no school data stored in the cloud. The only external connection is to Claude AI for text generation. Your school and student information stays on your machine, always.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-950">Common questions.</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 px-8 py-2">
            {faqs.map((faq, i) => (
              <FAQ key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            It knows your school. Your year level.<br className="hidden sm:block" />Your term priorities.
          </h2>
          <p className="text-blue-100 text-xl mb-4">Not a generic answer — yours.</p>
          <p className="text-blue-200 text-sm mb-10">
            We're looking for a small group of Auckland primary school teachers for our free beta. Spurstate covers all API costs during the trial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-7 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors"
            >
              Apply for beta access
            </Link>
            <Link
              to="/about"
              className="px-7 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-colors"
            >
              Learn about Spurstate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
