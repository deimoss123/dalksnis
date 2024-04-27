export const categories = {
  languages: 'Languages',
  technologies: 'Technologies/Tools',
  frameworks: 'Frameworks',
  libraries: 'Libraries',
  databases: 'Databases',
};

export type Skill = {
  name: string;
  iconName: string;
  category: keyof typeof categories;
  year?: number;
  learning?: boolean;
};

export const skillList = {
  // languages
  html: {
    name: 'HTML',
    iconName: 'devicon:html5',
    category: 'languages',
    year: 2020,
  },
  css: {
    name: 'CSS',
    iconName: 'devicon:css3',
    category: 'languages',
    year: 2020,
  },
  js: {
    name: 'Javascript',
    iconName: 'devicon:javascript',
    category: 'languages',
    year: 2020,
  },
  ts: {
    name: 'Typescript',
    iconName: 'devicon:typescript',
    category: 'languages',
    year: 2021,
  },
  go: {
    name: 'Golang',
    iconName: 'logos:go',
    category: 'languages',
    year: 2023,
  },
  python: {
    name: 'Python',
    iconName: 'logos:python',
    category: 'languages',
  },
  cpp: {
    name: 'C++',
    iconName: 'vscode-icons:file-type-cpp3',
    category: 'languages',
  },
  java: {
    name: 'Java',
    iconName: 'logos:java',
    category: 'languages',
  },
  php: {
    name: 'PHP',
    iconName: 'logos:php',
    category: 'languages',
  },
  bash: {
    name: 'Bash',
    iconName: 'logos:bash-icon',
    category: 'languages',
  },

  // technologies/tools
  node: {
    name: 'NodeJS',
    iconName: 'logos:nodejs-icon',
    category: 'technologies',
    year: 2020,
  },
  git: {
    name: 'Git',
    iconName: 'devicon:git',
    category: 'technologies',
    year: 2021,
  },
  linux: {
    name: 'Linux',
    iconName: 'devicon:linux',
    category: 'technologies',
    year: 2022,
  },
  docker: {
    name: 'Docker',
    iconName: 'logos:docker-icon',
    category: 'technologies',
    year: 2022,
  },
  nginx: {
    name: 'Nginx',
    iconName: 'logos:nginx',
    category: 'technologies',
  },

  // libraries
  tailwind: {
    name: 'Tailwind CSS',
    iconName: 'devicon:tailwindcss',
    category: 'libraries',
    year: 2022,
  },
  djs: {
    name: 'Discord.js',
    iconName: 'devicon:discordjs',
    category: 'libraries',
    year: 2021,
  },
  fastify: {
    name: 'Fastify',
    iconName: 'devicon-plain:fastify',
    category: 'libraries',
  },
  prisma: {
    name: 'Prisma',
    iconName: 'devicon:prisma',
    category: 'libraries',
  },

  // frameworks
  react: {
    name: 'React',
    iconName: 'devicon:react',
    category: 'frameworks',
    year: 2021,
  },
  nextjs: {
    name: 'Next.js',
    iconName: 'devicon:nextjs',
    category: 'frameworks',
    year: 2022,
  },
  astro: {
    name: 'Astro',
    iconName: 'devicon:astro',
    category: 'frameworks',
    year: 2023,
  },
  vue: {
    name: 'Vue',
    iconName: 'logos:vue',
    category: 'frameworks',
  },

  // databases
  mongo: {
    name: 'MongoDB',
    iconName: 'devicon:mongodb',
    category: 'databases',
    year: 2021,
  },
  postgres: {
    name: 'PostgreSQL',
    iconName: 'devicon:postgresql',
    category: 'databases',
    year: 2022,
  },
  redis: {
    name: 'Redis',
    iconName: 'devicon:redis',
    category: 'databases',
    year: 2022,
  },
  mysql: {
    name: 'MySQL',
    iconName: 'devicon:mysql',
    category: 'databases',
  },
  oraclesql: {
    name: 'Oracle SQL',
    iconName: 'logos:oracle',
    category: 'databases',
  },
} satisfies Record<string, Skill>;

export type SkillKey = keyof typeof skillList;
