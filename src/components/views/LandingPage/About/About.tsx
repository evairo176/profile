import Image from "next/image";
import React from "react";
import project1 from "/public/assets/proj5.png";
import project2 from "/public/assets/proj6.png";
import { Progress } from "@/components/ui/progress";

const skills = [
  "Laravel",
  "Node.js",
  "Express.js",
  "React.js",
  "React Native",
  "Redis",
  "Next.js",
  //   "MySQL",
  //   "PostgreSQL",
  //   "Git",
  //   "DigitalOcean",
  //   "WebSocket",
  //   "TypeScript",
  //   "Xendit (Payments)",
  //   "Midtrans (Payments)",
  //   "Google Maps",
  //   "Leaflet Maps",
  //   "Redux Toolkit",
  //   "ASP.NET",
  //   "SQL Server",
  //   "Framer Motion",
  //   "React Query",
  //   "React Hook Form",
  //   "shadcn/ui",
  //   "Tailwind CSS",
  //   "MongoDB",
  //   "TanStack Query",
  //   "HeroUI",
];

const About = () => {
  return (
    <section id="about" className="p-8">
      <h2 className="text-foreground/80 mb-8 text-6xl font-bold">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="border-border/80 rounded-lg border p-6">
          <h3 className="text-foreground/80 mb-2 text-2xl font-bold">
            01. Background
          </h3>
          <p className="text-foreground/60 mb-6">
            {`I'm a passionate full-stack developer with a strong foundation in computer science and a love for creating innovative web solutions. My journey has been driven by curiosity, a commitment to clean and efficient code, and the excitement of turning complex problems into intuitive, user-friendly experiences.`}
          </p>

          <div className="border-border/80 mb-4 rounded-lg border p-4">
            <code className="text-foreground/50">
              const skills = [
              <ul className="pl-3">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              ]
            </code>
          </div>
        </div>
        <div className="border-border/80 rounded-lg border p-6">
          <h3 className="text-foreground/80 mb-2 text-2xl font-bold">
            02. Expertise
          </h3>
          <p className="text-foreground/60 mb-6">
            {`I specialize in building robust and scalable web applications using modern technologies, ensuring seamless performance, intuitive user experiences, and clean, maintainable code that stands the test of time.`}
          </p>

          <div className="border-border/80 relative mb-4 h-[220px] overflow-hidden rounded-lg border p-4">
            <Image
              src={project1}
              alt="project 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="border-border/80 rounded-lg border p-6">
          <h3 className="text-foreground/80 mb-2 text-2xl font-bold">
            02. Skills
          </h3>
          <p className="text-foreground/60 mb-6">
            {`I'm proficient in a wide range of technologies and constantly expanding my skill set to stay at the forefront of web development.`}
          </p>
          <div className="grid gap-4 text-center">
            <div className="border-border/80 mb-4 rounded-lg border p-4">
              <h4 className="text-primary mb-2 font-medium">Frontend</h4>
              <ul className="text-foreground/60 space-y-1 text-sm">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="border-border/80 mb-4 rounded-lg border p-4">
              <h4 className="text-primary mb-2 font-medium">Backend</h4>
              <ul className="text-foreground/60 space-y-1 text-sm">
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="border-border/80 rounded-lg border p-6">
          <div className="space-y-4">
            <div>
              <label className="text-primary mb-1 block text-sm font-medium">
                Front-end
              </label>
              <Progress value={90} />
            </div>
            <div>
              <label className="text-primary mb-1 block text-sm font-medium">
                Back-end
              </label>
              <Progress value={85} />
            </div>
            <div>
              <label className="text-primary mb-1 block text-sm font-medium">
                DevOps
              </label>
              <Progress value={75} />
            </div>
          </div>
          <h3 className="text-foreground/80 mt-4 mb-2 text-2xl font-bold">
            04. Approach
          </h3>
          <p className="text-foreground/60">
            I believe in writing clean, maintainable code and following best
            practices. My approach involves understanding client needs, planning
            thoroughly, and delivering high-quality solutions on time.
          </p>
        </div>
        <div className="border-border/80 rounded-lg border p-6">
          <div className="border-border/80 relative h-[200px] overflow-hidden border p-4">
            <Image
              src={project2}
              alt="project 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-foreground/80 mt-2 mb-2 text-2xl font-bold">
              05. Goals
            </h3>
            <p className="text-foreground/60">
              My goal is to continue growing as a developer, tackling
              challenging projects, and contributing to the tech community.{" "}
              {`I'm`}
              always excited to learn new technologies and push the boundaries
              of {`what's `}possible in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
