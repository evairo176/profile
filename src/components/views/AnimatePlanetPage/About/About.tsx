import Image from "next/image";
import React from "react";
import project1 from "/public/assets/proj5.png";
import project2 from "/public/assets/proj6.png";
import { Progress } from "@/components/ui/progress";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("about");

  return (
    <section id="about" className="px-4 py-8">
      <h2 className="text-foreground/80 mb-8 text-6xl font-bold">
        {t("background.title").split(" ")[0]}{" "}
        <span className="text-primary">
          {t("background.title").split(" ")[1] || "Me"}
        </span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="border-border/80 rounded-lg border p-6">
          <h3 className="text-foreground/80 mb-2 text-2xl font-bold">
            01. {t("background.title")}
          </h3>
          <p className="text-foreground/60 mb-6">
            {t("background.description")}
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
            02. {t("expertise.title")}
          </h3>
          <p className="text-foreground/60 mb-6">
            {t("expertise.description")}
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
            03. {t("skills.title")}
          </h3>
          <p className="text-foreground/60 mb-6">{t("skills.description")}</p>
          <div className="grid gap-4 text-center">
            <div className="border-border/80 mb-4 rounded-lg border p-4">
              <h4 className="text-primary mb-2 font-medium">
                {t("skills.frontend")}
              </h4>
              <ul className="text-foreground/60 space-y-1 text-sm">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="border-border/80 mb-4 rounded-lg border p-4">
              <h4 className="text-primary mb-2 font-medium">
                {t("skills.backend")}
              </h4>
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
            04. {t("approach.title")}
          </h3>
          <p className="text-foreground/60">{t("approach.description")}</p>
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
              05. {t("goals.title")}
            </h3>
            <p className="text-foreground/60">{t("goals.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
