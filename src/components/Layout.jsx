import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-primary font-sans">
      {/* Navbar immer oben */}
      <Navbar />

      {/* Hauptinhalt, wächst je nach Seite */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        {children}
      </main>

      {/* Footer immer unten */}
      <Footer />
    </div>
  );
}
