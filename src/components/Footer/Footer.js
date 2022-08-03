import React from "react";
import './Footer.Module.css'
const Footer = () => {
  return (
    <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>Hakkımızda</h6>
          <p class="text-justify"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, voluptatibus?
           Reiciendis facilis assumenda quae ad neque aspernatur ratione tempore temporibus eius placeat vero, similique
            a corrupti incidunt blanditiis consectetur doloribus! </p></div>

       

        <div class="col-xs-6 col-md-3" style={{justifyContent: 'center'}}>
          <h6>Hızlı Linkler</h6>
          <ul class="footer-links">
            <li><a href="http://scanfcode.com/about/">Hakkımızda</a></li>
            <li><a href="http://scanfcode.com/contact/">Projeler</a></li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Blog</a></li>
            <li><a href="http://scanfcode.com/privacy-policy/">İletişim</a></li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
       <a href="/" style={{fontSize:"18px",textDecoration:"none",fontWeight:"bold"}}> Pyson✓  </a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a class="twitter" href="/"><i class="fa fa-twitter"></i></a></li>
            <li><a class="linkedin" href="/"><i class="fa fa-linkedin"></i></a></li>
            <li><a class="linkedin" href="/"><i class="fa fa-youtube"></i></a></li>  
            <li><a class="linkedin" href="/"><i class="fa fa-instagram"></i></a></li>     
          </ul>
        </div>
      </div>
    </div>
</footer>
  );
};

export default Footer;
