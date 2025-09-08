import { Link } from "react-router-dom";
import scores from "../data/scores";
import { motion } from "framer-motion";

export default function LatestScore() {
  const latestScore = scores
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  if (!latestScore) return null;

  // Animation Variants
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      {/* Text */}
      <motion.div
        className="order-1 md:order-1 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp(0)}
      >
        <h2 className="text-3xl md:text-4xl font-heading text-secondary mb-6">
          Latest Score
        </h2>
        <h3 className="text-2xl font-heading text-accent mb-4">
          {latestScore.title}
        </h3>
        <p className="text-secondary text-lg leading-relaxed mb-6">{latestScore.shortdescription}</p>
         <Link
          to={`/scores/${latestScore.id}`}
          className="px-6 py-3 bg-accent text-dark font-medium rounded-lg hover:bg-highlight transition"
        >
          View Details
        </Link>
      </motion.div>

      {/* YouTube Video */}
      <motion.div
        className="w-full max-w-4xl mx-auto aspect-video mb-6 order-2 md:order-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp(0.2)}
      >
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${latestScore.youtubeId}`}
          title={latestScore.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </section>
  );
}
