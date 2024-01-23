import React from "react";
import "./AboutMe.css";
import petchiammalcv from "../../assets/petchiammalk.jpg";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <span className="abt-titlename">About Me</span>
      <br />
      <span className="abt-des">
        I can create websites because I have practical knowledge in front-end
        development. Additionally, I have created e-commerce shopping websites
        using front-end technologies.
      </span>
      <br />
      <div class="abt-box">
        <div class="abtimg">
          <img src={petchiammalcv} alt="" className="abttimg" />
        </div>
        <div class="abt-details">
          <h4>Professional Summary</h4>
          <p>
            Highly motivated and detail-oriented Web Developer, graduating in
            2023 with a solid foundation in HTML, CSS, and JavaScript.
            Possessing a strong academic background and a genuine passion for
            crafting efficient and reliable applications.Adaptable and capable
            of working both independently and collaboratively within a team
            environment to deliver high-quality solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
