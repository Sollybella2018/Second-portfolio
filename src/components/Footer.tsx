
import { Mail, Phone, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-pink-900 to-rose-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <div className="p-2 bg-pink-600 rounded-lg group-hover:bg-pink-700 transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <span>your.email@example.com</span>
              </a>
              
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <div className="p-2 bg-rose-600 rounded-lg group-hover:bg-rose-700 transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-pink-300 transition-colors duration-300 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-600 rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-rose-500 rounded-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                Feel free to reach out if you want to collaborate on a project, 
                need help with development, or just want to connect!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-pink-400" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;