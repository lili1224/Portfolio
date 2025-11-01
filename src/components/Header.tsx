import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="hover:opacity-70 transition-opacity">
          <h1>Lucía Quesada Moreno</h1>
        </Link>
        
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="hover:opacity-70 transition-opacity">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/proyectos" className="hover:opacity-70 transition-opacity">
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:opacity-70 transition-opacity">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
