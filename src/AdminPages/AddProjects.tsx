import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProjectsData } from "../data/Projects.Data";
import type { CreateProjectInput, Project } from "../types/CreateProject";
import AddProjectsForm from "../components/AddProjectsForm";

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
      <AddProjectsForm
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        techInput={techInput}
        handleTechsChange={handleTechsChange}
      />
    </div>
  );
}

export default AddProjects;
