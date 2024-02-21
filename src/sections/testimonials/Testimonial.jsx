import Card from '../../components/Card';

const Testimonial = ({ testimonials }) => {
  return (
    <Card className='light'>
      <p> {testimonials.quote}</p>
      <div className='testimonial__client'>
        <div className='testimonial__client-avatar'>
          <img src={testimonials.avatar} alt='Testimonial' />{' '}
        </div>
        <div className='testimonial__client-details'>
          <h6>{testimonials.name}</h6>
          <small>{testimonials.profession}</small>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
