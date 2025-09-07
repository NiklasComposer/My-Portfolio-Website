import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      {/* Linke Seite: Bild */}
      <div className="flex justify-center">
        <img
          src="/images/home/me.png" // Bild hier einsetzen
          alt="Niklas Apfelknab"
          className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
        />
      </div>

      {/* Rechte Seite: Text */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-heading text-secondary mb-6">
          Niklas Apfelknab
        </h1>
        <p className="text-lg md:text-xl text-secondary leading-relaxed">
          Composer for Film, Games and Concert Music 
        </p>
        <p className="text-secondary mt-4 mb-8">
          
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/contact"
            className="px-6 py-3 bg-accent text-dark font-medium rounded-lg hover:bg-highlight transition"
          >
            Get in Touch
          </Link>
          <Link
            to="/scores"
            className="px-6 py-3 bg-card text-secondary font-medium rounded-lg border border-secondary hover:bg-highlight hover:text-dark transition"
          >
            See My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
