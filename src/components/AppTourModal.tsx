import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react'

const tourSteps = [
  {
    title: 'Starting Workdesk',
    description: 'The first thing you see when you open Workdesk. It installs and runs entirely on your computer — you\'ll need a Spurstate subscription key and an Anthropic API key to get started.',
    image: '/assets/application_tour/loading_app.png',
  },
  {
    title: 'Set up your school context',
    description: 'A one-time setup captures info on your school, your teaching style, your class composition, and your term priorities. This context is used in every document you generate.',
    image: '/assets/application_tour/school_info.png',
  },
  {
    title: 'Your home screen',
    description: 'Once loaded, you\'re greeted with your workspace. Everything you need is in the sidebar — generators, your saved files, and settings.',
    image: '/assets/application_tour/on_app_startup.png',
  },
  {
    title: 'Generate a lesson plan',
    description: 'Fill a short form — topic, year level, learning area, duration. Workdesk handles the rest, building a complete NZ Curriculum-aligned plan.',
    image: '/assets/application_tour/generate_lesson_plan.png',
  },
  {
    title: 'Your completed lesson plan',
    description: 'In seconds, you have a full lesson plan with learning intentions, success criteria, timing, differentiation strategies, and cultural responsiveness notes.',
    image: '/assets/application_tour/generated_lesson_plan_report.png',
  },
  {
    title: 'Getting around the app',
    description: 'The "How to use" menu gives you quick tips on how to use all generators and your saved resources. Everything is one click away.',
    image: '/assets/application_tour/how_to_use_workdesk_menu.png',
  },
  {
    title: 'Manage your context',
    description: 'Your school and class information is stored locally and reused across every session. You can update it any time as your context changes.',
    image: '/assets/application_tour/manage_files_context.png',
  },
  {
    title: 'Upload your own curriculum',
    description: 'Drop in your school\'s teaching sequences or scope-and-sequences. Workdesk reads them and references them in every plan it generates.',
    image: '/assets/application_tour/manage_files_curriculum.png',
  },
]

interface AppTourModalProps {
  isOpen: boolean
  step: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onSetStep: (step: number) => void
}

export default function AppTourModal({ isOpen, step, onClose, onNext, onPrev, onSetStep }: AppTourModalProps) {
  const current = tourSteps[step]
  const isLast = step === tourSteps.length - 1

  // Preload all images when modal first opens
  useEffect(() => {
    if (!isOpen) return
    tourSteps.forEach(s => { new Image().src = s.image })
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && !isLast) onNext()
      if (e.key === 'ArrowLeft' && step > 0) onPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, step, isLast, onClose, onNext, onPrev])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[98vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <p className="text-sm font-semibold text-gray-500">
            Step <span className="text-gray-900">{step + 1}</span> of {tourSteps.length}
          </p>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Close tour"
          >
            <X size={18} />
          </button>
        </div>

        {/* Screenshot */}
        <div className="bg-gray-50 flex items-center justify-center flex-1 min-h-0 overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom panel */}
        <div className="px-6 py-5 shrink-0">
          <h3 className="text-xl font-bold text-gray-950 mb-1">{current.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">{current.description}</p>

          <div className="flex items-center justify-between gap-4">
            {/* Prev */}
            <button
              onClick={onPrev}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            {/* Dots — hidden on mobile */}
            <div className="hidden sm:flex items-center gap-1.5">
              {tourSteps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => onSetStep(i)}
                  className={`rounded-full transition-all ${i === step ? 'w-5 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'}`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>

            {/* Next or CTA */}
            {isLast ? (
              <Link
                to="/download"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                <Download size={16} />
                Download Workdesk
              </Link>
            ) : (
              <button
                onClick={onNext}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Next
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
