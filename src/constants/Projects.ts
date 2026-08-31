export interface Project {
  title: string;
  subtitle?: string;
  stack: string[];
  description: string;
  link?: {
    href: string;
    label: string;
  };
}

export const projects: Project[] = [
  {
    title: 'Trading Desktop Platform',
    subtitle: 'Capital markets client - current',
    stack: ['React', 'TypeScript', 'OpenFin', 'Storybook', 'Redux Toolkit'],
    description:
      'Design system and theming architecture for a multi-window desktop trading platform. Built the colour token system across three themes, a three-tier UI density mode, and the shared error-handling layer. Maintain the component library as a versioned npm package consumed by two applications.',
  },
  {
    title: 'Digimed',
    subtitle: 'Healthcare',
    stack: ['React Native', 'Expo', 'TypeScript', 'Redux'],
    description:
      'Cross-platform patient app shipped to web, iOS and Android. Video consultations over OpenTok, appointment booking, and clinic mapping.',
    link: {
      href: 'https://digimed.health/',
      label: 'digimed.health',
    },
  },
  {
    title: 'Malta Transfer Kiosk',
    subtitle: 'Malta International Airport, 2024',
    stack: ['Vue 3', 'TypeScript', 'Tailwind', 'Pinia'],
    description:
      'Sole frontend developer on a self-service ticketing kiosk deployed at the airport. Touch-first interface built from scratch for unattended public use.',
    link: {
      href: 'https://maltatransfer.com/',
      label: 'maltatransfer.com',
    },
  },
  {
    title: 'Elemental Boi VR',
    subtitle: 'Side project',
    stack: ['Unity', 'C#', 'Blender'],
    description:
      'A VR combat game where you wield the earth element against opponents. Built solo in my spare time, including the 3D assets.',
    link: {
      href: 'https://grebull.itch.io/elemental-boi-demo',
      label: 'Play the demo',
    },
  },
];