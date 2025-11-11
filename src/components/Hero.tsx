import { ChevronDown } from 'lucide-react';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            KAZI TAUHID RANA
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
          C/C++ & DSA Enthusiast | Aspiring Software Developer | Competitive Programmer | Problem Solver & Creative Builder
        </p>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed pt-4">
          Driven by a passion for logic, algorithms, and building efficient software. I transform complex problems into elegant solutions through clean code and innovative thinking.
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-8 py-3 border-2 border-purple-500 text-purple-300 rounded-full font-semibold hover:bg-purple-500/10 hover:scale-105 transition-all duration-300"
          >
            About Me
          </a>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-400 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

export default Hero;
