import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full px-3 py-1 ring-1 ring-blue-200">
            Software Engineering Technology • 3rd Semester
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Building thoughtful software with a playful, modern touch
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            I design and build web apps, APIs, and interactive experiences. Explore my favorite projects and see how I learn by shipping.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-2.5 font-semibold hover:bg-blue-700 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-2.5 font-semibold ring-1 ring-gray-300 hover:bg-gray-50 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
