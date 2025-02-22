"use client"

import { useState } from "react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with cart and checkout functionality",
    image: "/placeholder.svg?height=200&width=400",
    link: "https://ecommerce-example.com",
    github: "https://github.com/username/ecommerce",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image: "/placeholder.svg?height=200&width=400",
    link: "https://dashboard-example.com",
    github: "https://github.com/username/dashboard",
    tech: ["Next.js", "React", "Chart.js", "PostgreSQL"],
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    image: "/placeholder.svg?height=200&width=400",
    link: "https://chat-example.com",
    github: "https://github.com/username/chat",
    tech: ["Next.js", "React", "WebSocket", "OpenAI"],
  },
  {
    title: "Task Management System",
    description: "Collaborative task management with real-time updates",
    image: "/placeholder.svg?height=200&width=400",
    link: "https://tasks-example.com",
    github: "https://github.com/username/tasks",
    tech: ["Next.js", "React", "Redux", "Firebase"],
  },
]

// Get unique tech stack items
const allTechStacks = [...new Set(projects.flatMap((project) => project.tech))]

export default function Page() {
  const [selectedTech, setSelectedTech] = useState("All")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Filter projects based on selected tech
  const filteredProjects =
    selectedTech === "All" ? projects : projects.filter((project) => project.tech.includes(selectedTech))

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 min-h-screen dark:text-gray-100">
        {/* Navigation */}
        <nav className="border-b dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <h1 className="text-xl font-bold">My Portfolio</h1>
              <div className="hidden md:flex items-center space-x-4">
                <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                  {isDarkMode ? "🌞" : "🌙"}
                </button>
              </div>
              <button
                className="md:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b dark:border-gray-800 p-4">
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedTech === "All" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-800"
                }`}
                onClick={() => setSelectedTech("All")}
              >
                All
              </button>
              {allTechStacks.map((tech) => (
                <button
                  key={tech}
                  className={`px-4 py-2 rounded-lg ${
                    selectedTech === tech ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-800"
                  }`}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        )}

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Desktop Filter buttons */}
          <div className="hidden md:flex flex-wrap gap-2 mb-8">
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedTech === "All" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-800"
              }`}
              onClick={() => setSelectedTech("All")}
            >
              All
            </button>
            {allTechStacks.map((tech) => (
              <button
                key={tech}
                className={`px-4 py-2 rounded-lg ${
                  selectedTech === tech ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-800"
                }`}
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

