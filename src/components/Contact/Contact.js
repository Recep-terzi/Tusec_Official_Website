import React, { useState, useEffect } from "react";
import tusec2 from "../../assets/tusec2.png";
import "./Contact.Module.css";
import { TextField, Typography, Button } from "@mui/material";
import Loading from "../Loading/Loading";
import emailjs from "emailjs-com";
const Contact = ({ type, color }) => {
  const [email, setEmail] = useState("");
  const [konu, setKonu] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_szbko5d",
        "template_5mg3icl",
        e.target,
        "ROCPvsXvgpEVmGnb6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setEmail("");
    setKonu("");
    setMesaj("");
  };
  const handleChange = (e) => {};

  return (
    <>
      {!loading && (
        <Loading
          type={"spinningBubbles"}
          color={"black"}
          height={"7%"}
          width={"7%"}
        />
      )}
      {loading && (
        <>
          <div className="container">
            <div className="row contact-row">
              <div className="col-md-6 contact-img-col">
                <img className="contact-tusec-img" src={tusec2} alt=""></img>
              </div>
              <form onSubmit={sendEmail} className="col-md-6 contact-value">
                
                <div className="contact-inputs">
                  <TextField
                    id="standard-basic"
                    value={email}
                    name="email"
                    onChange={(e) => handleChange(setEmail(e.target.value))}
                    label="E-posta Adresi"
                    className="contact-input"
                    sx={{ mb: 5, mt: 3 }}
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Konu"
                    name="subject"
                    sx={{ mb: 5 }}
                    value={konu}
                    onChange={(e) => handleChange(setKonu(e.target.value))}
                    className="contact-input"
                    variant="standard"
                  />
                  <TextField
                    id="standart-multiline-static"
                    label="Mesajınız"
                    name="message"
                    value={mesaj}
                    onChange={(e) => handleChange(setMesaj(e.target.value))}
                    sx={{ mb: 5 }}
                    multiline
                    className="contact-input"
                    rows={4}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    value="Send Message"
                    className="contact-input contact-btn"
                    style={{ marginBottom: 40 }}
                  >
                    Gönder
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
