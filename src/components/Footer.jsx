import React from 'react'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-primary/20 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-darkBlue/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Harsha Vardhini Muniappan</h3>
            <p className="text-gray-400">
              Electronics and Communication Engineer passionate about leveraging technology 
              to solve real-world challenges through innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 border border-primary/30 hover:bg-primary rounded-full transition-all transform hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 border border-primary/30 hover:bg-primary rounded-full transition-all transform hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} Harsha Vardhini Muniappan. Made with</span>
            <FaHeart className="text-primary animate-pulse" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

