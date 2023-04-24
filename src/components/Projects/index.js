import React, { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import cryptoverse from '../../assets/images/cryptoverse.png';
import fundmilo from '../../assets/images/fundmilo.png';
import './index.scss';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const projects = [
    {
      title: 'CRYPTOVERSE',
      imageUrl: cryptoverse,
      url: 'https://cryptoverse-alpha.vercel.app/',
    },
    {
      title: 'FUNDMILO',
      imageUrl: fundmilo,
      url: 'https://fundmilo-alpha.vercel.app/',
    },
  ];

  return (
    <>
      <div className="container about-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="projects-list">
            {projects.map((project, index) => (
              <a href={project.url} target="_blank" rel="noopener noreferrer" key={index}>
                <div className="project-card">
                  <img src={project.imageUrl} alt={project.title} />
                  <h2>{project.title}</h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
