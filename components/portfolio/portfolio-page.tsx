import {
  ArrowUpRight,
  BookOpenText,
  Braces,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  TerminalSquare
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { SiteHeader } from "@/components/portfolio/site-header";

const experience = [
  {
    role: "Software Developer",
    company: "Wilfrid Laurier University - Laurier StartUp Lab",
    dates: "January 2026 - April 2026",
    summary:
      "Worked with startup founders to transform ideas into scalable software solutions and technical roadmaps. Supported consulting engagements, innovative AI initiatives, and internal tools while developing workflow automation and enterprise-grade software solutions aligned with university standards and compliance requirements.",
    tags: ["Microsoft Azure", "React", "Typescript"]
  },
   {
    role: "VP Training Services",
    company: "Wilfrid Laurier University - Prism Resources",
    dates: "September 2025 - Present",
    summary:
      "Led operations for student training programs serving 3,000+ students across courses in  Finance, AI, coding, Power BI, Excel, Figma, and Google Analytics. Developed a Generative AI course in collaboration with university faculty and used Python to analyze program data and improve delivery.",
    tags: ["TypeScript", "React", "Node.js"]
  },
  {
    role: "ServiceNow Technical Writer",
    company: "Definity Financial Corporation",
    dates: "May 2025 - August 2025",
    summary:
      "Created technical documentation, onboarding guides, and workflow documentation for ServiceNow and RPA systems. Collaborated with technical teams to simplify complex processes for both technical and non-technical audiences.",
    tags: ["TypeScript", "React", "Node.js"]
  },



  {
    role: "Web Developer",
    company: "Civiconnect",
    dates: "September 2024 - December 2024",
    summary:
      "Collaborated on full-stack web applications using React, Next.js, and StrapiCMS. Assisted with API testing, integrations, and building reliable user-focused web experiences.",
    tags: ["TypeScript", "React", "Node.js"]
  },

  
  
];

const projects = [
  {
    name: "AI Research Project",
    summary:
      "Conducted research with a professor on AI-powered curriculum generation using RAG and agentic AI workflows. Designed a platform capable of generating structured courses, lesson plans, assessments, and syllabi for higher education",
    status: "Academic Research",
    icon: Database
  },
  // {
  //   name: "Atlas Cloud Shell",
  //   summary:
  //     "Container orchestration platform for automated deployment pipelines and microservice monitoring.",
  //   status: "Internal",
  //   icon: TerminalSquare
  // },
  // {
  //   name: "Signal Review",
  //   summary:
  //     "AI-aided review surface that turns engineering incidents into searchable operational memory.",
  //   status: "Prototype",
  //   icon: Braces
  // }
];

const posts = [
  {
    title: "Designing APIs for Calm Operations",
    date: "May 2026",
    summary:
      "Notes on shaping service contracts that are easy to observe, debug, and evolve under production pressure.",
    tags: ["API Design", "Systems"]
  },
  {
    title: "AI Tools Need Better Failure Modes",
    date: "April 2026",
    summary:
      "A practical look at building AI workflows that keep humans oriented when model output becomes uncertain.",
    tags: ["AI", "UX"]
  },
  {
    title: "Frontend Architecture as Product Memory",
    date: "March 2026",
    summary:
      "How durable component systems can preserve product decisions and reduce repeated design drift.",
    tags: ["React", "Architecture"]
  }
];

const skills = [
  "TS",
  "Python",
  "C",
  "Node.js",
  "React",
  "PostgreSQL",
  "AWS",
  "Docker",
  "API Design",
  "Frontend Architecture",
  "AI Systems",
  "Azure"
];

export function PortfolioPage() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-background technical-grid">
      <SiteHeader />

      <div className="mx-auto w-full max-w-4xl px-6 pt-24 md:px-12 md:pt-32">
        <div>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <BlogSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="grid min-h-[calc(100vh-8rem)] items-center gap-10 pb-24 md:grid-cols-[minmax(220px,0.9fr)_1fr]">
      {/* <div className="relative order-2 aspect-[4/5] w-full max-w-sm border border-velvet-edge bg-velvet-raised md:order-1">
        <div className="absolute inset-5 border border-velvet-edge bg-velvet-panel p-4">
          <div className="flex items-center gap-2 border-b border-velvet-edge pb-3">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="h-2 w-2 rounded-full bg-velvet-lilac" />
          </div>
          <div className="mt-5 space-y-3 font-mono text-xs text-muted-foreground">
            <p className="text-primary">const engineer = &#123;</p>
            <p className="pl-4">name: &quot;Razan Mohamed&quot;,</p>
            <p className="pl-4">craft: &quot;software + AI&quot;,</p>
            <p className="pl-4 text-secondary">mode: &quot;deep focus&quot;</p>
            <p className="text-primary">&#125;;</p>
          </div>
          <div className="absolute inset-x-5 top-16 h-16 animate-scan-line border-y border-primary/50 bg-primary/10" />
        </div>
      </div> */}

      <div className="order-1 max-w-xl animate-fade-up md:order-2">
        <Badge variant="accent" className="mb-5">
          Software Engineering / AI
        </Badge>
        <h1 className="text-5xl font-bold leading-[1.05] text-velvet-text md:text-7xl">
          Razan
          <br />
          Mohamed
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-foreground/75 md:text-lg">
          I’m passionate about software engineering and AI, with a focus on
          solving problems and building reliable software that creates real
          impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button asChild variant="secondary" size="icon" aria-label="GitHub">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="secondary" size="icon" aria-label="LinkedIn">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-rule py-20">
      <SectionHeading eyebrow="01" title="About" />
      <div className="grid gap-5 ">
        <p className="text-lg leading-8 text-foreground/80">
         I’m a Software Developer passionate about building impactful technology through software development, AI, and data-driven solutions. I enjoy creating tools that improve learning, productivity, and community experiences, while also supporting educational and startup initiatives through leadership, collaboration, and technology.

        </p>
        {/* <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" />
              Current Signal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Exploring how AI can compress feedback loops across incident
              response, developer operations, and product-facing workflows.
            </CardDescription>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section-rule py-20">
      <SectionHeading eyebrow="02" title="Experience" />
      <div className="space-y-4">
        {experience.map((item) => (
          <Card key={`${item.role}-${item.company}`}>
            <CardHeader className="grid gap-2 md:grid-cols-[1fr_auto]">
              <div>
                <CardTitle>{item.role}</CardTitle>
                <CardDescription>@ {item.company}</CardDescription>
              </div>
              <p className="font-mono text-xs text-muted-foreground">{item.dates}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-foreground/75">{item.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="work" className="section-rule py-20">
      <SectionHeading eyebrow="03" title="Selected Projects" />
      <div className="grid gap-4">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Card
              key={project.name}
              className="group grid overflow-hidden md:grid-cols-[180px_1fr]"
            >
              <div className="relative min-h-36 border-b border-velvet-edge bg-velvet-low md:border-b-0 md:border-r">
                <div className="absolute inset-5 border border-velvet-edge bg-background p-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <div className="mt-8 h-px bg-primary/60" />
                  <div className="mt-3 h-px w-2/3 bg-secondary/70" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-foreground/75">
                      {project.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-primary">
                  {project.status}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section-rule py-20">
      <SectionHeading eyebrow="05" title="Skills" />
      <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={skill} variant={index % 5 === 0 ? "accent" : "default"}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-secondary" />
              What I optimize for
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm leading-6 text-foreground/75">
            <p>Systems that solve real problems, not just code</p>
            <p>Learning by building across domains</p>
            <p>Simple, scalable, maintainable systems</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-rule py-20">
      <SectionHeading eyebrow="06" title="Contact" />
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="max-w-2xl text-lg leading-8 text-foreground/80">
          Have an idea, product, or system you’re building? I’m always open to thoughtful conversations and collaboration.
          </p>
        </div>
        <Button asChild size="lg">
          <a href="mailto:hello@example.com">
            <Mail className="mr-2 h-4 w-4" />
            Email Razan
          </a>
        </Button>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="section-rule py-20">
      <SectionHeading eyebrow="04" title="Blog" />
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} className="group flex min-h-72 flex-col">
            <CardHeader>
              <div className="mb-5 flex items-center justify-between gap-4">
                <BookOpenText className="h-5 w-5 text-primary" />
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {post.date}
                </p>
              </div>
              <CardTitle className="leading-6">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="text-sm leading-6 text-foreground/75">{post.summary}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section-rule flex flex-col gap-4 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
      <div className="flex gap-5">
        <a className="hover:text-primary" href="#home">
          Home
        </a>
        <a className="hover:text-primary" href="#work">
          Work
        </a>
        <a className="hover:text-primary" href="#blog">
          Blog
        </a>
        <a className="hover:text-primary" href="#contact">
          Contact
        </a>
      </div>
      <p>© 2026 · Velvet Mode Initialized</p>
    </footer>
  );
}
