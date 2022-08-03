import React from "react";
import './Footer.Module.css'
const Footer = () => {
  return (
    <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>Hakkımızda</h6>
          <p className="text-justify"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, voluptatibus?
           Reiciendis facilis assumenda quae ad neque aspernatur ratione tempore temporibus eius placeat vero, similique
            a corrupti incidunt blanditiis consectetur doloribus! </p></div>

       

        <div className="col-sm-12 col-md-6 hizli-link" >
          <h6>Hızlı Linkler</h6>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/about/">Hakkımızda</a></li>
            <li><a href="http://scanfcode.com/contact/">Projeler</a></li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Blog</a></li>
            <li><a href="http://scanfcode.com/privacy-policy/">İletişim</a></li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          
          <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
       <a href="https://github.com/Recep-terzi" target="_blank" rel="noreferrer" style={{fontSize:"18px",textDecoration:"none",fontWeight:"bold"}}> Pyson✓  </a>.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
            <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
            <li><a className="linkedin" href="/"><i className="fa fa-youtube"></i></a></li>  
            <li><a className="linkedin" href="/"><i className="fa fa-instagram"></i></a></li>     
          </ul>
        </div>
      </div>
    </div>
</footer>
  );
};

export default Footer;
