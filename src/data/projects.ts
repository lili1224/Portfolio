export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  links: Array<{
    title: string;
    url: string;
  }>;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Plataforma E-commerce',
    description: 'Sistema completo de comercio electrónico con gestión de productos, carrito de compras y pasarela de pago.',
    fullDescription: 'Este proyecto consiste en una plataforma de comercio electrónico completamente funcional desarrollada con tecnologías modernas. Incluye un sistema de autenticación de usuarios, gestión de productos con categorías y filtros avanzados, carrito de compras persistente, integración con pasarelas de pago, panel de administración para gestionar pedidos y productos, y un sistema de notificaciones por correo electrónico. La aplicación está optimizada para dispositivos móviles y de escritorio, garantizando una experiencia de usuario fluida en todas las plataformas.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
    links: [
      { title: 'Ver en GitHub', url: 'https://github.com' },
      { title: 'Demo en vivo', url: 'https://example.com' },
      { title: 'Documentación', url: 'https://example.com/docs' },
    ],
  },
  {
    id: 'task-management',
    title: 'Gestor de Tareas Colaborativo',
    description: 'Aplicación web para gestión de tareas en equipo con funcionalidades de colaboración en tiempo real.',
    fullDescription: 'Aplicación de gestión de proyectos y tareas diseñada para equipos de desarrollo. Permite crear proyectos, asignar tareas a miembros del equipo, establecer prioridades y fechas límite, y realizar seguimiento del progreso en tiempo real. Incluye características como tableros Kanban, gráficos de progreso, sistema de comentarios y notificaciones, integración con calendarios, y la posibilidad de adjuntar archivos. La sincronización en tiempo real se logra mediante WebSockets, permitiendo que todos los miembros del equipo vean actualizaciones instantáneas.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    technologies: ['Vue.js', 'JavaScript', 'Express', 'MongoDB', 'Socket.io', 'Redis'],
    links: [
      { title: 'Repositorio GitHub', url: 'https://github.com' },
      { title: 'Caso de estudio', url: 'https://example.com/case-study' },
    ],
  },
  {
    id: 'mobile-fitness',
    title: 'App de Fitness y Nutrición',
    description: 'Aplicación móvil para seguimiento de ejercicios, planes de entrenamiento y registro de alimentación.',
    fullDescription: 'Aplicación móvil multiplataforma para ayudar a los usuarios a alcanzar sus objetivos de fitness. Incluye un sistema de seguimiento de ejercicios con animaciones y videos demostrativos, creador de planes de entrenamiento personalizados, registro de calorías y macronutrientes, integración con dispositivos wearables para sincronizar datos de actividad, gráficos de progreso y estadísticas detalladas, y un sistema de logros y recompensas para mantener la motivación. La aplicación utiliza aprendizaje automático para ofrecer recomendaciones personalizadas basadas en el historial y objetivos del usuario.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'TensorFlow', 'Redux'],
    links: [
      { title: 'Ver código', url: 'https://github.com' },
      { title: 'Play Store', url: 'https://play.google.com' },
      { title: 'App Store', url: 'https://apps.apple.com' },
    ],
  },
  {
    id: 'analytics-dashboard',
    title: 'Dashboard de Analíticas',
    description: 'Panel de control interactivo para visualización de datos y métricas empresariales en tiempo real.',
    fullDescription: 'Dashboard empresarial avanzado para la visualización y análisis de datos en tiempo real. Proporciona una vista unificada de métricas clave del negocio mediante gráficos interactivos, tablas dinámicas y widgets personalizables. Los usuarios pueden crear informes personalizados, establecer alertas basadas en umbrales de datos, exportar datos en múltiples formatos, y compartir dashboards con miembros del equipo. La plataforma se conecta a múltiples fuentes de datos mediante APIs y ofrece capacidades de ETL para transformar y consolidar información de diferentes sistemas.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['Angular', 'TypeScript', 'D3.js', 'Python', 'Django', 'Docker'],
    links: [
      { title: 'GitHub', url: 'https://github.com' },
      { title: 'Documentación técnica', url: 'https://example.com/docs' },
    ],
  },
  {
    id: 'chatbot-ai',
    title: 'Chatbot con IA',
    description: 'Asistente virtual inteligente para atención al cliente utilizando procesamiento de lenguaje natural.',
    fullDescription: 'Sistema de chatbot avanzado que utiliza inteligencia artificial y procesamiento de lenguaje natural para proporcionar atención al cliente automatizada. El bot puede comprender preguntas en lenguaje natural, proporcionar respuestas contextuales, escalar conversaciones a agentes humanos cuando es necesario, y aprender de interacciones pasadas para mejorar sus respuestas. Incluye un panel de administración para entrenar el modelo con nuevas preguntas y respuestas, analizar conversaciones, y generar informes sobre las consultas más frecuentes. Se integra fácilmente con plataformas web, aplicaciones móviles y canales de mensajería populares.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'NLP', 'AWS'],
    links: [
      { title: 'Código fuente', url: 'https://github.com' },
      { title: 'Demo interactiva', url: 'https://example.com/demo' },
      { title: 'Paper técnico', url: 'https://example.com/paper' },
    ],
  },
  {
    id: 'booking-system',
    title: 'Sistema de Reservas',
    description: 'Plataforma de reservas online para servicios profesionales con calendario integrado y pagos.',
    fullDescription: 'Sistema completo de gestión de reservas diseñado para profesionales y empresas de servicios. Permite a los clientes buscar disponibilidad en tiempo real, hacer reservas online, recibir confirmaciones automáticas por correo electrónico y SMS, y gestionar sus citas desde un portal personal. Los proveedores de servicios tienen acceso a un calendario completo con vista de todas las reservas, pueden establecer horarios de disponibilidad, gestionar servicios y precios, procesar pagos mediante diferentes pasarelas, y generar reportes de ingresos. El sistema incluye recordatorios automáticos, políticas de cancelación personalizables, y sincronización con calendarios externos como Google Calendar.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'SendGrid'],
    links: [
      { title: 'Repositorio', url: 'https://github.com' },
      { title: 'Sitio web', url: 'https://example.com' },
    ],
  },
];
