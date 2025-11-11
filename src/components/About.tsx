import { Sparkles, Target, Lightbulb } from 'lucide-react';

function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 shadow-2xl">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-purple-400 mt-1">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Professional Summary</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate competitive programmer and aspiring software developer with a deep curiosity for optimization and logical problem-solving. My journey in computer science is driven by the thrill of transforming complex challenges into elegant, efficient solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-purple-400 mt-1">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">What Drives Me</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every line of code I write is a step toward mastery. I believe in clean code design, rigorous testing, and continuous learning. My dedication to competitive programming has sharpened my ability to think algorithmically and approach problems from multiple angles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-purple-400 mt-1">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Philosophy</h3>
                <p className="text-gray-300 leading-relaxed">
                  I view programming as both an art and a science. It's about finding the perfect balance between performance and readability, between innovation and practicality. Through competitive programming, I've learned that the best solutions often come from understanding the fundamentals deeply and applying them creatively.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  60+
                </div>
                <div className="text-gray-400 text-sm">Problems Solved</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  0+
                </div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-gray-400 text-sm">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
