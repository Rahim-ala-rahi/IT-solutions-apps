import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Login from "../components/SafetyZone/Login";
import Signup from "../components/SafetyZone/Signup";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Service from "../Pages/Service/Service";
import Blog from "../Pages/Blog/Blog";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageUser from "../Dashboard/components/ManageUser";
import Consulting from "../Pages/Service/Consulting";
import Careers from "../Pages/Service/Careers";

import UsersTable from "../Pages/Courses/UsersTable";
import ContactHistory from "../Dashboard/components/contact/ContactHistory";
import ErrorPage from "../components/Shared/ErrorPage";
import Navbar from "../components/Shared/Navbar";
import AdminLayout from "../Layout/AdminLayout";
import AddBlogs from "../Dashboard/AddBlogs/AddBlogs";
import Displayblog from "../Dashboard/DisplayBlog/Displayblog";
import UpdateBlog from "../Dashboard/DisplayBlog/UpdateBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/consult",
        element: <Consulting />,
      },
      {
        path: "/career",
        element: <Careers />,
      },
      {
        path: "/courses",
        element: <UsersTable />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      // {
      //   path: "/contact-form",
      //   element: <ContactForm />,
      // },
    ],
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "admin",
    element: <AdminLayout></AdminLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/add-blog",
        element: <AddBlogs />,
      },
      {
        path: "/dashboard/about",
        element: <About />,
      },
      {
        path: "/dashboard/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard/service",
        element: <Service />,
      },
      {
        path: "/dashboard/manage_user",
        element: <ManageUser />,
      },
      {
        path: "/dashboard/contact-history",
        element: <ContactHistory />,
      },
      {
        path: "/dashboard/display-blogs",
        element: <Displayblog />,
      },
      {
        path: "/dashboard/display-blogs/update",
        element: <UpdateBlog />,
      },
      {
        path: "/dashboard/display-blogs/:id",
        element: <UpdateBlog />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`),
      },
    ],
  },
]);

export default router;
