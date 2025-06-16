
import { ChevronDown, Download } from 'lucide-react';
import { Link } from 'react-router-dom';


const Hero = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Aseel Khalid resume.pdf';
    link.download = 'Aseel_Khalid_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-pink-900 via-rose-900 to-purple-900"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">

            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              Your Name
            </span>

          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-300">
            Front End Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            I create beautiful, responsive web applications with modern
            technologies. Passionate about clean code, user experience, and
            bringing ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <button onClick={handleDownloadCV} className="focus:outline-none">
              <div className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                <Download className="mr-2" size={20} />
                Download CV
              </div>

            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
};

export default Hero;
