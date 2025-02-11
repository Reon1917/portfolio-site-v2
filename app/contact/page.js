import { Nav } from "@/components/nav"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="container py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
          Get in Touch
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
