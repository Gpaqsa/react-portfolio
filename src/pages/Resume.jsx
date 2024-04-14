import "./Resume.css";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const Resume = () => {
  return (
    <div className="resume-box">
      <div className="title">
        <span>Resume</span>
        <hr className="about-line" />
      </div>
      <section>
        <div className="describeMe">
          <div className="education-block">
            <img src={icon3} />
            <h4>Education</h4>
          </div>
          <div className="experiance-block">
            <img src={icon4} />
            <h4>Experience</h4>
          </div>
        </div>
        <div className="mainArticle">
          <div>
            <span>2008-2020</span>
            <p>173rd public school</p>
          </div>
          <div>
            <span>2020-2024</span>
            <p>Business and Technology University</p>
            <span>Bachelor, Information of Technology</span>
          </div>
        </div>{" "}
        {/* <hr /> */}
      </section>
      <section className="addData">
        <div>
          <h4>Skills</h4>
          <ul>
            <li>Front-end development(React,HTML,CSS,JS)</li>
            <li>Back-end development(NodeJSExpress,PostMan)</li>
            <li>Cloud Deployment(AWS)</li>
            <li>NoSQL(MongoDB)</li>
            <li>Microservies Architecture(Docker Beginner)</li>
          </ul>
        </div>
        <div>
          <h4>Training And Course</h4>
          <ul>
            <li>PROFESSIONAL ORIENTATION MEETINGS (2020)</li>
            <li>SOFTWARE (2020)</li>
            <li>AMAZON WEB SERVICES Borcelle Studios (2020)</li>
            <li>WEB DEVELOPMENT (2020)</li>
          </ul>
        </div>
      </section>

      <footer>
        <span>© 2024 Giorgi Paksashvili ( Own Portfolio ).</span>
      </footer>
    </div>
  );
};

export default Resume;
