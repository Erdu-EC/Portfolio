/**
 * Configuración centralizada de datos personales.
 * Modifica aquí para que los cambios se reflejen en el sitio.
 */

export const personal = {
    // Identidad
    fullName: 'Eduardo Castillo',
    shortName: 'Erdu-EC',
    jobTitle: 'Full Stack Developer',

    // Descripción profesional
    tagline: 'Ingeniero en Telemática y Full Stack Developer con más de 5 años de experiencia creando soluciones robustas y escalables. Especializado en .NET y TypeScript.',
    shortBio: 'Ingeniero en Telemática con más de 5 años de experiencia en desarrollo de software full stack.',

    // Contacto
    email: 'eduardocastilloh1999@gmail.com',

    // Redes sociales (URLs completas)
    social: {
        github: 'https://github.com/Erdu-EC',
        linkedin: 'https://linkedin.com/in/erdu-ec',
    },

    // Sitio web
    website: 'https://erdu.dev',

    // SEO y metadatos
    seo: {
        defaultTitle: 'Eduardo Castillo — Full Stack Developer',
        defaultDescription: 'Portafolio de Eduardo Castillo - Full Stack Developer',
        ogDescription: 'Portafolio de Eduardo Castillo - Ingeniero en Telemática y Full Stack Developer',
        twitterCard: 'summary',
    },

    // JSON-LD: habilidades para datos estructurados
    skills: [
        '.NET Core', 'C#', 'TypeScript', 'JavaScript', 'React', 'Vue.js', 'Nuxt 4',
        'PHP', 'PostgreSQL', 'SQL Server', 'MySQL', 'Tailwind CSS', 'Docker', 'OpenAPI'
    ],
} as const
