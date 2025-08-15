import {
  AiFillGithub,
  AiOutlineX,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="relative mx-auto max-w-[1200px] px-4 py-8">
      <div className="absolute inset-0 overflow-hidden md:hidden">
        <div className="absolute top-[20%] left-[20%] h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-200 opacity-20 dark:bg-purple-300 dark:opacity-30"></div>
        <div className="absolute top-[20%] left-[50%] h-[70px] w-[150px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-400 opacity-25 dark:bg-purple-900 dark:opacity-50"></div>
        <div className="absolute top-[25%] left-[65%] h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-300 opacity-20 dark:bg-purple-600 dark:opacity-30"></div>
      </div>

      <div className="absolute inset-0 hidden overflow-hidden md:block">
        <div className="absolute top-[40%] left-[20%] h-[200px] w-[200px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-200 opacity-25 dark:bg-purple-300 dark:opacity-40"></div>
        <div className="absolute top-[45%] left-[60%] h-[150px] w-[250px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-100 opacity-15 dark:bg-purple-200 dark:opacity-20"></div>
        <div className="absolute top-[60%] left-[49%] h-[100px] w-[200px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-300 opacity-20 dark:bg-purple-600 dark:opacity-30"></div>
      </div>

      <div className="relative z-10 mt-8 text-center">
        <h1 className="hidden font-bold text-gray-300/20 md:block md:text-[12rem] lg:text-[15rem] dark:text-white/10">
          JOHNDOE
        </h1>
        <h1 className="relative mb-12 text-8xl font-bold text-gray-300/20 md:hidden dark:text-white/10">
          JOHNDOE
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8 text-gray-700 sm:grid-cols-3 dark:text-gray-200">
        <div className="space-y-2">
          <h3 className="font-bold">Contact Me</h3>
          <p>+89898998</p>
          <p>john@doe.com</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Useful links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                404 Page
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Social</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Github
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                X
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 flex items-center justify-center gap-10 text-gray-500 sm:justify-between dark:text-gray-400">
        <p>© 2024. All rights reserved.</p>

        <ul className="flex flex-row gap-6">
          <li>
            <a href="#">
              <AiFillGithub size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineX size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillFacebook size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
