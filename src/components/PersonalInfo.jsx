import "./PersonalInfo.css";
import facebookIcon from "../assets/facebook.png";
import linkdInIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instragram.png";
import phoneIcon from "../assets/phoneIcon.png";
import emailIcon from "../assets/emailIcon.png";
import calendarIcon from "../assets/calendarIcon.png";
import locationIcon from "../assets/locationIcon.png";
import cvDown from "../assets/cv.png";
// import gitHubIcon from "../assets/mark-Github-24.jpeg";

const PersonalInfo = () => {
  return (
    <div className="personalInfo-block">
      <div className="personalInfo-content">
        <div className="personalInfo-name">
          <h3>Giorgi Paksashvili</h3>
          <div className="role-block">
            <h6>Beginner Fullstack Web Dev</h6>
          </div>
          <div className="icons-block">
            <div>
              <a href="https://www.facebook.com/giorgi.paqsashvili.12">
                <img src={facebookIcon} />
              </a>
            </div>
            {/* <div>
              <a href="https://www.facebook.com/giorgi.paqsashvili.12">
                <img src={gitHubIcon} className="github" />
              </a>
            </div> */}
            <div>
              <a href="https://www.instagram.com/gio_paksa/">
                <img src={instagramIcon} alt="linkInIcon" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/giorgi-paksashvili-a7a47b207/">
                <img src={linkdInIcon} alt="linkInIcon" />
              </a>
            </div>
          </div>
        </div>

        <div className="cart-block">
          <div className="img">
            <img src={phoneIcon} alt="" />
            <article>
              <p className="text">Phone</p>
              <p className="addText">599540412</p>
            </article>
          </div>{" "}
          <hr />
          <div className="email-block">
            <img src={emailIcon} alt="" />
            <article>
              <p className="email text">Email</p>
              <p className="addText">giorgi.paksashvili.2@btu.edu.ge</p>
            </article>
          </div>{" "}
          <hr />
          <div className="img">
            <img src={locationIcon} alt="" />
            <article>
              <p className="text">Location</p>
              <p className="addText addText1">
                Tbilisi, Georgia, Gldani second micro, Flat 84
              </p>
            </article>
          </div>
          <hr />
          <div className="img">
            <img src={calendarIcon} alt="" />
            <article>
              <p className="text">Birthday</p>
              <p className="addText">Dec 1, 2001</p>
            </article>
          </div>
        </div>
        <div className="buttons">
          <div>
            <img src={cvDown} />
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
