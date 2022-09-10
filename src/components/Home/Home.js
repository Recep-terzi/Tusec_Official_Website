import React, { useState, useEffect } from "react";
import "./Home.Module.css";
import { motion } from "framer-motion";
import tusec from "../../assets/tusec2-removebg-preview.png";
import ders1 from "../../assets/ders1.jpeg";
import ders4 from "../../assets/ders4.jpg";
import ders5 from "../../assets/ders5.jpg";
import ders6 from "../../assets/ders6.jpg";
import ders2 from "../../assets/ders2.jpeg";
import ders3 from "../../assets/ders3.jpeg";
import seyit from "../../assets/seyit.jpg";
import furkan from "../../assets/furkan.jpg";
import deniz from "../../assets/deniz.jpg";
import ramazan from "../../assets/ramazan.jpg";
import merve from "../../assets/merve.jpg";
import sümeyye from "../../assets/sümeyye.jpg";
import Project from "../Project/Project";
import Loading from "../Loading/Loading";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <>
      {!loading && (
        <>
          <Loading
            type={"spinningBubbles"}
            color={"black"}
            height={"7%"}
            width={"7%"}
          />
        </>
      )}
      {loading && (
        <>
          <div className="bg-img">
            <div
              style={{
                marginTop: "30px",
                marginBottom: "50px",
                justifyContent: "center",
                textAlign: "center",
              }}
              className=""
            >
              <img src={tusec} className="tusec-img" alt=""></img>
              <p className="tusec-img-text">TRAKYA UNIVERSITY SECURITY</p>
            </div>
          </div>
          <div className="container">
            <div className="metin-row">
              <Project />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "40px",
              }}
              className=""
            >
              <div
                style={{
                  background: "gray",
                  flex: "1",
                  borderBottom: "1px solid black",
                  height: "2px",
                }}
                className=""
              />
              <span
                style={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Kulüp Üyeleri
              </span>
              <div
                style={{
                  background: "gray",
                  flex: "1",
                  borderBottom: "1px solid black",
                  height: "2px",
                }}
              />
            </div>
            <div className="">
              <div
                className="row tusec-kisiler"
                style={{ marginTop: "80px", marginBottom: "80px" }}
              >
                <div className="col-md-3">
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      boxShadow: "2px 4px 15px 0px rgba(0,0,0,0.75)",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={seyit}
                      alt=""
                      style={{
                        width: "170px",
                        height: "170px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Seyit Yusuf Baş</h5>
                      <p className="card-text">Cyber Security </p>
                      <ul className="social-icons">
                        <li>
                          <a
                            className="linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/seyit-yusuf-baş-17a501222/"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>

                        <li>
                          <a
                            className="github"
                            href="https://github.com/SeyhSeyit"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      boxShadow: "2px 4px 15px 0px rgba(0,0,0,0.75)",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={furkan}
                      alt=""
                      style={{
                        width: "170px",
                        height: "170px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">M. Furkan Saydam</h5>
                      <p className="card-text">Cyber Security</p>
                      <ul className="social-icons">
                        <li>
                          <a
                            className="linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/muhammet-furkan-saydam-11b55a1a0/"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="github"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/FurkanSaydam"
                          >
                            <i className="fa fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      boxShadow: "2px 4px 15px 0px rgba(0,0,0,0.75)",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={deniz}
                      alt=""
                      style={{
                        width: "170px",
                        height: "170px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Deniz</h5>
                      <p className="card-text">Cyber Security</p>
                      <ul className="social-icons">
                        <li>
                          <a
                            className="linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/dennisclk/"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>

                        <li>
                          <a
                            className="github"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/dennisclk"
                          >
                            <i className="fa fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      boxShadow: "2px 4px 15px 0px rgba(0,0,0,0.75)",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={ramazan}
                      alt=""
                      style={{
                        width: "170px",
                        height: "170px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Ramazan</h5>
                      <p className="card-text">Cyber Security</p>
                      <ul className="social-icons">
                        <li>
                          <a
                            className="linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/ramazantanrikulu/"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="github"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Ramazantanrikulu"
                          >
                            <i className="fa fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{ marginTop: "80px", marginBottom: "80px" }}
              >
                <div className="col-md-3">
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      boxShadow: "2px 4px 15px 0px rgba(0,0,0,0.75)",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={merve}
                      alt=""
                      style={{
                        width: "170px",
                        height: "170px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Merve Civan</h5>
                      <p className="card-text">Cyber Security</p>
                      <ul className="social-icons">
                        <li>
                          <a
                            className="linkedin"
                            href="https://www.linkedin.com/in/merve-civan-1a21bb233"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="github"
                            href="https://github.com/Freedom-c"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      boxShadow: "2px 4px 15px 0px rgba(0,0,0,0.75)",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={sümeyye}
                      alt=""
                      style={{
                        width: "170px",
                        height: "170px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Sümeyye Gümüş</h5>
                      <p className="card-text">Cyber Security</p>
                      <ul className="social-icons">
                        <li>
                          <a
                            className="linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/merve-civan-1a21bb233"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/sumeyyegms/sumeyyegms"
                          >
                            <i className="fa fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "40px",
              }}
              className=""
            >
              <div
                style={{
                  background: "gray",
                  flex: "1",
                  borderBottom: "1px solid black",
                  height: "2px",
                }}
                className=""
              />
              <span
                style={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Galeri
              </span>
              <div
                style={{
                  background: "gray",
                  flex: "1",
                  borderBottom: "1px solid black",
                  height: "2px",
                }}
              />
            </div>
            <div className="img-grid ">
              <motion.div
                className="img-wrap"
                layout
                whileHover={{ opacity: 1 }}
              >
                <Gallery>
                  <Item
                    original={ders1}
                    thumbnail={ders1}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={ders1} alt="" />
                    )}
                  </Item>
                </Gallery>
              </motion.div>
              <motion.div
                className="img-wrap"
                layout
                whileHover={{ opacity: 1 }}
              >
                <Gallery>
                  <Item
                    original={ders2}
                    thumbnail={ders2}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={ders2} alt="" />
                    )}
                  </Item>
                </Gallery>
              </motion.div>{" "}
              <motion.div
                className="img-wrap"
                layout
                whileHover={{ opacity: 1 }}
              >
                <Gallery>
                  <Item
                    original={ders3}
                    thumbnail={ders3}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={ders3} alt="" />
                    )}
                  </Item>
                </Gallery>
              </motion.div>
              <motion.div
                className="img-wrap"
                layout
                whileHover={{ opacity: 1 }}
              >
                <Gallery>
                  <Item
                    original={ders4}
                    thumbnail={ders4}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={ders4} alt="" />
                    )}
                  </Item>
                </Gallery>
              </motion.div>
              <motion.div
                className="img-wrap"
                layout
                whileHover={{ opacity: 1 }}
              >
                <Gallery>
                  <Item
                    original={ders5}
                    thumbnail={ders5}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={ders5} alt="" />
                    )}
                  </Item>
                </Gallery>
              </motion.div>
              <motion.div
                className="img-wrap"
                layout
                whileHover={{ opacity: 1 }}
              >
                <Gallery>
                  <Item
                    original={ders6}
                    thumbnail={ders6}
                    width="1024"
                    height="1200"
                  >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={ders6} alt="" />
                    )}
                  </Item>
                </Gallery>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
