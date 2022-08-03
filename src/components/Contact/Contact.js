import React,{useState} from "react";
import tusec2 from "../../assets/tusec2.png";
import "./Contact.Module.css";
import { TextField, Typography, Button } from "@mui/material";
const Contact = () => {
    const [email,setEmail] = useState('')
    const [konu,setKonu] = useState('')
    const [mesaj,setMesaj] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(email,konu,mesaj)
        setEmail('')
        setKonu('')
        setMesaj('')
        
    }
    const handleChange = (e) => {
        
    }

  return (
    <div className="container">
      <div className="row contact-row">
        <div className="col-md-6 contact-img-col">
          <img className="contact-tusec-img" src={tusec2} alt=""></img>
        </div>
        <form onSubmit={handleSubmit} className="col-md-6 contact-value">
          <Typography sx={{ fontSize: "40px", mt: 3 }} className="contact-text">
            İletişim Formu
          </Typography>
          <div className="contact-inputs">
            <TextField
              id="standard-basic"
              value={email}
              onChange={(e) => handleChange(setEmail(e.target.value))}
              label="E-posta Adresi"
              className="contact-input"
              sx={{ mb: 5, mt: 3 }}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Konu"
              sx={{ mb: 5 }}

              value={konu}
              onChange={(e) => handleChange(setKonu(e.target.value))}
              className="contact-input"
              variant="standard"
            />
            <TextField
              id="standart-multiline-static"
              label="Mesajınız"
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
              className="contact-input contact-btn"
              style={{ marginBottom: 40 }}
            >
              Gönder
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
