import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Scores from "./pages/Scores";
import Media from "./pages/Media";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScoreDetail from "./pages/ScoreDetail";
import MediaDetail from "./pages/MediaDetail";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/scores/:id" element={<ScoreDetail />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:id" element={<MediaDetail/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
