"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    try {
      // TODO: Implement email sending logic
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      event.target.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          name="name"
          placeholder="Your name"
          required
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          placeholder="Your email"
          required
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <Input
          name="subject"
          placeholder="Subject"
          required
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Your message"
          required
          disabled={isLoading}
          className="min-h-[150px]"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
