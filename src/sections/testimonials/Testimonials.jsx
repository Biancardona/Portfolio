import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
//Porque tiene export default en data se puede nombrar como sea
import testimonials from './data';
import Testimonial from './Testimonial';
import './testimonials.css';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Testimonials</h2>
      <p> Some testimonials from some of my clients</p>
      <div className='container'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: {
              slidesPerView: 2,
            },
            1025: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className='mySwiper'
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonials={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>{' '}
      </div>
    </section>
  );
};

export default Testimonials;
