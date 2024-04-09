import "./Contact.css";
const Contact = () => {
  return (
    <div className="app-contact">
      <div className="title">
        <span>Contact</span>
        <hr className="about-line" />
      </div>
      <section className="contact-block">
        <div className="txtBlock">
          <p>
            I am always open to work on a new project or discuss a partnership.{" "}
          </p>
        </div>
        <form className="contact-info">
          <div>
            <label>Name*</label>
            <input type="text" />
          </div>
          <div>
            <label>Email*</label>
            <input type="email" />
          </div>
          <div>
            <label>Message*</label>
            <input type="text" />
          </div>
          <div className="submitBtn-block">
            <button>submit</button>
          </div>
        </form>
      </section>
      <footer>
        <span>© 2024 Giorgi Paksashvili ( Own Portfolio ).</span>
      </footer>{" "}
    </div>
  );
};

export default Contact;
