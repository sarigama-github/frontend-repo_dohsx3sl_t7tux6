export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a 3rd semester Software Engineering Technology student focused on building clean, user-centered applications. I enjoy full‑stack web development, algorithms, and bringing ideas to life with modern tools.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                Comfortable with HTML, CSS, JavaScript/TypeScript, and Python
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                Learning React, FastAPI, databases, and cloud basics
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                Interested in UI/UX, performance, and accessibility
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Tech Stack</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {['React', 'FastAPI', 'Tailwind', 'MongoDB', 'Node.js', 'Git'].map((t) => (
                <span key={t} className="inline-flex items-center justify-center rounded-md bg-white ring-1 ring-gray-200 px-3 py-2 text-gray-700">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 text-sm text-gray-600">
              Always exploring new tools and patterns, while keeping fundamentals strong.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
