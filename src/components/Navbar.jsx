import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20"src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/aditya-chand-25998824a/"><FaLinkedin /></a>
        <a href="https://github.com/Cul-Dude"><FaGithub /></a>
        <a href="https://www.instagram.com/adichand.04/"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;