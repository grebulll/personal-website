import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="pt-20 font-inter">
      <div className="flex flex-col gap-3 items-center text-gunmetal-black dark:text-salt-white">
        <div className="flex flex-row gap-2">
          <a
            href="https://www.linkedin.com/in/gabriel-cini-b36687201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={30}
              className="hover:text-neon-blue dark:hover:text-mint-green transition-colors"
            />
          </a>
          <a
            href="https://github.com/gab-cin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={30}
              className="hover:text-neon-blue dark:hover:text-mint-green transition-colors"
            />
          </a>
        </div>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Gabriel Cini. All rights reserved.
        </p>
        <div>
          <p className="text-xs text-center">
            Built with{' '}
            <a className="font-bold" href="https://react.dev/" target="_blank">
              React
            </a>{' '}
            +{' '}
            <a className="font-bold" href="https://vite.dev/" target="_blank">
              Vite
            </a>
            ,{' '}
            <a className="font-bold" href="https://gsap.com/" target="_blank">
              GSAP
            </a>
            ,{' '}
            <a
              className="font-bold"
              href="https://tailwindcss.com/"
              target="_blank"
            >
              Tailwind CSS
            </a>
            ,{' '}
            <a
              className="font-bold"
              href="https://react-hook-form.com/"
              target="_blank"
            >
              React Hook Form
            </a>
            ,{' '}
            <a className="font-bold" href="https://zod.dev/" target="_blank">
              Zod
            </a>
            ,{' '}
            <a
              className="font-bold"
              href="https://www.blender.org/"
              target="_blank"
            >
              Blender
            </a>{' '}
            (for the 3d Model),{' '}
            <a
              className="font-bold"
              href="https://www.typescriptlang.org/"
              target="_blank"
            >
              Typescript
            </a>
            , deployed using{' '}
            <a className="font-bold" href="https://vercel.com/" target="_blank">
              Vercel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
