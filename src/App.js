import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import NotFound from "./components/NotFound/NotFound";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/BlogDetail/BlogDetail";

function App({ type, color }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  return (
    <>
      {!loading && (
        <Loading type={"spinningBubbles"} color={"black"} height={"7%"} width={"7%"} />
      )}
      {loading && (
        <>
        
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/calendar" element={<CalendarPage />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blogdetail/:id" element={<BlogDetail />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />} type={type} color={color}></Route>
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
