export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  techs: string[];
};

export type CreateProjectInput = Omit<Project, "id">;
