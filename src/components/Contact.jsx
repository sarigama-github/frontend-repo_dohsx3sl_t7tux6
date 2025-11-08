import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your message has been noted.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
          <p className="mt-3 text-gray-600">Feel free to reach out for collaboration, internships, or just to say hi.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 pr-10" />
                <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows={5} value={form.message} onChange={onChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Or email me directly: <a className="font-medium text-blue-700" href="mailto:you@example.com">you@example.com</a></p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-2.5 font-semibold hover:bg-blue-700">
              <Send size={18} /> Send
            </button>
          </div>
          {status && <p className="text-sm text-green-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
