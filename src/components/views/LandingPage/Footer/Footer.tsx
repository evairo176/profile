import {
  AiFillGithub,
  AiOutlineX,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="relative mx-auto max-w-[1200px] overflow-clip px-4 py-8">
      <div className="absolute inset-0 overflow-hidden md:hidden">
        <div className="absolute top-[20%] left-[20%] h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-300 opacity-30"></div>
        <div className="absolute top-[20%] left-[50%] h-[70px] w-[150px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-900 opacity-50"></div>
        <div className="absolute top-[25%] left-[65%] h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-600 opacity-30"></div>
      </div>

      <div className="absolute inset-0 hidden overflow-hidden md:block">
        <div className="absolute top-[40%] left-[20%] h-[200px] w-[200px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-300 opacity-40"></div>
        <div className="absolute top-[45%] left-[60%] h-[150px] w-[250px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-200 opacity-20"></div>
        <div className="absolute top-[60%] left-[49%] h-[100px] w-[200px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple-600 opacity-30"></div>
      </div>

      <div className="relative z-10 mt-8 text-center">
        <h1 className="text-foreground/10 hidden font-bold md:block md:text-[12rem] lg:text-[15rem]">
          DICKI_DEV
        </h1>
        <h1 className="text-foreground/10 relative mb-12 text-8xl font-bold md:hidden">
          DICKI_DEV
        </h1>
      </div>

      <div className="text-foreground/60 grid grid-cols-2 gap-8 sm:grid-cols-3">
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

      <div className="text-foreground/80 container mt-12 flex items-center justify-center gap-10 sm:justify-between">
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
