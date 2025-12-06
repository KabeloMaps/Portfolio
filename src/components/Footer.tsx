const Footer = () => {
  return (
    <div>
      <footer className="contact bg-blue-500">
        <div className="footer-description">
          <h3 className="Lets-connect">Let's Connet</h3>
          <p>
            say hello at{" "}
            <span className="colored-line">khmaponya@gmail.com</span>
          </p>
          <p>
            for more information, please take a look at my
            <a
              href="./assets/resume/Front-End Development CV.pdf"
              download
              className="colored-line"
            >
              resume
            </a>
          </p>
          <div className="social-icons-footer">
            <span id="linkedin">
              <a
                href="https://www.linkedin.com/in/kabelomaponya/"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </span>
            <span id="github">
              <a
                href="https://github.com/KabeloMaps?tab=repositories"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-github"></i>{" "}
              </a>
            </span>
            <p className="copyright">&copy; 2025 Kabelo Maponya</p>
          </div>
        </div>

        <div className="footer-form"></div>
      </footer>
    </div>
  );
};

export default Footer;
