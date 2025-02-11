import { Nav } from "@/components/nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  "NextJS", "React", "MongoDB", "Supabase",
  "Python", "Java", "Oracle", "SQL", "PostgreSQL"
]

export default function About() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="container py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
          About Me
        </h1>
        
        <div className="grid gap-8">
          {/* Education Section */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-2">
                <p className="text-lg font-medium">Assumption University of Thailand</p>
                <p className="text-muted-foreground">Bachelor of Science in IT</p>
                <p className="text-muted-foreground">Concentration: Software Development</p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
              <p className="text-muted-foreground">
                I am a passionate software developer with a strong foundation in full-stack development.
                My expertise spans across modern web technologies, database management, and software architecture.
                I focus on creating efficient, scalable, and user-friendly applications while maintaining
                high code quality and following best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
