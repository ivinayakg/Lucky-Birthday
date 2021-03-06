import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="section footer">
      <div class="mycontain">
        <small>Vinayak @ 2021</small>
        <div class="social-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ivinayakg/"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/ivinayakg/"
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ivinayakg"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
