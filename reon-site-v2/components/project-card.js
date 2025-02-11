"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function ProjectCard({ title, description, tags, github, demo }) {
  return (
    <Card className="flex flex-col overflow-hidden border-2 transition-colors hover:border-primary">
      <CardContent className="flex-1 p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 p-6 pt-0">
        {github && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(github, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        )}
        {demo && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(demo, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
