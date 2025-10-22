import React from 'react';
import Hero from '../components/sections/Hero';
import Categories from '../components/sections/Categories';
import FeaturedProduct from '../components/sections/FeaturedProduct';
import Process from '../components/sections/Process';
import PopularFlavors from '../components/sections/PopularFlavors';
import Newsletter from '../components/sections/Newsletter';
import ContactFormComponent from '../components/sections/ContactForm';
import FeedbackFormComponent from '../components/sections/FeedbackForm';
import TestimonialsComponent from '../components/sections/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProduct />
      <Process />
      <PopularFlavors />
      <TestimonialsComponent />
      <Newsletter />
      <ContactFormComponent />
      <FeedbackFormComponent />
    </>
  );
};

export default Home;
