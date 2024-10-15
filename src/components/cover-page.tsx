import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MonitorDot, TabletSmartphone, Globe } from 'lucide-react'
import PortfolioItem from './PortfolioItem' 

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference"
        variants={variants}
        animate="default"
      />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Santiago Ceballos
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         FullStack Developer
        </motion.p>
        <motion.div
          className="flex space-x-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://github.com/Santiiago8"
            target='_blank'
            className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 rounded-full p-3"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/santiago-ceballos-palacios/"
            target='_blank'
            className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 rounded-full p-3"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:santiagopalcios498@gmail.com"
            className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 rounded-full p-3"
          >
            <Mail size={24} />
          </a>
        </motion.div>
        <motion.a
          href="#portfolio"
          className="flex flex-col items-center text-white hover:text-gray-300 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="mb-2">Explore My Work</span>
          <ArrowDown size={24} className="animate-bounce" />
        </motion.a>
      </div>
      <div id="portfolio" className="relative z-10 min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">My Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem
              icon={<Globe size={40} />}
              title="Web Development"
              description="Created responsive and dynamic websites using React, AOS and diferents dependencies."
              id={1}
            />
            <PortfolioItem
              icon={<MonitorDot size={40} />}
              title="FullStack Desktop App"
              description="Created a responsive and intuitive desktop app to control the stock of a store."
              id={2}
            />
            <PortfolioItem
              icon={<TabletSmartphone size={40} />}
              title="FullStack Mobile App"
              description="Created a responsive and intuitive mobile app to analyze user sentiments using Google Cloud NLP."
              id={3}
            />
          </div>
        </div>
      </div>
      <footer className="relative z-10 bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Santiago Ceballos</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
            <div className="flex space-x-4">
              <a 
              href="https://github.com/Santiiago8"
              target='_blank' 
              className="hover:text-purple-400 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/santiago-ceballos-palacios/"
                target='_blank' 
                className="hover:text-purple-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:santiagopalcios498@gmail.com" 
                className="hover:text-purple-400 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Santiago Ceballos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}