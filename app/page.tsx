import { Github, Mail, Linkedin, Coffee, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b border-espresso/10">
        <Link className="flex items-center justify-center gap-2" href="#">
          <Coffee className="h-6 w-6 text-espresso" />
          <span className="font-bold text-xl text-espresso">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-espresso transition-colors text-coffee" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-espresso transition-colors text-coffee" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:text-espresso transition-colors text-coffee" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:text-espresso transition-colors text-coffee" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="coffee-steam"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-espresso">
                    Hi, I'm <span className="text-amber">Arber</span>
                  </h1>
                  <p className="max-w-[600px] text-coffee/80 md:text-xl">
                    I'm a passionate developer who crafts digital experiences as rich and satisfying as a perfect
                    espresso shot. Welcome to my portfolio where creativity meets code.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="bg-espresso hover:bg-gray-50 text-cream border border-espresso">Brew Something Together</Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline" className="bg-white border-coffee text-coffee hover:bg-gray-50 hover:text-coffee">
                      View My Blend
                    </Button>
                  </Link>
                  <Link href="https://patreon.com/arberdev?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_fan&utm_content=copyLink" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#FF424D] text-white hover:bg-[#e63946] border-[#FF424D] flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Support My Work
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/arberze" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-coffee hover:text-espresso hover:bg-cream">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/arber-zeka" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-coffee hover:text-espresso hover:bg-cream">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:arber.dev@outlook.com">
                    <Button variant="ghost" size="icon" className="text-coffee hover:text-espresso hover:bg-cream">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                  <Link href="https://patreon.com/arberdev?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_fan&utm_content=copyLink" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" className="bg-[#FF424D] text-white hover:bg-[#e63946]">
                      <Heart className="h-5 w-5" />
                      <span className="sr-only">Support on Patreon</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center relative">
                <div className="relative">
                  <img
                    alt="Profile"
                    className="rounded-full object-cover border-4 border-amber/30 shadow-2xl"
                    height="400"
                    src="/ArberProfilePic.webp?height=400&width=400"
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                  <div className="coffee-beans"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-latte">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-espresso">
                  My Brewing Skills
                </h2>
                <p className="max-w-[900px] text-coffee/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Like a master barista, I've perfected these technologies to create exceptional digital experiences
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

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="espresso-pour"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-espresso">
                  My Coffee Portfolio
                </h2>
                <p className="max-w-[900px] text-coffee/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Each project is carefully crafted, like the perfect espresso shot
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="KosovoGeo Api"
                description="A REST API to get places of Kosovo"
                tags={["HTML", "CSS", "ASP.NET CORE 8", "POSTGRESQL"]}
                imageUrl="/kosovogeoapi.png?height=250&width=350"
                projectUrl="https://kosovo-geo-api.runasp.net/explore.html"
                buttonText="Taste kosovo geo brew"
              />
              <ProjectCard
                title="nrruge"
                description="My main side project. A responsive web application built with React and .NET core/ASP NET core 8"
                tags={["React", "Tailwind CSS", "ASP.NET CORE 8", "SQL Server"]}
                imageUrl="/nrruge.png?height=250&width=350"
                projectUrl="https://www.nrruge.vercel.com/"
                buttonText="Taste nrruge brew"
              />
              <ProjectCard
                title="MealPath"
                description="An e-commerce platform for selling PIZZA with payment integration"
                tags={["React", "ASP.NET Core 8", "Stripe", "Tailwind CSS", "CQRS"]}
                imageUrl="/mealpath.png?height=250&width=350"
                projectUrl="https://github.com/ArberZe/MealPath.OrderManagement"
                buttonText="taste MealPath brew"
              />
              <ProjectCard
                title="Many more projects"
                description="Please view my github account to see all of my projects"
                tags={["JavaScript", "TypeScript", "React", "Blazor", "Node.js","SignalR", "Firebase", "MongoDB"]}
                imageUrl="/many-more.png?height=250&width=350"
                projectUrl="https://github.com/ArberZe"
                buttonText="Taste many more brews"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-latte to-cream">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-espresso">
                  Let's Brew Something Together
                </h2>
                <p className="max-w-[900px] text-coffee/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to create something amazing? Let's grab a coffee and discuss your next project
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex justify-center space-x-4">
                  <Link href="https://github.com/arberze" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white border-coffee text-coffee hover:bg-gray-50 hover:text-coffee"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/arber-zeka" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white border-coffee text-coffee hover:bg-gray-50 hover:text-coffee"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:arber.dev@outlook.com">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white border-coffee text-coffee hover:bg-gray-50 hover:text-coffee"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                  <Link href="https://patreon.com/arberdev?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_fan&utm_content=copyLink" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      className="bg-[#FF424D] text-white hover:bg-[#e63946]"
                    >
                      <Heart className="h-5 w-5" />
                      <span className="sr-only">Support on Patreon</span>
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-coffee/60">
                  Or email me directly at{" "}
                  <Link className="underline underline-offset-2 text-espresso" href="mailto:your.email@example.com">
                    arber.dev@outlook.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-coffee/20 bg-white/50">
        <p className="text-xs text-coffee/60">© 2025 Arber Zeka. Crafted with ☕ and code.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-coffee/60 hover:text-espresso" href="#about">
            About
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-coffee/60 hover:text-espresso"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-coffee/60 hover:text-espresso"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-coffee/60 hover:text-espresso"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border border-coffee/20 p-4 shadow-sm transition-all hover:shadow-lg hover:border-amber/40 bg-white/80 backdrop-blur-sm group">
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold text-espresso group-hover:text-amber transition-colors">{title}</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md bg-amber/20 px-2 py-1 text-xs font-medium text-espresso ring-1 ring-inset ring-amber/30 hover:bg-amber/30 transition-colors"
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
    <div className="group flex flex-col items-start gap-2 rounded-lg border border-coffee/20 overflow-hidden transition-all hover:shadow-xl hover:border-amber/40 bg-white/90 backdrop-blur-sm">
      <div className="w-full overflow-hidden relative">
        <img
          alt={title}
          className="aspect-video w-full object-cover transition-all group-hover:scale-105"
          height="250"
          src={imageUrl || "/placeholder.svg"}
          width="350"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-xl text-espresso group-hover:text-amber transition-colors">{title}</h3>
        <p className="text-sm text-coffee/80">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-amber/20 px-2 py-1 text-xs font-medium text-espresso ring-1 ring-inset ring-amber/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-4">
          <Link href={projectUrl}>
            <Button variant="outline" size="sm" className="bg-white border-coffee text-coffee hover:bg-gray-50 hover:text-coffee">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
