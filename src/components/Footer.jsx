import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary font-body mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Niklas Apfelknab</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.instagram.com/niklas_composer?igsh=ZW8xOTNuOWl3MHc=" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 hover:text-accent transition-colors" />
          </a>
          <a href="https://youtube.com/@niklascomposer?si=UOBuAXRcwt6AmtpW" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-6 h-6 hover:text-accent transition-colors" />
          </a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
            <FaSpotify className="w-6 h-6 hover:text-accent transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
