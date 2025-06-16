import React from 'react';
import { Code, Coffee, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Aseel"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Hello! I'm Aseel Khalid
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Front-End Developer with a strong background in creating dynamic and responsive web applications. 
              With expertise in modern technologies like React, JavaScript, and CSS, I love bringing creative ideas to life through code.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in web development started with a Bachelor's degree in Management Information Systems from Al Ahlia Amman University. 
              Since then, I've been continuously learning and evolving with the ever-changing landscape of web technologies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-pink-100">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-pink-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Code</h3>
            <p className="text-gray-600">
              I believe in writing clean, maintainable, and efficient code that stands the test of time.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-pink-100">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-rose-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              Always exploring new technologies and approaches to solve problems creatively.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-pink-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Centric</h3>
            <p className="text-gray-600">
              Designing with the user in mind to create intuitive and delightful experiences.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-pink-100">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="text-pink-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
            <p className="text-gray-600">
              Staying updated with the latest trends and technologies in the development world.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">My Journey</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-pink-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">FreeLancer Front End Developer</h3>
                <p className="text-pink-600 font-medium">2022 - 2024</p>
                <p className="text-gray-600 mt-2">
                  Developed custom front-end solutions for diverse clients, creating responsive and visually appealing web interfaces.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-rose-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Substitute IT Teacher</h3>
                <p className="text-rose-600 font-medium">ACS (2021 - 2024)</p>
                <p className="text-gray-600 mt-2">
                  Managed classroom technology and digital tools, creating tech-enhanced learning environments.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Front-End Developer and IT Specialist</h3>
                <p className="text-purple-600 font-medium">Bahwan Company (2012 - 2014)</p>
                <p className="text-gray-600 mt-2">
                  Designed and developed the company website using HTML, CSS, and JavaScript, significantly enhancing online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;