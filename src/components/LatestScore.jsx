import { Link } from "react-router-dom";
import scores from "../data/scores";

export default function LatestScore() {
  // Neuester Score (nach Datum sortieren)
  const latestScore = scores
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  if (!latestScore) return null;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      {/* Linke Seite: Text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-heading text-secondary mb-6">
          Latest Score
        </h2>
        <h3 className="text-2xl font-heading text-accent mb-4">
          {latestScore.title}
        </h3>
        <p className="text-secondary mb-6">{latestScore.description}</p>
        <Link
          to={`/scores/${latestScore.id}`}
          className="px-6 py-3 bg-accent text-dark font-medium rounded-lg hover:bg-highlight transition"
        >
          View Details
        </Link>
      </div>

      {/* Rechte Seite: YouTube Video */}
      <div className="w-full max-w-4xl mx-auto aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${latestScore.youtubeId}`}
          title={latestScore.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </section>
  );
}
