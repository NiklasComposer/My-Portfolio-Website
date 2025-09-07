// src/pages/Scores.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import scores from "../data/scores";

export default function Scores() {
  const [filter, setFilter] = useState("All");

  // Filter-Logik
  const filteredScores =
    filter === "All"
      ? scores
      : scores.filter((s) => s.category === filter);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-heading mb-10 text-center">
        Complete Scores
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {["All", "Solo", "Chamber", "Orchestral"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition 
              ${
                filter === cat
                  ? "bg-accent text-dark"          // Aktive Kategorie
                  : "bg-card text-secondary hover:bg-highlight hover:text-dark" // Inaktive Kategorie
              }`}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredScores
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // neueste zuerst
          .map((score) => (
            <Link
              key={score.id}
              to={`/scores/${score.id}`}
              className="bg-card rounded-lg flex flex-col items-center p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              {/* Titel */}
              <h3 className="text-xl font-heading mb-4 text-secondary text-center">
                {score.title}
              </h3>

              {/* Bild mit festem Seitenverhältnis */}
              <div className="w-full  aspect-[4/5] bg-card rounded-md mb-6 overflow-hidden">
                <img
                  src={score.image}
                  alt={score.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Badge / Type */}
              <span className="px-3 py-1 bg-highlight text-dark font-medium rounded-full text-sm">
                {score.type}
              </span>
            </Link>
          ))}
      </div>

    </section>
  );
}
