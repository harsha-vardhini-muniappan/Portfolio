import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-darkBlue to-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [-50, 50, -50],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Animated lines */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Welcome text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold tracking-wider backdrop-blur-sm">
              WELCOME TO MY PORTFOLIO
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <motion.span 
                className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Harsha Vardhini
              </motion.span>
            </h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              <motion.span 
                className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Muniappan
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-primary"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.8 }}
              ></motion.div>
              <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold">
                Electronics and Communication Engineer
              </p>
              <motion.div
                className="h-px w-12 bg-gradient-to-l from-transparent to-primary"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.8 }}
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              A passionate{' '}
              <span className="text-primary font-semibold">ECE student</span> and{' '}
              <span className="text-secondary font-semibold">tech enthusiast</span>. 
              I enjoy building innovative projects that combine hardware and software, solving real-world problems with creativity and precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { href: "https://github.com", icon: FaGithub, label: "GitHub" },
              { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
              { href: "mailto:harshavardhinimuniappan737@gmail.com", icon: FaEnvelope, label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="group relative p-4 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary rounded-xl transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <social.icon className="text-white group-hover:text-primary text-2xl transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.a
              href="#projects"
              className="group relative px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.a>
            <motion.a
              href="#contact"
              className="group relative px-10 py-4 bg-transparent border-2 border-primary text-white font-semibold rounded-full hover:bg-primary/10 backdrop-blur-sm shadow-xl"
              whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 group-hover:text-primary transition-colors">Get In Touch</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-sm text-gray-400 group-hover:text-primary transition-colors">Scroll Down</span>
        <div className="w-8 h-12 border-2 border-primary/50 group-hover:border-primary rounded-full flex justify-center p-2 transition-colors">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          ></motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <FaChevronDown className="text-primary text-xl" />
        </motion.div>
      </motion.a>
    </section>
  )
}

export default Hero

