import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import './portfolio.css';
import data from './data';
import { useState } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const categories = data.map((cat) => cat.category);
  const uniqueCat = ['all', ...new Set(categories)];
  /*Una funcion que recibe un argumento la cual filtra la data 
  para extraer las categorias que sean iguales al argumento
  y */
  const filterProjectsHandler = (category) => {
    if (category === 'all') {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id='portfolio'>
      {' '}
      <h2> Projects</h2>
      <p> Here are some of my personal projects </p>
      <div className='container portfolio__container'>
        <ProjectsCategories
          categories={uniqueCat}
          onfilterHandler={filterProjectsHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
