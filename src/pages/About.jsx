// src/pages/About.jsx
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center">
        About Me
      </h2>

      {/* 2-Spalten Layout: Links Text, Rechts Bild */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 text-secondary text-lg leading-relaxed">
          <p>
            Hi, I’m{" "}
            <span className="text-accent font-heading">Niklas Apfelknab</span>, 
            a composer and pianist from Austria. 
            I focus on classical composition as well as creating original soundtracks 
            for video games and film projects.
          </p>
          <p>
            Since September 2024, I’ve been living in Vienna, where I study Media 
            Composition at the Vienna Music Institute. My harmonic language is deeply 
            inspired by Japanese music with influences from composers like Joe Hisaishi, 
            Ryuichi Sakamoto, Yasunori Nishiki, and Marika Takeuchi constantly shaping my sound world.
          </p>
          <p>
            I mainly work with Cubase and Dorico, blending classical orchestration with modern production 
            tools. Beyond music, I enjoy reading mangas, webtoons or classical literature, exploring philosophy, and of course, 
            playing video games. Especially JRPGs like Octopath Traveler and the Dragon Quest series.
          </p>
          <p>
            For me, composing is about more than just writing notes – it’s about creating atmospheres and 
            emotions that stay with people long after the music fades.
          </p>
          <p>
            If you’d like to collaborate or just chat about music, feel free to reach out via my contact page 
            or simply dm me on my instagram account.
          </p>

          {/* Call to Action Button */}
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-accent text-dark font-medium rounded-xl shadow-md hover:shadow-lg hover:bg-highlight transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bild */}
        <div className="flex justify-center">
          <img
            src="/images/about/Me.jpeg" // 👉 Dein Bild hier (z.B. im public/images Ordner)
            alt="Niklas Apfelknab"
            className="w-120 h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
