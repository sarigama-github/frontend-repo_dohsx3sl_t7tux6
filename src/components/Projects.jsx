import { Code, Globe, Server } from 'lucide-react'

const projects = [
  {
    title: 'DevNotes',
    description: 'A minimal notes app with tags and search to keep my study snippets organized.',
    badges: ['React', 'LocalStorage', 'Tailwind'],
    icon: <Code size={18} />,
    link: '#',
  },
  {
    title: 'Campus Finder',
    description: 'Map-based tool to find labs, classrooms, and resources on campus.',
    badges: ['Leaflet', 'React', 'API'],
    icon: <Globe size={18} />,
    link: '#',
  },
  {
    title: 'API Workshop',
    description: 'Hands-on collection of small APIs built while learning FastAPI.',
    badges: ['FastAPI', 'Python', 'REST'],
    icon: <Server size={18} />,
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
          <a href="#contact" className="hidden sm:inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800">Need a collaborator? →</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">{p.title}</h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.badges.map((b) => (
                  <span key={b} className="text-xs rounded-md bg-gray-100 text-gray-700 px-2.5 py-1">{b}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
