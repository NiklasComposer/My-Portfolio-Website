// src/pages/ScoreDetail.jsx
import { useParams, Link } from "react-router-dom";
import scores from "../data/scores";

export default function ScoreDetail() {
  const { id } = useParams();
  const score = scores.find((s) => s.id.toString() === id);

  if (!score) {
    return (
      <p className="text-center text-secondary py-20">Score not found.</p>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* Titel */}
      <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center">
        {score.title}
      </h2>

      {/* Grid Layout: Links = Beschreibung + Instrumente, Rechts = YouTube */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Linke Seite */}
        <div>
          {/* Beschreibung */}
          <p className="text-secondary text-lg leading-relaxed mb-6 whitespace-pre-line">
            {score.description}
          </p>

          {/* Instrumentenliste (falls vorhanden) */}
          {/* Instrumentenliste als Badges */}
            {score.instruments && score.instruments.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-heading mb-3 text-secondary">
                  Instrumentation
                </h3>
                <div className="flex flex-wrap gap-2">
                  {score.instruments.map((inst, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-highlight text-dark font-medium rounded-full text-sm"
                    >
                      {inst}
                    </span>
                  ))}
                </div>
              </div>
            )}
        </div>

        {/* Rechte Seite */}
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${score.youtubeId}`}
            title={score.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-12">
        <Link
          to="/scores"
          className="px-5 py-2 bg-accent text-dark font-medium rounded-lg hover:bg-highlight transition"
        >
          ← Back to Scores
        </Link>
      </div>
    </section>
  );
}
