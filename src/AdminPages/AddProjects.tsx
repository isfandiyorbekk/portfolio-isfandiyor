import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProjectsData } from "../data/Projects.Data";
import type { CreateProjectInput, Project } from "../types/CreateProject";

function AddProjects() {
  const navigate = useNavigate();
  const [techInput, setTechInput] = useState<string>("");
  const [formData, setFormData] = useState<CreateProjectInput>({
    title: "",
    description: "",
    image: "",
    link: "",
    techs: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTechsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTechInput(val);

    const techsArray = val
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    setFormData((prev) => ({ ...prev, techs: techsArray }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject: Project = {
      id: Date.now(),
      ...formData,
    };
    ProjectsData.push(newProject);

    alert("Loyiha muvaffaqiyatli qo'shildi!");
    navigate("/adminLayout");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">
            Yangi Loyiha Qo'shish
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Portfolioga yangi loyiha ma'lumotlarini kiriting
          </p>
        </div>

        <Link
          to="/adminLayout"
          className="px-3.5 py-2 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-all"
        >
          ← Orqaga
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-slate-800 rounded-2xl bg-slate-900/40 p-6 space-y-5 shadow-xl"
      >
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-300">
            Loyiha Nomi <span className="text-purple-400">*</span>
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="Masalan: Blogify"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-300">
            Loyiha Haqida Qisqacha (Description)
          </label>
          <textarea
            name="description"
            rows={3}
            placeholder="Loyiha haqida qisqacha ma'lumot..."
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300">
              Rasm URL (image)
            </label>
            <input
              type="text"
              name="image"
              placeholder="/blogify.png yoki https://..."
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300">
              Loyiha Havolasi (Link) <span className="text-purple-400">*</span>
            </label>
            <input
              type="url"
              name="link"
              required
              placeholder="https://example.netlify.app"
              value={formData.link}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-300">
            Texnologiyalar (Vergul bilan ajratib yozing)
          </label>
          <input
            type="text"
            placeholder="React, Next.js, Tailwind CSS"
            value={techInput}
            onChange={handleTechsChange}
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
          />
          {formData.techs.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {formData.techs.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/20 transition-all"
          >
            Loyiha Qo'shish
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProjects;
