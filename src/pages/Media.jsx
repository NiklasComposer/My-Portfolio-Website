// src/pages/Media.jsx
import { useState, useRef, useEffect } from "react";
import mediaProjects from "../data/media";

export default function Media() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? mediaProjects
      : mediaProjects.filter((p) => p.category === filter);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-heading mb-10 text-center">
        Media Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {["All", "Film", "Game"].map((cat) => (
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

      {/* Media Cards - Flex Layout */}
      <div className="flex flex-wrap justify-center gap-12">
        {filteredProjects
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((project) => (
            <div key={project.id} className="w-full md:w-[45%]">
              <LazyYouTubeCard project={project} />
            </div>
          ))}
      </div>
    </section>
  );
}

// Komponente für Lazy Loaded YouTube Card
function LazyYouTubeCard({ project }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-card rounded-lg flex flex-col items-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full"
    >
      {/* Titel */}
      <h3 className="text-2xl font-heading mb-6 text-secondary text-center">
        {project.title}
      </h3>

      {/* YouTube Video */}
      <div className="w-full aspect-[16/9] mb-6">
        {isVisible ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        ) : (
          <div className="w-full h-full bg-gray-300 rounded-md flex items-center justify-center">
            <span className="text-gray-600">Loading...</span>
          </div>
        )}
      </div>

      {/* Badge / Type */}
      <span className="px-4 py-1 bg-highlight text-dark font-medium rounded-full text-sm">
        {project.type}
      </span>
    </div>
  );
}
