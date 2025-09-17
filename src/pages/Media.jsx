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
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
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

      {/* Projekte */}
      <div className="space-y-20">
        {filteredProjects
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((project, index) => (
            <div key={project.id} className="border-b border-secondary pb-12">
              <MediaProject project={project} reverse={index % 2 !== 0} />
            </div>
          ))}
      </div>
    </section>
  );
}

// Ein einzelnes Media-Projekt
function MediaProject({ project, reverse }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
        reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
      }`}
    >
      {/* Text */}
      <div className="text-center md:text-left order-1">
        <h3 className="text-2xl font-heading mb-4 text-secondary">
          {project.title}
        </h3>
        {project.description && (
          <p className="text-secondary mb-6 whitespace-pre-line">{project.description}</p>
        )}
        <span className="px-4 py-1 bg-highlight text-dark font-medium rounded-full text-sm">
          {project.type}
        </span>
      </div>

      {/* Video */}
      <div className="order-2">
        <LazyYouTubeEmbed project={project} />
      </div>
    </div>
  );
}

// Lazy Loaded YouTube Video
function LazyYouTubeEmbed({ project }) {
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
    <div ref={ref} className="w-full aspect-video">
      {isVisible ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-md shadow-lg"
        ></iframe>
      ) : (
        <div className="w-full h-full bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-gray-600">Loading...</span>
        </div>
      )}
    </div>
  );
}
