// src/pages/ThankYou.jsx
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-heading mb-6 text-center text-secondary">
        Thank You!
      </h2>
      <p className="text-secondary text-lg mb-8 text-center max-w-xl">
        Your message has been successfully sent. I’ll get back to you as soon as possible.
      </p>
      <Link
        to="/"
        className="px-5 py-3 bg-accent text-dark font-heading rounded-lg hover:bg-highlight transition-colors"
      >
        ← Back to Homepage
      </Link>
    </section>
  );
}
