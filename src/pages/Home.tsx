import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Lightbulb, Users, Zap, Package } from 'lucide-react'

const howWeHelp = [
  {
    icon: Cpu,
    title: 'Adopt',
    description: 'We assess your business, identify where AI makes the biggest difference, and get it implemented. You don\'t need to understand the technology — you just need it working.',
  },
  {
    icon: Zap,
    title: 'Adapt',
    description: 'We rebuild your workflows around AI so you move faster, produce more, and spend less time on the tasks that slow you down. The result is a business that runs better.',
  },
  {
    icon: Package,
    title: 'Build',
    description: 'When off-the-shelf AI isn\'t enough, we build it. Workdesk is the first example — purpose-built for NZ teachers. More purpose-built tools are in development.',
  },
]

const differentiators = [
  {
    icon: Cpu,
    title: 'AI-first by default',
    description: 'We don\'t bolt AI on as an afterthought. Every engagement starts with it. That\'s what makes us different from every other consultancy.',
  },
  {
    icon: Lightbulb,
    title: 'Plain language, always',
    description: 'No jargon, no fluff. We explain what we\'re doing, why it works, and what it\'s going to do for your business.',
  },
  {
    icon: Users,
    title: 'Built for NZ businesses',
    description: 'We\'re based in Auckland. We understand the local market, local customers, and the realities of running a business here.',
  },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-48 md:pt-32 md:pb-60 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 border border-blue-100 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              AI Solutions — Auckland, New Zealand
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-950 leading-[1.05] tracking-tight mb-6">
              AI tools that work<br />
              <span className="text-blue-600">for the rest of us.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Spurstate helps NZ businesses adopt AI — so they can move faster, work smarter, and do more with less.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Book a free call
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-white hover:border-gray-300 transition-colors"
              >
                Our mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement band */}
      <section className="bg-blue-950 text-white py-28 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
            "Most businesses are still doing things the slow way. <br className="hidden md:block" />
            We show them what's possible — and set them up to actually use it."
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">What we do</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-950 leading-tight mb-6">
                We work directly<br />with your business.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Spurstate is an AI solutions company. We work with NZ businesses, sole traders, and professionals who know AI is important but haven't had the time — or the right guidance — to make it work for them.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We build systems that keep working after the engagement ends. That's what makes us different.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn about Spurstate <ArrowRight size={16} />
              </Link>
            </div>
            {/* Cover photo panel */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
              <img
                src="/assets/cover_photo_no_text2.png"
                alt=""
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-white shadow-sm">
                  <p className="text-sm font-semibold text-gray-900 mb-1">AI adoption is accelerating.</p>
                  <p className="text-sm text-gray-500">Businesses that move now will have a structural advantage. The window won't be open forever.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">How we help</p>
            <h2 className="text-4xl font-bold text-gray-950 leading-tight mb-4">
              Adopt. Adapt. Build.
            </h2>
            <p className="text-lg text-gray-600">
              Every engagement is different. But the goal is always the same — AI that actually works for your business, not against it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howWeHelp.map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-blue-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Book a free call to talk through your situation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Spurstate */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Why Spurstate</p>
            <h2 className="text-4xl font-bold text-gray-950 leading-tight">
              What makes us different.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-7 hover:border-blue-200 hover:shadow-sm transition-all">
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

      {/* Who we help */}
      <section className="bg-blue-950 text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-no-repeat bg-right bg-contain pointer-events-none opacity-10"
          style={{ backgroundImage: 'url(/assets/cover_photo_no_text.png)' }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">Who we help</p>
            <h2 className="text-4xl font-bold text-white leading-tight">
              Built for the people doing the actual work.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-blue-900/60 border border-blue-800 p-8">
              <h3 className="text-xl font-bold text-white mb-3">Business owners</h3>
              <p className="text-blue-200 leading-relaxed mb-5 text-sm">
                You're running a business. You don't have time to become an AI expert. We come in, assess what you need, and implement it. You get the results without the learning curve.
              </p>
              <ul className="space-y-2 text-sm text-blue-300">
                {[
                  'AI workflows that save real hours every week',
                  'Tools implemented and working within days',
                  'More output without more headcount',
                  'Plain-language guidance, no assumptions',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-blue-900/60 border border-blue-800 p-8">
              <h3 className="text-xl font-bold text-white mb-3">Sole traders & professionals</h3>
              <p className="text-blue-200 leading-relaxed mb-5 text-sm">
                You're doing everything yourself. AI doesn't replace that — it multiplies it. We help you identify where AI can take things off your plate and put the right tools in place.
              </p>
              <ul className="space-y-2 text-sm text-blue-300">
                {[
                  'AI that multiplies what you can do alone',
                  'Repetitive tasks automated so you can focus',
                  'Faster output without sacrificing quality',
                  'Practical, not theoretical',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products teaser */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Products</p>
              <h2 className="text-4xl font-bold text-gray-950 leading-tight">
                We also build our own tools.
              </h2>
            </div>
            <Link
              to="/workdesk"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors shrink-0"
            >
              See Workdesk <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/workdesk" className="group rounded-2xl border border-blue-100 bg-blue-50 p-8 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/icon-mark.png" alt="" className="w-9 h-9" />
                <div>
                  <p className="font-bold text-gray-900">Workdesk</p>
                  <p className="text-xs text-blue-600 font-semibold">Now in beta</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A desktop app for NZ teachers that generates lesson plans, unit plans, and report comments using AI — built around the NZ Curriculum and personalised to your school.
              </p>
              <span className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-lg">+</span>
                </div>
                <div>
                  <p className="font-bold text-gray-400">More coming</p>
                  <p className="text-xs text-gray-400">In development</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Workdesk is just the start. Spurstate is building AI tools for more NZ professional contexts. Same philosophy: useful by default, not eventually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            You don't need to understand<br className="hidden md:block" /> how AI works.
          </h2>
          <p className="text-blue-100 text-xl mb-10">
            You need to know what it can do for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-7 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors"
            >
              Book a free call
            </Link>
            <Link
              to="/about"
              className="px-7 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-colors"
            >
              Our mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
