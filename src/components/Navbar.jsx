import { useState } from 'react'
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">
            <span className="text-blue-600">{`<`}</span>
            <span className="mx-1">Your Name</span>
            <span className="text-blue-600">{`/>`}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <a href="mailto:you@example.com" className="p-2 rounded-md hover:bg-gray-100 text-gray-600" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 text-gray-600" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 text-gray-600" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
              <a href="mailto:you@example.com" className="p-2 rounded-md hover:bg-gray-100 text-gray-600" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 text-gray-600" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 text-gray-600" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
