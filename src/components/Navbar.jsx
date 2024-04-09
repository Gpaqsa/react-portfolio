import "./Navbar.css";
import about from "../assets/about.png";
import resume from "../assets/resume1.png";
import Projects from "../assets/codesandbox.png";
import contact from "../assets/contactImg.png";

  
import { NavLink } from "react-router-dom";
const navLinkStyle = ({ isActive }) => ({
  borderRadius: isActive ? "12px" : "16px",
  background: isActive
    ? "linear-gradient(153deg, #fa5252 16.67%, #dd2476 100%)"
    : "transparent",
});

const Navbar = () => {
  return (
    <div className="navbar-menu">
      <NavLink to="/" className="current-about" style={navLinkStyle}>
        <section className="current-about">
          <img src={about} alt="" />
          <span>About</span>
        </section>
      </NavLink>

      <NavLink to="/resume" style={navLinkStyle}>
        <section>
          <img src={resume} alt="" />
          <span>Resume</span>
        </section>
      </NavLink>

      <NavLink to="/projects" style={navLinkStyle}>
        <section>
          <img src={Projects} alt="" />
          <span>Projects</span>
        </section>
      </NavLink>

      <NavLink to="/contact" style={navLinkStyle}>
        <section>
          <img src={contact} alt="" />
          <span>Contact</span>
        </section>
      </NavLink>
    </div>
  );
};

export default Navbar;
