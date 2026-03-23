import { Link } from 'react-router-dom'
import { Target, Zap, Users, Globe } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Outcomes over features',
    description: 'We don\'t sell AI. We sell results. Every service we deliver is measured by what it actually does for the people using it.',
  },
  {
    icon: Zap,
    title: 'Speed without complexity',
    description: 'Getting AI working shouldn\'t take months. We configure fast, implement fast, and make sure you see value fast — from day one.',
  },
  {
    icon: Users,
    title: 'Built for real people',
    description: 'Our clients are time-poor. They\'re running businesses, managing everything at once. We meet them where they are — not where it\'s convenient for us.',
  },
  {
    icon: Globe,
    title: 'New Zealand-first',
    description: 'We\'re based in Auckland and we work for New Zealand. That means understanding local context, local customers, and local business realities.',
  },
]

const timeline = [
  {
    title: 'The observation',
    description: 'New Zealand businesses were being left behind. Not for lack of interest — for lack of practical support. The tools existed. The guidance didn\'t.',
  },
  {
    title: 'The decision',
    description: 'Spurstate was founded with one focus: help NZ businesses and professionals get AI actually working for them. Not in theory. In practice, inside the tools they already use.',
  },
  {
    title: 'The approach',
    description: 'No new software to learn. No technical knowledge required. We come in, configure AI around the way a business already operates, and make sure it\'s running before we leave.',
  },
  {
    title: 'What\'s next',
    description: 'Expanding across New Zealand — same philosophy, same approach. Useful by default, not useful eventually.',
  },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-48 md:pt-32 md:pb-60">
          <div className="max-w-3xl">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Our mission</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 leading-tight tracking-tight mb-6">
              Spurstate helps New Zealand businesses<br className="hidden sm:block" /> move faster with AI —<br />
              <span className="text-blue-600">starting from where they are.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              We work with local business owners, sole traders, and professionals who are time-poor, tech-sceptical, and ready to get something actually working.
            </p>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="bg-blue-950 py-20 relative overflow-hidden">
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-no-repeat bg-right bg-contain pointer-events-none opacity-10"
          style={{ backgroundImage: 'url(/assets/cover_photo_no_text2.png)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
            "You don't need to understand how AI works.<br className="hidden sm:block" />
            You need to know what it can do for you."
          </blockquote>
          <p className="text-blue-300 text-lg">That's what Spurstate is here to show you.</p>
        </div>
      </section>

      {/* Story timeline */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">How we got here</p>
              <h2 className="text-4xl font-bold text-gray-950 leading-tight mb-6">
                Built from a simple observation.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AI is changing the way businesses operate. But most of that change is happening without New Zealand businesses — not because the tools aren't good enough, but because nobody's shown them how to make it work for them.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Spurstate exists to close that gap.
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-200" />
              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white ring-2 ring-blue-100" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">What drives us</p>
            <h2 className="text-4xl font-bold text-gray-950 leading-tight">
              We say it simply or we don't say it.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-7 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Who we serve</p>
            <h2 className="text-4xl font-bold text-gray-950 leading-tight mb-4">
              Built for the people doing the actual work.
            </h2>
            <p className="text-lg text-gray-600">
              We don't work with enterprise. We work with the people who are running their own businesses and figuring it out as they go.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">NZ Business owners</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Local business owners and sole traders who know AI is important, but haven't had the time — or the right guidance — to make it work for them. We do the setup. They get the benefit.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['AI workflows that save real hours', 'Set up and working within days', 'More output without more headcount', 'Systems that keep delivering after we\'re done'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sole traders & professionals</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                You're doing everything yourself. AI doesn't replace that — it multiplies it. We find where AI takes things off your plate and make it happen. You keep working the way you work.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['AI that multiplies what you can do alone', 'Repetitive tasks handled so you can focus', 'Faster output without sacrificing quality', 'Practical, not theoretical'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Most businesses are still doing it the slow way.
          </h2>
          <p className="text-blue-100 text-xl mb-10">
            We show them what's possible — and set them up to actually use it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-7 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors"
            >
              Book a free call
            </Link>
            <Link
              to="/mission"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-colors"
            >
              Our mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
