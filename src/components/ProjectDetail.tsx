import { useParams, Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4">Proyecto no encontrado</h1>
        <Link to="/proyectos">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a proyectos
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link to="/proyectos" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver a proyectos
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="mb-6">{project.title}</h1>
          
          <div className="mb-8 overflow-hidden rounded-lg">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>

          <div className="prose max-w-none mb-8">
            <h2>Descripción del Proyecto</h2>
            <p>{project.fullDescription}</p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4">Enlaces y Recursos</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.title}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <Card className="p-6 sticky top-24">
            <h3 className="mb-4">Tecnologías Empleadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
