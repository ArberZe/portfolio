import { Github, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/AboutMe"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
        <span className="font-bold text-lg sm:text-xl">Arber Dev</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                {/* <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Arber Zeka</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    I'm a passionate developer focused on creating beautiful and functional web experiences. Welcome to
                    my portfolio where I showcase my projects and skills.
                  </p>
                </div> */}
                <AboutMe />
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button>Get in Touch</Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline">View My Work</Button>
                  </Link>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/ArberZe" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/arber-zeka-742452220/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:your.arber.dev@outlook.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Profile"
                  className="rounded-full object-cover border-4 border-primary/20"
                  height="400"
                  src="/erasebg-transformed.png?height=400&width=400"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of the technologies and tools I work with
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard title="Frontend Development" skills={["HTML", "CSS", "JavaScript", "JQuery", "Razor Pages", "Blazor Hybrid", "React"]} />
              <SkillCard title="Backend Development" skills={[".NET Core / ASP.NET", "Entity Framework Core", "SQL Server"]} />
              <SkillCard title="Tools & Others" skills={["Git / GitHub / Azure DevOps", "VS Code", "Docker/Containerization", "Azure WebAPI / Database Hosting", "Postman"]} />
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of my recent work
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="nrruge"
                description="My small new baby company. A responsive web application built with React and .NET core/ASP NET core 8"
                tags={["React", "Tailwind CSS", "ASP.NET CORE 8", "SQL Server"]}
                imageUrl="/nrruge.png?height=250&width=350"
                projectUrl="https://www.nrruge.com/"
                buttonText="View nrruge"
              />
              <ProjectCard
                title="MealPath"
                description="An e-commerce platform for selling PIZZA with payment integration"
                tags={["React", "ASP.NET Core 8", "Stripe", "Tailwind CSS", "CQRS"]}
                imageUrl="/mealpath.png?height=250&width=350"
                projectUrl="https://github.com/ArberZe/MealPath.OrderManagement"
                buttonText="View Project"
              />
              <ProjectCard
                title="Many more projects"
                description="Please view my github account to see all of my projects"
                tags={["JavaScript", "TypeScript", "React", "Blazor", "Node.js","SignalR", "Firebase", "MongoDB"]}
                imageUrl="/many-more.png?height=250&width=350"
                projectUrl="https://github.com/ArberZe"
                buttonText="View Github"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Feel free to reach out for collaborations or just a friendly hello
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex justify-center space-x-4">
                  <Link href="https://github.com/ArberZe" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/arber-zeka-742452220/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:arber.dev@outlook.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Or email me directly at{" "}
                  <Link className="underline underline-offset-2" href="mailto:arber.dev@outlook.com">
                    arber.dev@outlook.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Arber Zeka. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 shadow-sm transition-all hover:shadow-md">
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  buttonText
}: {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
  buttonText: string
}) {
  return (
    <div className="group flex flex-col items-start gap-2 rounded-lg border overflow-hidden transition-all hover:shadow-lg">
      <div className="w-full overflow-hidden">
        <img
          alt={title}
          className="aspect-video w-full object-cover transition-all group-hover:scale-105"
          height="250"
          src={imageUrl || "/placeholder.svg"}
          width="350"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-4">
          <Link href={projectUrl}>
            <Button variant="outline" size="sm">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
