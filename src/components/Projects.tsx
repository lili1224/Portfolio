import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { projects } from '../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="mb-4">Mis Proyectos</h1>
        <p className="text-slate-600">
          Explora mi portfolio de proyectos de desarrollo de software
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 p-6">
              <Link to={`/proyectos/${project.id}`}>
                <h3 className="mb-3 hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="text-slate-600">
                {project.description}
              </p>
            </CardContent>
            
            <CardFooter className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
