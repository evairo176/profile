import { Progress } from "@/components/ui/progress";
import project1 from "/public/assets/proj5.png";
import project2 from "/public/assets/proj6.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-20 text-gray-800 md:px-0 dark:text-white"
    >
      <h2 className="mb-8 text-6xl font-bold">
        {t("title_1")}{" "}
        <span className="text-purple-600 dark:text-purple-300">
          {t("title_2")}
        </span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-gray-300/40 p-6 dark:border-white/20">
          <h3 className="mb-2 text-2xl font-bold">
            O1. {t("background.title")}
          </h3>
          <p className="mb-6 text-justify text-gray-600/70 dark:text-white/50">
            {`${t("background.description")}`}
          </p>
          <table className="w-full text-sm text-gray-600/70 dark:text-white/50">
            <thead>
              <tr>
                <td>
                  {t("background.education")}{" "}
                  <span className="float-right">: </span>
                </td>
                <td>{t("background.education_1")}</td>
              </tr>
              <tr>
                <td>
                  {t("background.college")}{" "}
                  <span className="float-right">: </span>
                </td>
                <td>{t("background.college_1")}</td>
              </tr>
            </thead>
          </table>
        </div>

        <div className="rounded-lg border border-gray-300/40 p-6 dark:border-white/20">
          <h3 className="mb-2 text-2xl font-bold">
            02. {t("expertise.title")}
          </h3>
          <p className="text-gray-600/70 dark:text-white/50">
            {`${t("expertise.description")}`}
          </p>
          <div className="relative mt-4 h-[220px] overflow-hidden rounded-lg border border-gray-300/40 p-4 dark:border-white/20">
            <Image
              src={project1}
              alt="project 1"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="rounded-lg border border-gray-300/40 p-6 dark:border-white/20">
          <h3 className="mb-2 text-2xl font-bold">03. {t("skills.title")}</h3>
          <p className="mb-4 text-gray-600/70 dark:text-white/50">
            {`${t("skills.description")}`}
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
          <h3 className="mt-4 mb-2 text-2xl font-bold">
            04. {t("approach.title")}
          </h3>
          <p className="text-gray-600/70 dark:text-white/50">
            {t("approach.description")}
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
            <h3 className="mb-6 text-2xl font-bold">05. {t("goals.title")}</h3>
            <p className="text-gray-600/70 dark:text-white/50">
              {t("goals.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
