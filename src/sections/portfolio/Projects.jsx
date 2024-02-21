import Project from './Project';
import './portfolio.css';

const Projects = ({ projects }) => {
  return (
    <div className='portfolio__projects' data-aos='fade-in'>
      {projects.map((project) => (
        <Project key={project.id} projects={project} />
      ))}
    </div>
  );
};

export default Projects;
