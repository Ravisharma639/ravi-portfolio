import SocialLinks from './SocialLinks'

export default function Header() {
  return (
    <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-md flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-400 text-white font-semibold shadow-soft">
          RS
        </div>
        <div>
          <h1 className="text-lg font-semibold leading-tight">Ravi Sharma</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Java • MERN • Full-Stack Developer</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <SocialLinks />
        <a href="/resume.pdf"
           download
           className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md border dark:border-slate-700 shadow-sm hover:shadow-md"
        >
          Resume
        </a>
      </div>
    </header>
  )
}
