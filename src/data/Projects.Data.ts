import type { ProjectTypes } from "../types/ProjectTypes";

export const ProjectsData: ProjectTypes[] = [
  {
    id: 1,
    title: "Blogify",
    description:
      "Maqolalar va blog postlarini yaratish, tahrirlash hamda ulashish uchun mo'ljallangan qulay platforma.",
    image: "/blogify.png",
    link: "https://blogify-isfandiyorr.netlify.app",
    techs: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    title: "Unsplash Gallery",
    description:
      "Rasmlarni qidirish, yuklab olish va saqlash imkonini beruvchi interaktiv galereya ilovasi.",
    image: "/unsplash.png",
    link: "https://unsplash-isfandiyor.netlify.app",
    techs: ["JavaScript", "Unsplash API", "CSS"],
  },
  {
    id: 3,
    title: "Finance Tracker",
    description:
      "Daromad va xarajatlarni hisoblab boruvchi, kirim-chiqim statistikalarini ko'rsatuvchi moliya paneli.",
    image: "/trackker.png",
    link: "https://expence-trackker.netlify.app",
    techs: ["React", "Chart.js", "Tailwind"],
  },
];
