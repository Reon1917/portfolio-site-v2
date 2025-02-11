import Image from "next/image";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="container py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Lin Myat Phyo
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose">
            Software Developer specializing in Next.js, React, and Full-stack Development
          </p>
          <div className="mt-8 flex gap-4">
            {/* Add social links and CTA buttons here */}
          </div>
        </div>
      </div>
    </main>
  );
}
