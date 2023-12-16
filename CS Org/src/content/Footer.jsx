
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="certifications">
        <h3>CERTIFICATIONS</h3>
        <p>BMC LS DBN CCSC</p>
      </div>

      <div className="connect-with-us">
        <h3>CONNECT WITH US</h3>

          <a href="https://www.linkedin.com/">LinkedIn</a>

      </div>

      <div className="locations">
        <h3>CALIFORNIA</h3>
        <p>Phone: (650) 830-1401</p>

        <h3>Austria</h3>
        <p>Phone: (678) 131-0082</p>
      </div>

      <div className="footer-links">
        <ul>
          <li><a href="#">WHY WE’RE DIFFERENT</a></li>
          <li><a href="#">WHAT WE DO</a></li>
          <li><a href="#">AREAS SERVED</a></li>
          <li><a href="#">CAREERS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>

      <div className="copyright">
        <p>© 2023 GantarCooperations</p>
        <p>Privacy | Terms | Cookie Policy | Accessibility Statement | Environmental Sustainability Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
