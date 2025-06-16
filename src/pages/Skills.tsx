import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: '🌐',
      level: 95,
      color: 'from-pink-400 to-rose-500'
    },
    {
      name: 'CSS3',
      icon: '🎨',
      level: 90,
      color: 'from-rose-400 to-pink-600'
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      level: 88,
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'React.js',
      icon: '⚛️',
      level: 92,
      color: 'from-rose-400 to-pink-500'
    },
    {
      name: 'TypeScript',
      icon: '📘',
      level: 85,
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Tailwind CSS',
      icon: '🎯',
      level: 90,
      color: 'from-pink-400 to-rose-600'
    }
  ];

  const additionalSkills = [
    'Node.js', 'Git & GitHub', 'Responsive Design', 'REST APIs', 
    'UI/UX Design', 'Performance Optimization', 'Testing', 'Vite'
  ];

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Main Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-pink-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {skill.name}
                </h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-pink-100 rounded-full h-3 mb-2">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-all duration-300 border border-pink-200 hover:border-pink-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-pink-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Frontend Development</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• Responsive Web Design</li>
              <li>• Modern JavaScript (ES6+)</li>
              <li>• React.js & Hooks</li>
              <li>• CSS Frameworks</li>
              <li>• Cross-browser Compatibility</li>
            </ul>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-pink-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Tools & Workflow</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• Git Version Control</li>
              <li>• Package Managers (npm)</li>
              <li>• Build Tools (Vite)</li>
              <li>• Code Editors (VS Code)</li>
              <li>• Browser DevTools</li>
            </ul>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-pink-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Design & UX</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• UI/UX Principles</li>
              <li>• Mobile-First Design</li>
              <li>• Accessibility (a11y)</li>
              <li>• Performance Optimization</li>
              <li>• User Experience Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;