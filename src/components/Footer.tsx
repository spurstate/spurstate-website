import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-300">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img src="/assets/logo.png" alt="Spurstate" className="h-14 w-auto self-start" />
            <p className="text-sm leading-relaxed mb-8">
              AI tools that work for the rest of us.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={14} className="shrink-0" />
              <span>Auckland, New Zealand</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={14} className="shrink-0" />
              <a href="mailto:hello@spurstate.co.nz" className="hover:text-blue-100 transition-colors">
                hello@spurstate.co.nz
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 text-blue-100">Navigation</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link to="/" className="hover:text-blue-100 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-100 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-100 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-blue-100 text-sm font-semibold mb-4">Get in touch</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="mailto:hello@spurstate.co.nz" className="hover:text-blue-100 transition-colors">
                  hello@spurstate.co.nz
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-100 transition-colors">
                  Book a free call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>&copy; {new Date().getFullYear()} Spurstate. All rights reserved.</span>
          <span>Auckland, New Zealand</span>
        </div>
      </div>
    </footer>
  )
}
