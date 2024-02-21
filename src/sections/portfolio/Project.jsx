import Card from '../../components/Card';

const Project = ({ projects }) => {
  return (
    <Card className='portfolio__project'>
      <div className='portfolio__project-image'>
        <img alt='Project' />
      </div>{' '}
      <h4>{projects.title}</h4>
      <p>{projects.desc}</p>
      <div className='portfolio__project-cta'>
        <a
          href={projects.demo}
          className='btn sm'
          target='_blank'
          rel='noopner noreferrer'
        >
          Demo{' '}
        </a>
        <a
          href={projects.github}
          className='btn sm primary'
          target='_blank'
          rel='noopner noreferrer'
        >
          GitHub{' '}
        </a>
      </div>{' '}
    </Card>
  );
};

export default Project;
