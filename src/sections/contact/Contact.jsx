import contacts from './data';
import './contact.css';

const Contact = () => {
  return (
    <section id='section'>
      {' '}
      <h2>Contact</h2>
      <p>Get in touch, shoot me a message </p>
      <div className='container contact__container' data-aos='fade-up'>
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {contact.icon}{' '}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
