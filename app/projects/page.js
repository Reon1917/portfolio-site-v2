import { Nav } from "@/components/nav"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js 14, Tailwind CSS, and shadcn/ui components.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.vercel.app",
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="container py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
          Projects
        </h1>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}
