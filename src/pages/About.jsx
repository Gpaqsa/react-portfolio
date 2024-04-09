import "./About.css";
import icon from "../assets/icon.png";
import icon2 from "../assets/icon2.png";
const About = () => {
  return (
    <div className="about-box">
      <div className="title">
        <span>About Me</span>
        <hr className="about-line" />
      </div>
      <div className="describe">
        <p>
          As a full-stack developer, I have a solid foundation in both front-end
          and back-end development. Although I am currently lacking professional
          experience in the field, I am highly motivated to continue learning
          and expanding my skillset. I am confident that I can contribute to any
          development team and deliver high-quality results.
        </p>
      </div>
      <div>
        <span className="secondTitle">What I do!</span>
      </div>
      <div className="blocks">
        <section>
          <div className="icon">
            <img src={icon} />
          </div>
          <div className="smallDesc">
            <h4>App Development</h4>
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </span>
          </div>
        </section>
        <section>
          <div className="icon">
            <img src={icon2} />
          </div>
          <div className="smallDesc">
            <h4>Web Development</h4>
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </span>
          </div>
        </section>
      </div>
      <div className="clearBlock"></div>
      <footer>
        <span>© 2024 Giorgi Paksashvili ( Own Portfolio ).</span>
      </footer>{" "}
    </div>
  );
};

export default About;
