// src/pages/MediaDetail.jsx
import { useParams, Link } from "react-router-dom";
import mediaProjects from "../data/media";

export default function MediaDetail() {
  const { id } = useParams();
  const project = mediaProjects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <p className="text-center text-secondary py-20">Project not found.</p>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Titel */}
      <h2 className="text-3xl md:text-4xl font-heading mb-10 text-center">
        {project.title}
      </h2>

      {/* Inhalt in 2 Spalten */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Beschreibung */}
        <p className="text-secondary text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Video */}
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-12">
        <Link
          to="/media"
          className="px-5 py-2 bg-accent text-dark font-medium rounded-lg hover:bg-highlight transition"
        >
          ← Back to Media Projects
        </Link>
      </div>
    </section>
  );
}
