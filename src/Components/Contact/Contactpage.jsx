import React from "react";
import "./Contactpage.css";

const Contactpage = () => {
  const form = React.createRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    formData.append("access_key", "b07cb0b3-4170-4c2c-94fc-61badc689c82");

    const json = JSON.stringify(Object.fromEntries(formData));

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Form submitted successfully!");
      //console.log("Success", res);
    } else {
      alert("Form submission failed");
      //console.error("Error", res);
    }
  };

  return (
    <section id="contactpage">
      <div id="contact">
        <h1 className="contact-title">Contact Me</h1>
        <span className="contact-desc">
          Please fill the form below to discuss any work opportunities
        </span>
        <br />
        <form className="contact-form" ref={form} onSubmit={onSubmit}>
          <input
            type="text"
            className="name"
            placeholder="Enter Your Name"
            name="to_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Enter Your Email"
            name="from_name"
            required
          />
          <textarea
            className="msg"
            rows="10"
            placeholder="Enter Your Message"
            name="message"
            required
          ></textarea>
          <button type="submit" className="submitbtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactpage;
