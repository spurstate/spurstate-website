import { useState } from 'react'
import { Mail, MapPin, Phone, ArrowRight, CheckCircle } from 'lucide-react'

type FormState = 'idle' | 'sending' | 'sent'

const reasons = [
  { value: 'workdesk-beta', label: 'Workdesk beta access (teacher)' },
  { value: 'ai-consulting', label: 'AI adoption & consulting (business)' },
  { value: 'general', label: 'General enquiry' },
]

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', reason: '', message: '' })
  const [formState, setFormState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    try {
      await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setFormState('sent')
    } catch {
      setFormState('idle')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Get in touch</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 leading-tight tracking-tight mb-6">
              Let's talk about<br />
              <span className="text-blue-600">what's possible.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you're a teacher curious about Workdesk, a business owner wondering what AI could do for you, or just want to say hello — I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Founder bio */}
      <section className="bg-gray-50 py-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="/assets/mitch-profile_pic.png"
              alt="Mitch Wilson — Founder, Spurstate"
              className="w-40 h-40 sm:w-64 sm:h-64 rounded-full object-cover object-top ring-2 ring-blue-100 shrink-0"
            />
            <div className="text-center sm:text-left">
              <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-1">Founder</p>
              <h2 className="text-xl font-bold text-gray-950 mb-2">Mitch Wilson</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                I'm Mitch Wilson, a developer based in Auckland. AI is changing the way work gets done — but most of that change is happening without New Zealand businesses. I started Spurstate to close that gap: helping people understand what AI can actually do for them, and building tools that make it practical to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-950 mb-8">Contact info</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">Email</p>
                    <a href="mailto:hello@spurstate.co.nz" className="text-blue-600 hover:text-blue-700 transition-colors text-sm">
                      hello@spurstate.co.nz
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">Location</p>
                    <p className="text-gray-500 text-sm">Auckland, New Zealand</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">Response time</p>
                    <p className="text-gray-500 text-sm">We reply within one business day.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2">Applying for Workdesk beta?</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  We're looking for a small group of Auckland primary school teachers. Free access, API costs covered by Spurstate. Just use Workdesk in your actual teaching practice and give us honest feedback.
                </p>
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  {['Free during beta period', 'Mac & Windows supported', 'Direct input into product direction', 'No technical knowledge needed'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {formState === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950 mb-2">Thanks {form.firstName}! We'll be in touch shortly.</h3>
                  <p className="text-gray-500">We'll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="firstName">
                        First name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="lastName">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="reason">
                      What can we help with?
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none"
                    >
                      <option value="" disabled>Select a reason…</option>
                      {reasons.map(r => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about yourself and what you're looking for…"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60 transition-colors"
                  >
                    {formState === 'sending' ? 'Sending…' : 'Send message'}
                    {formState !== 'sending' && <ArrowRight size={16} />}
                  </button>

                  <p className="text-xs text-gray-400">
                    We don't share your information with anyone. We'll only use it to reply to your message.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <section className="bg-blue-950 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-blue-300 text-lg mb-2">Based in Auckland. Building for New Zealand.</p>
          <p className="text-blue-700 text-sm">Spurstate — AI tools that work for the rest of us.</p>
        </div>
      </section>
    </div>
  )
}
