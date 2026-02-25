import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export default function Footer(){
  return (
    <footer className="mt-20 lg:mt-32 border-t border-fuchsia-300/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Section À propos */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-fuchsia-300">
              Goutin Alphonsine
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Développeuse Full-Stack spécialisée en Flutter, Next.js et NestJS.
            </p>
            <div className="flex items-center gap-2 text-sm text-fuchsia-300">
              <span>Mobile</span>
              <span>·</span>
              <span>Web</span>
              <span>·</span>
              <span>API</span>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-fuchsia-300">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-fuchsia-300 transition-colors duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  href="/propos" 
                  className="text-gray-400 hover:text-fuchsia-300 transition-colors duration-200"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link 
                  href="/service" 
                  className="text-gray-400 hover:text-fuchsia-300 transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-fuchsia-300 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-fuchsia-300">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-fuchsia-300 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:goutinsino@gmail.com" 
                  className="hover:text-fuchsia-300 transition-colors duration-200"
                >
                  goutinsino@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-fuchsia-300 flex-shrink-0 mt-0.5" />
                <a 
                  href="tel:+22901470651" 
                  className="hover:text-fuchsia-300 transition-colors duration-200"
                >
                  +229 01 47 06 51 45
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-fuchsia-300 flex-shrink-0 mt-0.5" />
                <span>Parakou, Bénin</span>
              </li>
            </ul>
          </div>

          {/* Section Réseaux sociaux */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-fuchsia-300">
              Suivez-moi
            </h3>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-fuchsia-300/30 flex items-center justify-center text-gray-400 hover:text-fuchsia-300 hover:border-fuchsia-300 hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-fuchsia-300/30 flex items-center justify-center text-gray-400 hover:text-fuchsia-300 hover:border-fuchsia-300 hover:scale-110 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-fuchsia-300/30 flex items-center justify-center text-gray-400 hover:text-fuchsia-300 hover:border-fuchsia-300 hover:scale-110 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-6">
              Disponible pour des projets freelance et collaborations.
            </p>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="mt-12 pt-8 border-t border-fuchsia-300/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Goutin Alphonsine. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link 
                href="/mentions-legales" 
                className="hover:text-fuchsia-300 transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <Link 
                href="/confidentialite" 
                className="hover:text-fuchsia-300 transition-colors duration-200"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}