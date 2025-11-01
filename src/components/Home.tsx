import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';
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
                src="https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTk1MTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo.
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
              Especializada en React, TypeScript, Node.js y tecnologías full-stack modernas.
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
              Dedicada a crear código limpio, eficiente y soluciones que generen valor real.
            </p>
          </motion.div>
        </motion.div>

        {/* Technologies Section */}
        <TechLogos />
      </div>
    </div>
  );
}
