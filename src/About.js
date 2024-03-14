import React from 'react';
import aboutPic from './assets/about.jpg';

function About() {
  return (
    <div className="bg-[#00300] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="h-auto lg:h-full md:h-full flex items-center">
            <img className="w-full rounded-lg shadow-lg" src={aboutPic} alt="About Us" />
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00df9a] mb-8">About Us</h1>
          <div className="text-gray-200 mb-8">
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-lg mb-6">
              At Data Insights, we're passionate about helping businesses thrive through data analytics. Our mission is to empower organizations of all sizes to make informed decisions by providing them with powerful data analytics tools and insights.
            </p>
            <p className="text-lg mb-6">
              With years of experience in the field, our team of data scientists and analysts is dedicated to delivering top-notch solutions tailored to the unique needs of each client. Whether you're a small startup or a large enterprise, we're here to support you on your journey to success.
            </p>
          </div>
          <div className="text-gray-200">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission at Data Insights is simple: to democratize data analytics and make it accessible to everyone. We believe that data-driven decision-making is the key to unlocking growth and innovation in today's competitive landscape. By providing affordable plans and cutting-edge analytics tools, we aim to level the playing field and empower businesses of all sizes to thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
