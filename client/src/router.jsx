import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BlogDetails from "./pages/BlogDetails"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Router = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
    <Footer/></>
  );
};