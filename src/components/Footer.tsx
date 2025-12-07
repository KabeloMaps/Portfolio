import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="  ">
        <div className="footer-description flex flex-col pt-28">
          <hr className="border-t-2 border-neutral-800 my-20" />

          <h3 className="text-white text-[2.5rem] font-bold font-family-third ">
            Let's Connet
          </h3>
          <p className="text-white text-[1rem] font-family-third font-light">
            say hello at{" "}
            <span className="decoration-[#d3e97a] underline underline-offset-4 cursor-pointer ">
              khmaponya@gmail.com
            </span>
          </p>
          <p className="text-white text-[1rem] font-family-third font-light">
            for more information, please take a look at my{" "}
            <span className="underline decoration-[#d3e97a] underline-offset-4 cursor-pointer">
              {" "}
              resume
            </span>
          </p>
          <div className="  text-white text-2xl  mb-5">
            <a
              href="https://www.linkedin.com/in/kabelomaponya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-8xl  " />
            </a>

            <a
              href="https://github.com/KabeloMaps?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-8xl " />
            </a>
          </div>
          <p className="copyright text-white pt-24">
            &copy; 2025 Kabelo Maponya
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
