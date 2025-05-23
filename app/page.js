"use client"

import { useState } from "react"

const projects = [
  {
    title: "Mobile Friendly Food Ecommerce",
    description: "Created a public Ecommerce website that has been accessed by 2000 people with mobile-responsive UI and geo-location finder that has been connected to Whatsapp",
    image: "/img/pic4.png",
    link: "https://meat-sagito.pages.dev/",
    github: "",
    tech: ["JavaScript", "Next.js", "Tailwind", "Cloudflare"],
  },
  {
    title: "Artificial Company Web Portfolio with 3D Model",
    description: "Developed a responsive website with 3D product displays, category-based filtering, and pagination",
    image: "/img/pic3.png",
    link: "https://woody-wood.web.app/",
    github: "https://github.com/durianbeetroot/woody",
    tech: ["Next.js", "JavaScript", "Tailwind", "Bootstrap", "Three.js", "Firebase", "Firestore"],
  },
  {
    title: "Analytical Website with Interactive Graphs",
    description: "Imitated internal tracking for a coffee company, tracking 12 months of data and providing insights on coffee preferences, gross income, cost, profits, and other business metrics.",
    image: "/img/pic2.png",
    link: " https://coffery-app.web.app/",
    github: "https://github.com/durianbeetroot/coffery-app",
    tech: ["JavaScript", "React", "Express.js","D3 js", "Bootstrap", "Firebase", "Firestore"],
  },
  {
    title: "Mobile Friendly Construction Company Website",
    description: "Created a portfolio website for a construction company with a mobile-friendly responsive design accessible from any device.",
    image: "/img/pic1.png",
    link: "https://lift-app-fa4ee.web.app/",
    github: "https://github.com/durianbeetroot/lift-app",
    tech: ["JavaScript", "React", "Tailwind", "Firebase"],
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
              <h1 className="text-xl font-bold">Projects Portfolio</h1>
              <div className="hidden md:flex items-center space-x-4">
                <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                  {isDarkMode ? "🌞" : "🌙"}
                </button>
              </div>
              <button
                className="md:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                ☰ Filter
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

