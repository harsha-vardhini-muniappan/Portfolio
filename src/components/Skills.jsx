import React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
} from 'react-icons/si'

const Skills = () => {
  const allSkills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'C', icon: <SiJavascript /> },
    { name: 'C#', icon: <SiTypescript /> },
    { name: 'Data Analytics', icon: <FaDatabase /> },
    { name: 'Data Visualization', icon: <SiPostgresql /> },
    { name: 'Power BI', icon: <FaNodeJs /> },
    { name: 'OpenCV', icon: <FaPython /> },
    { name: 'VS Studio', icon: <FaGitAlt /> },
    { name: 'Cursor AI', icon: <SiJavascript /> },
    { name: 'Proteus', icon: <FaDocker /> },
    { name: 'KiCad', icon: <SiMongodb /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Git', icon: <FaGitAlt /> },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-darkGray to-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto shadow-lg shadow-primary/50"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with regularly
          </p>
        </motion.div>

        {/* Scrolling Skills Container */}
        <div className="relative overflow-hidden py-8">
          {/* First Row - Scrolling Left to Right */}
          <motion.div
            className="flex space-x-8 mb-8"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-black/60 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary hover:scale-110 transition-all shadow-lg shadow-primary/10 min-w-[150px]"
                whileHover={{ y: -10 }}
              >
                <div className="text-5xl text-primary mb-3">
                  {skill.icon}
                </div>
                <p className="text-white font-medium text-center">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - Scrolling Right to Left */}
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-black/60 backdrop-blur-sm border border-secondary/20 rounded-xl hover:border-secondary hover:scale-110 transition-all shadow-lg shadow-secondary/10 min-w-[150px]"
                whileHover={{ y: -10 }}
              >
                <div className="text-5xl text-secondary mb-3">
                  {skill.icon}
                </div>
                <p className="text-white font-medium text-center">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

