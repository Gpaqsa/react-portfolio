import "./Navbar.css";
import about from "../assets/about.png";
import resume from "../assets/resume1.png";
import works from "../assets/codesandbox.png";
import contact from "../assets/contactImg.png";
const Navbar = () => {
  return (
    <div className="navbar-menu">
      <section className="current-about">
        <img src={about} alt="" />
        <span>About</span>
      </section>
      <section>
        <img src={resume} alt="" />
        <span>Resume</span>
      </section>
      <section>
        <img src={works} alt="" />
        <span>Projects</span>
      </section>
      <section>
        <img src={contact} alt="" />
        <span>Contact</span>
      </section>
    </div>
  );
};

export default Navbar;
