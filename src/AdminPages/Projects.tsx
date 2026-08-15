import { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectsData } from "../data/Projects.Data";
import type { ProjectTypes } from "../types/ProjectTypes";

function Projects() {
  const [projects, setProjects] = useState<ProjectTypes[]>(ProjectsData);
  function handleDelete(id: number) {
    setProjects((prev) => prev.filter((project) => project.id !== id));
    const dataIndex = ProjectsData.findIndex((project) => project.id === id);
    if (dataIndex !== -1) {
      ProjectsData.splice(dataIndex, 1);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-white">Barcha Loyihalar</h1>
          <p className="text-xs text-slate-400 mt-1">
            Saytingizda ko'rsatiladigan barcha faol loyihalar ro'yxati
          </p>
        </div>
        <Link
          to="/adminLayout/addProject"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/20 transition-all shrink-0"
        >
          <span>➕</span>
          <span>Yangi Loyiha</span>
        </Link>
      </div>

      <div className="border border-slate-800 rounded-2xl bg-slate-900/40 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400 uppercase font-semibold tracking-wider">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">Loyiha Nomi</th>
                <th className="p-4">Texnologiyalar</th>
                <th className="p-4">Havola (Link)</th>
                <th className="p-4 text-right">Amal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {projects && projects.length > 0 ? (
                projects.map((project, index) => (
                  <tr
                    key={project.id || index}
                    className="hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="p-4 font-mono text-slate-500">
                      {index + 1}
                    </td>
                    <td className="p-4 font-semibold text-white">
                      <div className="flex items-center gap-3">
                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-8 h-8 rounded-lg object-cover border border-slate-800"
                          />
                        )}
                        <span>{project.title}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1.5">
                        {Array.isArray(project.techs) ? (
                          project.techs.map((tech: string, i: number) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700/60 text-[10px] text-slate-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))
                        ) : (
                          <span className="text-slate-400">
                            {project.techs}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="p-4">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 hover:underline font-medium"
                        >
                          <span>Ko'rish</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleDelete(project.id)}
                          className="px-2.5 py-1.5 rounded-lg border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-[11px] font-medium transition cursor-pointer"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    Hozircha hech qanday loyiha topilmadi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Projects;
