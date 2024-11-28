import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BlogDetails from "./pages/BlogDetails";
import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/pages/DashboardHome";
import DashboardPosts from "./dashboard/pages/DashboardPosts";
import DashboardCreatePost from "./dashboard/pages/DashboardCreatePost";
import DashboardComments from "./dashboard/pages/DashboardComments";
import DashboardCategories from "./dashboard/pages/DashboardCategories";
import Privacy from "./pages/Privacy";
import About from "./pages/About";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="new-post" element={<DashboardCreatePost />} />
          <Route path="posts" element={<DashboardPosts />} />
          <Route path="comments" element={<DashboardComments />} />
          <Route path="categories" element={<DashboardCategories />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
