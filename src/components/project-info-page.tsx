import { ArrowLeft, Github, Globe } from 'lucide-react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


interface ProjectInfoPageProps {
  title?: string
  description?: string
  technologies?: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectInfoPage({
  title = 'Project Title',
  description = 'Project description',
  technologies = [],
  imageUrl = '/placeholder.svg?height=400&width=600',
  githubUrl,
  liveUrl
}: ProjectInfoPageProps) {
  return (      
  <div className="min-h-screen bg-gray-900 text-white">
    <motion.div
      initial={{ opacity: 0, y: 50 }}  // Comienza con opacidad 0 y ligeramente más abajo (y: 20)
      animate={{ opacity: 1, y: 0 }}   // Se mueve hacia la posición original y opacidad 1
      transition={{ duration: 1.5 }}     // Duración de la animación de 1 segundo
    >
        <div className="container mx-auto px-4 py-8">
          <Link to={'/'} className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Link>
          <div className="grid md:grid-cols-2 gap-8">
            <div style={{ textAlign: 'justify' }}>
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              <p className="text-gray-300 mb-6">{description}</p>
              {technologies.length > 0 && (
                <>
                  <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
                  <ul className="list-disc list-inside mb-6">
                    {technologies.map((tech, index) => (
                      <li key={index} className="text-gray-300">{tech}</li>
                    ))}
                  </ul>
                </>
              )}
              <div className="flex space-x-4">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    View on GitHub
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500 transition-colors"
                  >
                    <Globe size={20} className="mr-2" />
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
            <div>
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
                style={{
                  width: '100%',
                  maxHeight: '500px',
                  objectFit: 'contain',
                  margin: '0 auto'
                }}
              />
            </div>
          </div>
        </div>
    </motion.div>
    </div>
  )
}