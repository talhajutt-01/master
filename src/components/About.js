import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`, // Replace with your image file
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };
  return (
    <div className="container-fluid" style={backgroundImageStyle}>
      <div className="row">
        <div className="col-lg-4 text-center d-flex flex-column justify-content-center align-items-center vh-100">
          <h1 className="text-primary mt-4 fw-bolder">Talha Bin Niaz</h1>
          <small className="text-white">Software Engineer/Developer</small>
          <p className="text-white text-start"> 
            Greetings! I'm a highly motivated MERN stack developer with a
            relentless passion for technology and an insatiable appetite for
            learning. My journey in the world of web development has equipped me
            with a robust skill set encompassing MongoDB, Express.js, React.js,
            Node.js, and more. Armed with a degree in BSCS, I
            bring a solid educational foundation to my work. Throughout my
            academic journey, I've undertaken projects that not only showcase my
            technical prowess but also highlight my problem-solving abilities.
            In my professional journey, I've had the privilege of contributing
            to various projects, each one an opportunity to refine my skills and
            deliver solutions that matter. From crafting responsive user
            interfaces to diving into the intricacies of server-side
            development, I've embraced the challenges that come with MERN stack
            development. 
          </p>
        </div>
        <div className="col-lg-4 text-center d-flex flex-column justify-content-center align-items-center vh-100">
          <img
            src={process.env.PUBLIC_URL + "/talha.png"}
            className="img-fluid mx-auto d-block mt-4 rounded"
            alt="Talha's pic"
          />
        </div>
        <div className="col-lg-4 text-center d-flex flex-column justify-content-center align-items-center vh-100">
          <h3 className="text-white">Address:</h3>
          <p className="text-white">
            Luck Line Near CSD Mall Cavalary Ground Lahore Cantt
          </p>
          <h3 className="text-white">Contact:</h3>
          <p className="text-white"> Phone No: +923174834674</p>
          <h3 className="text-white">Email:</h3>
          <p className="text-white">Talhaj928@gmail.com</p>
          <a
            href="https://wa.me/+923174834674?text=Hi"
            className="btn btn-success mt-2"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/talha-bin-niaz-8b3958243"
            className="btn btn-primary mt-2"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/talhajutt-01"
            className="btn btn-dark mt-2"
          >
            <i className="fab fa-github"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
