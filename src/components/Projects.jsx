import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Briny Deep - Ocean Cleanup(ideation phase)',
      description:
        'Innovative technology-driven solution for ocean cleanup presented at EDII-TN Hackathon. A non-invasive biomedical device to diagnose the presence of disease using salivary biomarkers.',
      tags: ['IoT', 'Environmental Tech', 'Hackathon Winner'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Phyalin Analysis - Biomedical Diagnostic(ideation phase)',
      description:
        'A non-invasive biomedical device designed to diagnose the presence of diseases using salivary biomarkers, offering a painless alternative to traditional diagnostic methods.',
      tags: ['Biomedical', 'IoT', 'Healthcare'],
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'GestureSense - Sign Language Detector',
      description:
        'Real-time sign language detection system using computer vision. Built with OpenCV, MediaPipe, Python, and TensorFlow to bridge communication gaps.',
      tags: ['OpenCV', 'MediaPipe', 'Python', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Smart Traffic Management System',
      description:
        'IoT-based traffic management system developed using Blynk console. Implements intelligent traffic congestion solutions to optimize traffic flow.',
      tags: ['Blynk', 'IoT', 'Smart City', 'Arduino'],
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Gesture Music Player',
      description:
        'Innovative music player controlled by hand gestures using MediaPipe and Pygame. Enables touchless music control through computer vision technology.',
      tags: ['MediaPipe', 'Pygame', 'Python', 'OpenCV'],
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Traffic Congestion Management',
      description:
        'System designed to help reduce traffic congestion by suggesting alternative routes to drivers. Uses real-time data analysis to save time and energy.',
      tags: ['IoT', 'Data Analytics', 'Smart Solutions'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-darkGray to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto shadow-lg shadow-primary/50"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/60 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 transition-all group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary hover:bg-secondary rounded-full transition-all transform hover:scale-110 shadow-lg"
                  >
                    <FaGithub className="text-white text-xl" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary hover:bg-primary rounded-full transition-all transform hover:scale-110 shadow-lg"
                  >
                    <FaExternalLinkAlt className="text-white text-xl" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

