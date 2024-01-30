import React, { useState } from "react";
import "./Contact.css";
import { BsSendFill } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const API = "http://localhost:8080/sendemail";

  //name, email, jobtypes, message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobtypes, setJobtypes] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtypes,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error);
        } else {
          toast.success("Your email has been sent!");
          setName("");
          setEmail("");
          setJobtypes("");
          setMessage("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="contact-form-image">
            <img src="/contact.jpg" alt=" imagen contacto" />
          </div>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Me</h5>
            </div>
            <form>
              <div className="contact-form">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="contact-form">
                <label className="form-label">E-mail</label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="contact-form">
                <label className="form-label">Job Types</label>
                <select
                  className="custom-select-tag"
                  value={jobtypes}
                  onChange={(e) => setJobtypes(e.target.value)}
                >
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Contract</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="contact-form">
                <label className="form-label">Message</label>
                <textarea
                  rows="4"
                  type="text"
                  className="form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="btn-submit" onClick={sendEmail}>
                <p>
                  Send <BsSendFill size={20} />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default Contact;
