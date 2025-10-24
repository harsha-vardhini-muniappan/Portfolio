import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'Signal and Communication Internship',
      organization: 'Indian Railways - Southern Railways, Egmore',
      duration: 'Jan 2025 - Apr 2025',
      description: 'Working on signal and telecommunication systems in Indian Railways, gaining hands-on experience with telephone exchange and KavachITCAS at NSIC, Ekkattuthangal.',
      icon: <FaBriefcase />,
    },
    {
      type: 'internship',
      title: 'Embedded Systems with IOT',
      organization: 'Indian Railways - NSIC, Ekkattuthangal',
      duration: 'Jul 2025 - Aug 2025',
      description: 'Worked on embedded system projects with IoT integration, focusing on railway communication systems.',
      icon: <FaBriefcase />,
    },
    {
      type: 'internship',
      title: 'Fundamentals of Power System and Telecommunication Networks',
      organization: 'RAILTEL, Egmore',
      duration: 'Mar 2024',
      description: 'Gained foundational knowledge in power systems and telecommunication network infrastructure.',
      icon: <FaBriefcase />,
    },
  ]

  const education = [
    {
      degree: 'B.E. Electronics and Communication Engineering',
      institution: 'Meenakshi Sundararajan Engineering College',
      duration: '2022 - 2026 (Currently Pursuing)',
      icon: <FaGraduationCap />,
    },
    {
      degree: 'Higher Secondary Education (12th Grade)',
      institution: 'Shree Anand Jain Vidyalaya Matric Hr Sec School',
      duration: 'Completed: May 2022',
      icon: <FaGraduationCap />,
    },
    {
      degree: 'Secondary Education (10th Grade)',
      institution: 'Shree Anand Jain Vidyalaya Matric Hr Sec School',
      duration: 'Completed: March 2020',
      icon: <FaGraduationCap />,
    },
  ]

  const certifications = [
    {
      title: 'C# Programming',
      issuer: 'Lernx',
      date: 'February 2024',
      icon: <FaCertificate />,
    },
    {
      title: 'Power BI',
      issuer: 'Alison',
      date: 'May 2025',
      icon: <FaCertificate />,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black via-darkBlue to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
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
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto shadow-lg shadow-primary/50"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Internships */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaBriefcase className="mr-3 text-primary" />
              Internships
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-primary last:pb-0"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm border border-primary/20 p-4 rounded-lg hover:border-primary/40 transition-all">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {exp.organization}
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      {exp.duration}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaGraduationCap className="mr-3 text-secondary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-secondary last:pb-0"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/50">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm border border-secondary/20 p-4 rounded-lg hover:border-secondary/40 transition-all">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-secondary font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-400">
                      {edu.duration}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <FaCertificate className="mr-3 text-accent" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl text-white text-center hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:scale-105 border border-primary/30"
              >
                <div className="text-4xl mb-3 flex justify-center">{cert.icon}</div>
                <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                <p className="text-sm opacity-90 mb-1">{cert.issuer}</p>
                <p className="text-xs opacity-75">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

