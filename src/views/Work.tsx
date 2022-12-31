import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const GARITAS = 'garitastj';
const INVOICES = 'invoices';
const URL_SHORTENER = 'url-shortener';

const projects = [
  {
    id: GARITAS,
    path: '/work/garitastj',
    link: 'https://garitastj.com',
    description:
      'Web application that shows the border wait times across the San Diego - Tijuana border.',
  },
  {
    id: INVOICES,
    path: '/work/invoices',
    link: 'https://develop--sergios-invoices.netlify.app',
    description:
      'Invoice system for an auto shop that helps the user creating and printing invoices.',
  },
  {
    id: URL_SHORTENER,
    path: '/work/url-shortener',
    link: 'https://urlshortenerv.netlify.app',
    description: 'URL shortener to create short URLs.',
  },
];

export const Work = () => {
  const params = useParams();
  const [hoverItem, setHoverItem] = useState('');

  const project = projects.find(({ id }) => id === params?.id);

  return (
    <div className="flex h-full">
      <div className="flex w-full items-center md:w-60">
        <ul className="space-y-5">
          {projects.map(({ id, path, description, link }) => (
            <li key={id} className="text-xl font-bold">
              <Link
                className="pointer-events-none hover:underline md:pointer-events-auto"
                to={path}
                onMouseOver={() => setHoverItem(id)}
                onMouseOut={() => setHoverItem('')}
              >
                {id}
              </Link>
              <span className="block text-base font-normal md:hidden">
                <p className=" text-gray-800">{description}</p>
                <a className="text-blue-600 hover:underline" href={link}>
                  {link}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden flex-1 items-center justify-center md:flex">
        {project === undefined ? (
          <span className={`${hoverItem === '' ? 'hidden' : 'block'}`}>
            <img
              className="max-h-[calc(100vh-15em)] border-2 border-black object-cover"
              src={`/${hoverItem}.png`}
              alt={`${hoverItem} preview`}
            />
          </span>
        ) : (
          <span>
            <img
              className="max-h-[calc(100vh-15em)] border-2 border-black object-cover"
              src={`/${project.id}.png`}
              alt={`${project.id}`}
            />
            <a className="text-blue-600 hover:underline" href={project.link}>
              {project.link}
            </a>
            <p>{project.description}</p>
          </span>
        )}
      </div>
    </div>
  );
};
