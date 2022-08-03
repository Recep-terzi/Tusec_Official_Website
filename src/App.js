
import Navbar from "./components/Navbar/Navbar";
import {Routes,Route} from "react-router-dom"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
