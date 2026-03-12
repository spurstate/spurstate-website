import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Monitor, Apple, ArrowRight, Shield, CheckCircle, Download as DownloadIcon, Play } from 'lucide-react'
import AppTourModal from '../components/AppTourModal'

interface ReleaseAssets {
  mac: string | null
  macSize: string | null
  windows: string | null
  windowsSize: string | null
  version: string | null
}

function formatBytes(bytes: number): string {
  return `${Math.round(bytes / 1024 / 1024)} MB`
}

const steps = [
  { step: '1', title: 'Download for your system', description: 'Choose Windows or Mac below. The installer is small and runs directly on your computer.' },
  { step: '2', title: 'Get your keys ready', description: 'Workdesk needs two things to run: a Spurstate subscription key (provided when your beta access is approved) and an Anthropic API key. Have both ready before opening the app.' },
  { step: '3', title: 'Run the setup wizard', description: 'A short 4-step setup captures your school, class, and term priorities. Takes about 10 minutes.' },
  { step: '4', title: 'Generate your first document', description: 'Fill a form, click generate. Your first lesson plan or report comment is ready in seconds.' },
]

const included = [
  'Lesson plan generator (New Zealand Curriculum-aligned)',
  'Unit plan generator',
  'Report comment generator',
  'Bring your own curriculum documents',
  'Generated resources library',
  'Full chat interface with Claude AI',
  'Export to Word (.docx) — opens in Microsoft Word or Google Docs',
  'Light & dark mode',
]

export default function Download() {
  const [assets, setAssets] = useState<ReleaseAssets>({ mac: null, macSize: null, windows: null, windowsSize: null, version: null })
  const [tourOpen, setTourOpen] = useState(false)
  const [tourStep, setTourStep] = useState(0)

  const openTour = () => { setTourStep(0); setTourOpen(true) }
  const closeTour = () => setTourOpen(false)

  useEffect(() => {
    fetch('/.netlify/functions/releases')
      .then((r) => r.json())
      .then((data) => {
        const macAsset = data.assets?.find((a: { name: string }) => a.name.endsWith('.dmg'))
        const winAsset = data.assets?.find((a: { name: string }) => a.name.endsWith('.exe'))
        setAssets({
          mac: macAsset?.browser_download_url ?? null,
          macSize: macAsset?.size ? formatBytes(macAsset.size) : null,
          windows: winAsset?.browser_download_url ?? null,
          windowsSize: winAsset?.size ? formatBytes(winAsset.size) : null,
          version: data.tag_name ?? null,
        })
      })
      .catch(() => { })
  }, [])

  return (
    <div className="pt-16">
      <AppTourModal
        isOpen={tourOpen}
        step={tourStep}
        onClose={closeTour}
        onNext={() => setTourStep(s => Math.min(s + 1, 7))}
        onPrev={() => setTourStep(s => Math.max(s - 1, 0))}
        onSetStep={setTourStep}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 border border-green-100">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Free during beta — Spurstate covers all API costs
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 leading-tight tracking-tight mb-6">
            Download Workdesk
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A desktop app for teachers. Lesson plans, unit plans, and report comments — generated in seconds, built around the New Zealand Curriculum.
          </p>
        </div>
      </section>

      {/* Download cards */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Windows */}
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-blue-200 hover:shadow-md transition-all flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-5">
                <Monitor size={24} className="text-gray-700" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Workdesk for Windows</h2>
              <p className="text-sm text-gray-500 mb-6">Windows 10 or later (64-bit)</p>
              <div className="mt-auto">
                <a
                  href={assets.windows ?? '#'}
                  onClick={!assets.windows ? (e) => e.preventDefault() : undefined}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  <DownloadIcon size={16} />
                  Download for Windows
                </a>
                <p className="text-xs text-gray-400 text-center mt-3">64-bit installer{assets.windowsSize ? ` · ${assets.windowsSize}` : ''}{assets.version ? ` · ${assets.version}` : ''}</p>
              </div>
            </div>

            {/* macOS */}
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-blue-200 hover:shadow-md transition-all flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-5">
                <Apple size={24} className="text-gray-700" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Workdesk for Mac</h2>
              <p className="text-sm text-gray-500 mb-6">macOS 12 Monterey or later</p>
              <div className="mt-auto">
                <a
                  href={assets.mac ?? '#'}
                  onClick={!assets.mac ? (e) => e.preventDefault() : undefined}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  <DownloadIcon size={16} />
                  Download for Mac
                </a>
                <p className="text-xs text-gray-400 text-center mt-3">Apple Silicon & Intel{assets.macSize ? ` · ${assets.macSize}` : ''}{assets.version ? ` · ${assets.version}` : ''}</p>
              </div>
            </div>
          </div>

          {/* Beta notice */}
          <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6 flex gap-4">
            <Shield size={20} className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Beta release — Auckland primary teachers only</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Workdesk is currently in beta and we're looking for a small group of Auckland primary school teachers to try it. Access is free and Spurstate covers all AI processing costs during the trial period.{' '}
                <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  <br />Apply for beta access →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Getting started</p>
            <h2 className="text-4xl font-bold text-gray-950">Up and running in minutes.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="bg-white rounded-2xl border border-gray-200 p-7">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center mb-5">
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">What's included</p>
              <h2 className="text-4xl font-bold text-gray-950 leading-tight mb-4">
                Everything in one app.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Workdesk includes every tool a teacher needs for documentation — all in one desktop app, all offline, all private.
              </p>
            </div>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="bg-blue-950 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Shield size={28} className="text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Private by design.</h2>
          <p className="text-blue-300 leading-relaxed">
            Workdesk runs entirely on your computer. No school data is stored in the cloud. The only external connection is to Claude AI for generating text — your school name, student context, and any uploaded materials never leave your device.
          </p>
        </div>
      </section>

      {/* More questions */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Have questions before downloading?</p>
          <p className="text-base text-gray-500 mb-8">See the full feature list or get in touch — we're happy to answer anything.</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                Get in touch <ArrowRight size={14} />
              </Link>
              <button
                onClick={openTour}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition-colors text-sm"
              >
                <Play size={14} />
                See how it works
              </button>
            </div>
            <Link
              to="/workdesk"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm self-start"
            >
              See all features <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
