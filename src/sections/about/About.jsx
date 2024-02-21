import AboutImage from '../../assets/about2.jpg';
import CV from '../../assets/BC_CV.pdf';
import { FaFileDownload } from 'react-icons/fa';
import Card from '../../components/Card';
import data from './data';
import './about.css';

const About = () => {
  return (
    <section id='about' data-aos='fade-in'>
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait'>
            <img src={AboutImage} alt='About ' />
          </div>
        </div>
        <div className='about__right'>
          <h2>About Me</h2>
          <div className='about__cards'>
            {data.map((item) => (
              <Card key={item.id} className='about__card'>
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            {' '}
            During my 3 years of professional experience as a Front-End
            Developer, I have expertise in crafting websites and desktop
            applications using a versatile stack including, ES6, HTML5, ReactJS,
            NodeJS, JSON & RESTful APIs, MongoDB, etc. My journey in software
            development has not only seen improvement in my technical prowess
            but also significant growth in my soft skills, making me an
            effective communicator, problem solver, and adaptable professional
            in addition to my technical capabilities.
          </p>
          <p>
            I'm deeply passionate about the intersection of self-care and
            fitness. My enthusiasm extends to my blog, where I meticulously
            craft articles focused on nutrition. It's incredibly gratifying to
            seamlessly integrate both my roles as a software developer and my
            commitment to self-care. This synergy allows me to explore
            innovative ways to harmonize technology and well-being, creating a
            unique and enriching experience for myself.
          </p>
          <a href={CV} download className='btn primary'>
            {' '}
            Download CV <FaFileDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
