import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import Login from "./auth/Login";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Projects from "./AdminPages/Projects";
import AddProjects from "./AdminPages/AddProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "admin",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/adminLayout",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: "addProject",
            element: <AddProjects />,
          },
        ],
      },
    ],
  },
]);
