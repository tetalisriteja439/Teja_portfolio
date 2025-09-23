import logo from "../assets/HasiniMuvvaLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="HM" />
      </div>
      <div className="lg:w-1/4 m-8 flex items-center justify-center gap-4 text-2xl">
        {/* <FaLinkedin />
        <FaGithub /> */}
        <a href="https://www.linkedin.com/in/sritejakumar-r/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tetalisriteja439" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://drive.google.com/file/d/1sYPcfR2oa5OEGw1qKFrxwslJvNw7vTF8/view?usp=drive_link">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
