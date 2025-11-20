export default function ProjectCard({ project }) {
  return (
    <article className="p-6 rounded-2xl bg-white/80 dark:bg-[#071022] border shadow-soft hover:shadow-lg transition">
      <h4 className="text-lg font-semibold">{project.title}</h4>
      <p className="text-sm mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">{project.desc}</p>
      <div className="mt-4">
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200">
          {project.tech}
        </span>
      </div>
      <div className="mt-4 flex gap-3">
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="text-sm underline">View</a>
        )}
      </div>
    </article>
  );
}
