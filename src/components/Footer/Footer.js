import React from "react";
import "./Footer.Module.css";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Hakkımızda</h6>
            <p className="text-justify">
              {" "}
              Trakya Üniversitesi Security Keşan Yusuf Çapraz Uygulamalı
              Bilimler Yüksekokulu bünyesinde kurulmuş bir klüptür{" "}
            </p>
          </div>

          <div className="col-sm-12 col-md-6 hizli-link">
            <h6>Hızlı Linkler</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">Blog</a>
              </li>
              
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">Takvim</a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">İletişim</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a
                href="https://github.com/Recep-terzi"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "18px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Pyson✓{" "}
              </a>
              .
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="linkedin"
                  href="https://twitter.com/tusec22?t=dc3leR2l4q7YVBfnXBR6kg&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/company/tusec/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.youtube.com/channel/UC1iSsloM93pY8jCorCaybgg/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.instagram.com/tusec22/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.facebook.com/TUSEC-109724181836694"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.twitch.tv/tusec22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitch"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
