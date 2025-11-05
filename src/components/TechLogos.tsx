import { motion } from 'motion/react';
import { Code2, Palette } from 'lucide-react';

interface TechLogo {
  name: string;
  logoUrl: string;
  category: 'development' | 'design';
}

const technologies: TechLogo[] = [
  {
    name: 'Python',
    category: 'development',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'HTML',
    category: 'development',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    category: 'development',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    category: 'development',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'C/C++',
    category: 'development',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'C#',
    category: 'development',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    name: 'Java',
    category: 'development',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'MySQL',
    category: 'development',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'PHP',
    category: 'development',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    name: 'MongoDB',
    category: 'development',
    logoUrl: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
  
  },
  {
    name: 'Docker',
    category: 'development',
    logoUrl: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
  },
  {
    name: 'Git',
    category: 'development',
    logoUrl: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  },

  // Programas de Diseño y Contenidos
  {
    name: 'Canva',
    category: 'design',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
  },
  {
    name: 'Unity',
    category: 'design',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
  },
  {
    name: 'Blender',
    category: 'design',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
  },
  {
    name: 'OBS',
    category: 'design',
    logoUrl: 'https://obsproject.com/assets/images/new_icon_small-r.png',
  },
  {
    name: 'Notion',
    category: 'design',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
  },
  {
    name: 'WordPress',
    category: 'design',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
  },
];

export function TechLogos() {
  const developmentTechs = technologies.filter(tech => tech.category === 'development');
  const designTechs = technologies.filter(tech => tech.category === 'design');

  return (
    <motion.div
      className="mt-16 py-12 bg-gradient-to-b from-slate-50 to-white rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h2 className="mb-3">Tecnologías y Herramientas</h2>
        <p className="text-slate-600">
          Experiencia trabajando con diversas tecnologías y herramientas
        </p>
      </div>

      {/* Lenguajes de Programación y Desarrollo */}
      <div className="mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Code2 className="w-5 h-5 text-slate-700" />
          <h3 className="text-slate-700">Desarrollo y Programación</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {developmentTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={tech.logoUrl} 
                alt={`${tech.name} logo`}
                className="w-12 h-12 object-contain"
              />
              <span className="text-xs text-slate-600">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Programas de Diseño */}
      <div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <Palette className="w-5 h-5 text-slate-700" />
          <h3 className="text-slate-700">Diseño y Contenidos</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {designTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={tech.logoUrl} 
                alt={`${tech.name} logo`}
                className="w-12 h-12 object-contain"
              />
              <span className="text-xs text-slate-600">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
