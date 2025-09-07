// src/components/LatestMediaProject.jsx
import { Link } from "react-router-dom";
import mediaProjects from "../data/media";

export default function LatestMediaProject() {
  // Neuestes Media-Projekt ermitteln
  const latestProject = mediaProjects
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  if (!latestProject) return null; // Falls keine Projekte vorhanden sind

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Linke Seite: YouTube Video */}
      <div className="w-full max-w-4xl mx-auto aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${latestProject.youtubeId}`}
          title={latestProject.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>


      {/* Rechte Seite: Text */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-heading mb-6 text-secondary">
          Latest Media Project
        </h2>
        <h3 className="text-2xl font-heading text-accent mb-4">
          {latestProject.title}
        </h3>
        <p className="text-secondary text-lg leading-relaxed mb-6">
          {latestProject.description}
        </p>
        <Link
          to="/media"
          className="px-6 py-3 bg-accent text-dark font-medium rounded-lg hover:bg-highlight transition"
        >
          View All Media Projects
        </Link>
      </div>
    </section>
  );
}
