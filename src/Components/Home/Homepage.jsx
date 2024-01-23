import React from "react";
import "./Homepage.css";
import Typical from "react-typical";

const Homepage = () => {
  return (
    <section className="about">
      <div className="Profile-box">
        <div className="Profile-parent">
          <div className="Details">
            <div className="Profile-details-name">
              <span className="primary-text">
                {" "}
                Hello,I'M <span className="highlight-txt">Petchiammal</span>
              </span>
              <br />
            </div>
            <div className="role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Front-End Developer",
                      1000,
                      "React js Developer",
                      1000,
                      "Web Developer",
                      1000,
                    ]}
                  />
                </h1>
                <br />
                <span className="tagline">
                  Creating Responsive Website Using Both Front-End and Back-End
                  <br />
                </span>
              </span>
            </div>
            <br />
            <div className="optns">
              <a href="petchiammalcv.pdf" download="petchiammalcv.pdf">
                <button className="btn-highlight-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
