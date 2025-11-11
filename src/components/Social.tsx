import { Linkedin, Github, Facebook, Twitter, Instagram } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: <Linkedin size={28} />,
    url: 'https://linkedin.com/in/tauhid-rana-2b4b6215b',
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    icon: <Github size={28} />,
    url: 'https://github.com/tauhidrana',
    color: 'hover:text-gray-400',
  },
  {
    name: 'Facebook',
    icon: <Facebook size={28} />,
    url: 'https://facebook.com/tauhid.rana.00',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Twitter',
    icon: <Twitter size={28} />,
    url: 'https://x.com/tauhid_ran83983',
    color: 'hover:text-sky-500',
  },
  {
    name: 'Instagram',
    icon: <Instagram size={28} />,
    url: 'https://instagram.com/tauhid.rana.52',
    color: 'hover:text-pink-500',
  },
];

function Social() {
  return (
    <section id="social" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about algorithms!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 ${social.color}`}
              aria-label={social.name}
            >
              <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:tauhidrana00@gmail.com"
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Social;
