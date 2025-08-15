import { Progress } from "@/components/ui/progress";
import project1 from "/public/assets/proj5.png";
import project2 from "/public/assets/proj6.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="p-8 text-gray-800 dark:text-white">
      <h2 className="mb-8 text-6xl font-bold">
        About <span className="text-purple-600 dark:text-purple-300">Me</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-gray-300/40 p-6 dark:border-white/20">
          <h3 className="mb-2 text-2xl font-bold">O1. Background</h3>
          <p className="mb-6 text-gray-600/70 dark:text-white/50">
            {`I'm a passionate full-stack developer with a strong foundation in
            computer science and a love for creating innovative web solutions.
            My journey in tech started with a curiosity about how things work,
            which led me to pursue a career in web development.`}
          </p>
          <div className="mb-4 rounded-lg border border-gray-300/40 p-4 dark:border-white/20">
            <code className="text-purple-500/60 dark:text-purple-200/50">
              const skills = [<br />
              {`    "JavaScript",
            
              "React",
            
              "Node.js",
             
              "Python",
       
              "SQL",
            
              "AWS"`}
              ];
            </code>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300/40 p-6 dark:border-white/20">
          <h3 className="mb-2 text-2xl font-bold">02. Expertise</h3>
          <p className="text-gray-600/70 dark:text-white/50">
            {`I specialize in building robust and scalable web applications using
            modern technologies. My expertise spans both front-end and back-end
            development, allowing me to create seamless, end-to-end solutions.`}
          </p>
          <div className="relative mt-4 h-[220px] overflow-hidden rounded-lg border border-gray-300/40 p-4 dark:border-white/20">
            <Image
              src={project1}
              alt="project 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="rounded-lg border border-gray-300/40 p-6 dark:border-white/20">
          <h3 className="mb-2 text-2xl font-bold">03. Skills</h3>
          <p className="mb-4 text-gray-600/70 dark:text-white/50">
            {`I'm proficient in a wide range of technologies and constantly
            expanding my skill set to stay at the forefront of web development.`}
          </p>
          <div className="grid gap-4 text-center">
            <div className="rounded-lg border border-gray-300/40 p-3 dark:border-white/20">
              <h4 className="mb-2 font-medium text-purple-600 dark:text-purple-300">
                Frontend
              </h4>
              <ul className="space-y-1 text-sm text-gray-600/70 dark:text-white/50">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-300/40 p-3 dark:border-white/20">
              <h4 className="mb-2 font-medium text-purple-600 dark:text-purple-300">
                Backend
              </h4>
              <ul className="space-y-1 text-sm text-gray-600/70 dark:text-white/50">
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
        <div className="rounded-lg border border-gray-300/40 p-6 dark:border-white/20">
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Front-end
              </label>
              <Progress
                value={90}
                className="bg-purple-200/30 dark:bg-purple-300/20 [&>div]:bg-purple-500/70 dark:[&>div]:bg-purple-100/80"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Back-end</label>
              <Progress
                value={85}
                className="bg-purple-200/30 dark:bg-purple-300/20 [&>div]:bg-purple-500/70 dark:[&>div]:bg-purple-100/80"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">DevOps</label>
              <Progress
                value={75}
                className="bg-purple-200/30 dark:bg-purple-300/20 [&>div]:bg-purple-500/70 dark:[&>div]:bg-purple-100/80"
              />
            </div>
          </div>
          <h3 className="mt-4 mb-2 text-2xl font-bold">04. Approach</h3>
          <p className="text-gray-600/70 dark:text-white/50">
            I believe in writing clean, maintainable code and following best
            practices. My approach involves understanding client needs, planning
            thoroughly, and delivering high-quality solutions on time.
          </p>
        </div>

        <div className="rounded-lg border border-gray-300/40 p-6 dark:border-white/20">
          <div className="relative h-[200px] overflow-hidden border border-gray-300/40 p-4 dark:border-white/20">
            <Image
              src={project2}
              alt="project 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-bold">05. Goals</h3>
            <p className="text-gray-600/70 dark:text-white/50">
              {`y goal is to continue growing as a developer, tackling
              challenging projects, and contributing to the tech community. I'm
              always excited to learn new technologies and push the boundaries
              of what's possible in web development.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
