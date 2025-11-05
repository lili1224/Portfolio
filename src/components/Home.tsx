import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { ArrowRight, Briefcase, Mail, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { TechLogos } from './TechLogos';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="w-48 h-48 border-4 border-slate-200 shadow-lg">
              <AvatarImage 
                src="/media/LuciaQuesadaMoreno.JPG"
                alt="Lucía Quesada Moreno"
              />
              <AvatarFallback>LQM</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="mb-3">Lucía Quesada Moreno</h1>
            <h2 className="text-slate-600 mb-6">Desarrolladora de Software</h2>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link to="/proyectos">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Ver Proyectos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contacto">
                  <Mail className="w-5 h-5 mr-2" />
                  Contactar
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="/media/curriculum.pdf" 
                  download="Lucia_Quesada_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            Graduada en Tecnología Digital y Multimedia, me especializo en el desarrollo de soluciones 
            digitales, diseño web y gestión de contenidos. He participado en proyectos reales en empresas 
            como NTT Data, Obeikan MDF y la UPV, integrando creatividad con tecnología. Me apasiona transformar 
            ideas en experiencias visuales y funcionales.
          </p>
          <p>
            He coordinado equipos en proyectos multimedia como POLIWOOD, liderando la planificación, redacción de guiones 
            y control técnico de equipos audiovisuales. También he diseñado escenas, widgets e interfaces para directos en 
            Twitch empleando HTML, CSS y JavaScript. Me caracterizo por mi responsabilidad, liderazgo y capacidad para 
            trabajar en equipo.
          </p>
          <p>
            Además, cuento con experiencia en diseño web con WordPress, creación de planes de redes sociales y edición de 
            contenido audiovisual. Domino programas como Canva, Blender, OBS y Unity, así como lenguajes como Python, JavaScript, 
            C# y MySQL. Siempre busco aprender, innovar y aportar valor en cada proyecto que emprendo.
          </p>
        </motion.div>

        {/* Additional Info Section with Scroll Animation */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="p-6 bg-slate-50 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-3">Experiencia</h3>
            <p className="text-slate-600">
              Amplia experiencia en desarrollo de aplicaciones web modernas y soluciones innovadoras.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-slate-50 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-3">Habilidades</h3>
            <p className="text-slate-600">
              Especializada en HTML, Python, JavaScript y tecnologías full-stack modernas.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-slate-50 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-3">Compromiso</h3>
            <p className="text-slate-600">
              Dedicada a crear código limpio, eficiente, accesibe, escalable y soluciones que generen valor real.
            </p>
          </motion.div>
        </motion.div>

        {/* Technologies Section */}
        <TechLogos />
      </div>
    </div>
  );
}
