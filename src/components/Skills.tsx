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
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['TypeScript', 'Node.js', 'Git', 'Tailwind CSS', 'Vite', 'REST APIs'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-all duration-300 border border-pink-200 hover:border-pink-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;