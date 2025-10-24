import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: 'harshavardhinimuniappan737@gmail.com',
      link: 'mailto:harshavardhinimuniappan737@gmail.com',
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      value: '+91 9498870568',
      link: 'tel:+919498870568',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      value: 'India',
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-darkBlue to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.3),transparent)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.3),transparent)]"></div>
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto shadow-lg shadow-primary/50"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg shadow-primary/30">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-xl text-white shadow-2xl shadow-primary/30 border border-primary/30">
              <h4 className="text-xl font-bold mb-4">I’m always eager to learn, innovate, and collaborate.</h4>
              <p className="mb-4">
              Open to opportunities to build, create, and make a difference.
              </p>
              <p className="text-sm opacity-90">
              Thank you for visiting my portfolio. Let’s turn ideas into reality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-black/40 backdrop-blur-sm text-white placeholder-gray-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-black/40 backdrop-blur-sm text-white placeholder-gray-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-black/40 backdrop-blur-sm text-white placeholder-gray-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-black/40 backdrop-blur-sm text-white placeholder-gray-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

