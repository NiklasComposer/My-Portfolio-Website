import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X / Twitter Logo

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary font-body mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Niklas Apfelknab</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/niklas_composer?igsh=ZW8xOTNuOWl3MHc="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 text-accent hover:text-secondary transition-colors transform hover:scale-110" />
          </a>

          {/* X */}
          <a
            href="https://x.com/Niklas_Composer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiX className="w-6 h-6 text-accent hover:text-secondary transition-colors transform hover:scale-110" />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@niklascomposer?si=UOBuAXRcwt6AmtpW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="w-6 h-6 text-accent hover:text-secondary transition-colors transform hover:scale-110" />
          </a>

          {/* BandLab */}
          <a
            href="https://www.bandlab.com/niklascomposer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/icons/bandlab.svg"
              alt="BandLab"
              className="w-6 h-6 hover:scale-110 transition-transform"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/NiklasComposer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 text-accent hover:text-secondary transition-colors transform hover:scale-110" />
          </a>

        </div>
      </div>
    </footer>
  );
}
