import './faqs.css';
import FAQS from './data';
import Faq from './Faq';

const Faqs = () => {
  return (
    <section id='faqs'>
      {' '}
      <h2>Faqs</h2>
      <p>HEre are some aditional information about me</p>
      <div className='container faqs__container' data-aos='fade-in'>
        {FAQS.map((faqs) => (
          <Faq key={faqs.id} faq={faqs}></Faq>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
