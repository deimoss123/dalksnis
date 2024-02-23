const skillList = {
  html: {
    name: 'HTML',
    iconName: 'devicon:html5',
  },
  css: {
    name: 'CSS',
    iconName: 'devicon:css3',
  },
  js: {
    name: 'Javascript',
    iconName: 'devicon:javascript',
  },
  ts: {
    name: 'Typescript',
    iconName: 'devicon:typescript',
  },
  node: {
    name: 'NodeJS',
    iconName: 'devicon:nodejs',
  },
  react: {
    name: 'React',
    iconName: 'devicon:react',
  },
  mongo: {
    name: 'MongoDB',
    iconName: 'devicon:mongodb',
  },
  postgres: {
    name: 'PostgreSQL',
    iconName: 'devicon:postgresql',
  },
  docker: {
    name: 'Docker',
    iconName: 'logos:docker-icon',
  },
  tailwind: {
    name: 'Tailwind CSS',
    iconName: 'devicon:tailwindcss',
  },
} satisfies Record<string, { name: string; iconName: string }>;

export type Skill = keyof typeof skillList;

export default skillList;
