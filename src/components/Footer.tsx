import { Linkedin, Github, Briefcase, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Lucía Quesada Moreno</h3>
            <p className="text-slate-300">
              Desarrolladora de software apasionada por crear soluciones innovadoras y eficientes.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4">Contacto</h3>
            <div className="flex flex-col gap-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>luciaqm2003@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>España</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4">Enlaces de interés</h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="text-white bg-transparent border-slate-700 hover:bg-slate-800"
                asChild
              >
                <a
                  href="www.linkedin.com/in/lucía-quesada-moreno-17b0a818b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="text-white bg-transparent border-slate-700 hover:bg-slate-800"
                asChild
              >
                <a
                  href="https://github.com/lili1224"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="text-white bg-transparent border-slate-700 hover:bg-slate-800"
                asChild
              >
                <a
                  href="https://www.infojobs.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="InfoJobs"
                >
                  <Briefcase className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Lucía Quesada Moreno. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
