import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Innovator',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces with attention to detail.',
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and performance across all devices.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-darkBlue to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto shadow-lg shadow-primary/50"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl shadow-2xl shadow-primary/20 flex items-center justify-center relative overflow-hidden border border-primary/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent)]"></div>
              <div className="text-white text-6xl font-bold relative z-10">HVM</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Aspiring Electronics and Communication Engineer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Currently pursuing B.E. in Electronics and Communication Engineering at Meenakshi Sundararajan 
              Engineering College. I have a strong foundation in programming, data analytics, 
              and embedded systems, with hands-on experience from multiple internships at RAILTEL, 
              Southern Railways, and NSIC.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm passionate about leveraging technology to solve real-world challenges, from ocean cleanup 
              solutions to smart traffic management systems. I actively participate in hackathons and love 
              building innovative projects that make a difference.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/50 transition-all transform hover:scale-105"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-black/40 backdrop-blur-sm border border-primary/20 rounded-xl hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="inline-block p-4 bg-gradient-to-br from-primary to-secondary text-white rounded-full mb-4 shadow-lg shadow-primary/30">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

