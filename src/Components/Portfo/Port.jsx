import React from "react";
import "./Port.css";
import webdesign from "../../assets/web design.jpg";
import stylish from "../../assets/stylish design.jpg";
import website from "../../assets/website.jpg";

const Port = () => {
  return (
    <section id="por">
      <span className="port-titlename">What I Do</span>
      <br />
      <span className="port-des">
        I can create websites because I have practical knowledge in front-end
        development. Additionally, I have created e-commerce shopping websites
        using front-end technologies.
      </span>
      <br />
      <div class="blog-box">
        <div class="blogimg">
          <img src={webdesign} alt="" className="portimg" />
        </div>
        <div class="b-details">
          <h4>E-Commerce Website</h4>
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of goods and services over the internet. These
            websites provide a virtual storefront where businesses or
            individuals can showcase their products or services, and customers
            can browse, select, and make purchases online. Key features of
            e-commerce websites include product catalogs, shopping carts, secure
            payment gateways, and order processing systems. The goal is to
            create a seamless and user-friendly experience that encourages
            visitors to make purchases.
          </p>
        </div>
      </div>
      <div class="blog-box">
        <div class="blogimg">
          <img src={website} alt="" className="portimg" />
        </div>
        <div class="b-details">
          <h4>Web Design</h4>
          <p>
            Web designers use tools like graphic design software, coding
            languages (HTML, CSS, JavaScript), and content management systems to
            create compelling and efficient websites. Continuous adaptation to
            evolving design trends and technologies is essential for staying
            relevant in the dynamic field of web design.
          </p>
        </div>
      </div>
      <div class="blog-box">
        <div class="blogimg">
          <img src={stylish} alt="" className="portimg" />
        </div>
        <div class="b-details">
          <h4>Web Developer</h4>
          <p>
            A web developer is a professional responsible for designing,
            building, and maintaining websites and web applications. This role
            involves both front-end development, focusing on the user interface
            and user experience, and back-end development, managing server-side
            functionalities and databases. Web developers use languages like
            HTML, CSS, JavaScript, and various frameworks to create responsive,
            visually appealing, and functional websites. They work on tasks such
            as coding, debugging, optimizing performance, ensuring cross-browser
            compatibility, and implementing security measures. Continuous
            learning is crucial in this dynamic field, and effective
            collaboration and communication skills are essential when working in
            teams. Overall, web developers play a key role in translating design
            and functionality requirements into live, interactive web
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Port;
