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
    <section className="max-w-6xl mx-auto px-6 py-20 overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-heading mb-10 text-center">
        Complete Scores
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["All", "Solo", "Chamber", "Orchestral"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition 
              ${
                filter === cat
                  ? "bg-accent text-dark"
                  : "bg-card text-secondary hover:bg-highlight hover:text-dark"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">

        {filteredScores
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // neueste zuerst
          .map((score) => (
            <Link
              key={score.id}
              to={`/scores/${score.id}`}
              className="bg-card rounded-lg flex flex-col justify-between p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer w-full min-w-[250px] h-[460px]"
            >
              {/* Titel */}
              <h3 className="text-xl font-heading mb-4 text-secondary text-center break-words">
                {score.title}
              </h3>

              {/* Bild */}
              <div className="w-full h-72 bg-card rounded-md mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src={score.image}
                  alt={score.title}
                  className="max-h-full object-contain"
                />
              </div>
              
              {/* Badge / Type */}
              <span className="px-3 py-1 bg-highlight text-dark font-medium rounded-full text-sm self-center">
                {score.type}
              </span>
            </Link>
          ))}
      </div>
    </section>
  );
}
