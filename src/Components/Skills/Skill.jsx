import React from "react";
import "./Skill.css";
import html from "../../assets/htm.jpg";
import css from "../../assets/css.jpg";
import js from "../../assets/js.jpg";
import reactjs from "../../assets/reactjs.png";
import python from "../../assets/python.jpg";
/*import webdesign from '../../assets/website.jpg'
import mobile from '../../assets/mobile.jpg'
import ecom from '../../assets/e-com.jpg'*/

const Skill = () => {
  return (
    <section id="skills">
      <span className="titlename">Technical Skills</span>
      <br />
      <span className="des">
        Hello! I'm passionate about creating delightful and efficient user
        experiences through web development. My journey began with a fascination
        for crafting interactive and responsive applications. I specialize in
        React.js, combining a strong foundation in HTML, CSS, and JavaScript to
        bring ideas to life
      </span>
      <br />
      <div className="skillbars">
        <div className="skillbar">
          <img src={html} alt="" className="skillimg" />
          <div className="skilltxt">
            <h2>HTML</h2>
            <p>
              I possess expertise in HTML, the fundamental language for web
              development, and have successfully completed a shopping cart
              project.HTML is the universal markup language for the Web. HTML
              lets you format text, add graphics, create links, input forms,
              frames and tables, etc., and save it all in a text file that any
              browser can read and display.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={css} alt="" className="skillimg" />
          <div className="skilltxt">
            <h2>CSS</h2>
            <p>
              Proficient in CSS, I leverage its capabilities to enhance web
              content, ensuring visually appealing designs. With expertise in
              formatting text, incorporating graphics, and implementing
              responsive layouts, I create seamless and visually appealing user
              interfaces. My understanding of CSS allows me to optimize the
              presentation of HTML elements, contributing to an enhanced and
              engaging user experience.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={js} alt="" className="skillimg" />
          <div className="skilltxt">
            <h2>JAVASCRIPT</h2>
            <p>
              JavaScript is a text-based programming language utilized for both
              client-side and server-side operations, enabling the creation of
              interactive web pages. As one of the three fundamental
              technologies of the World Wide Web, alongside HTML and CSS, I have
              applied JavaScript extensively in the development of a shopping
              cart project.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={reactjs} alt="" className="skillimg" />
          <div className="skilltxt">
            <h2>REACT JS</h2>
            <p>
              I already possess a foundational understanding of React.js, and
              while I haven't achieved complete mastery, I am confident that I
              can thoroughly grasp React.js in the coming days. I have applied
              this knowledge in building my portfolio website, and as a result,
              I can confidently state that I will master React.js soon.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={python} alt="" className="skillimg" />
          <div className="skilltxt">
            <h2>PYTHON</h2>
            <p>
              I have successfully completed my Python course and acquired
              proficiency in the Python programming language. Python, known for
              its straightforward syntax and ease of understanding, has become a
              language I am well-versed in. Additionally, I have applied my
              skills in creating a coffee shop project using the Django
              framework. The Django framework comes with an automatic admin
              site, eliminating the need for manual creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
