// src/pages/Home.jsx
import Hero from "../components/Hero";
import LatestScore from "../components/LatestScore";
import LatestMediaProject from "../components/LatestMediaProject";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      <div className="h-px bg-secondary/30 my-16"></div>

      {/* Latest Score Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <LatestScore />
      </section>

      <div className="h-px bg-secondary/30 my-16"></div>

      {/* Latest Media Project Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <LatestMediaProject />
      </section>
    </div>
  );
}
