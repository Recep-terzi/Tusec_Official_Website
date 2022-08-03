import React from "react";
import "./Home.Module.css";
import { motion } from "framer-motion";
import tusec from "../../assets/tusec4.png";
import tusec2 from "../../assets/tusec2.png";
import ders1 from "../../assets/ders1.jpeg";
import ders2 from "../../assets/ders2.jpeg";
import ders3 from "../../assets/ders3.jpeg";
import recep from "../../assets/recep.jpg";
import seyit from "../../assets/seyit.jpg";

const Home = () => {
  return (
    
    <>
      <div className="container">
        <div
          style={{
            marginTop: "30px",
            marginBottom: "50px",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src={tusec}
            className="tusec-img"
            alt = ""
          ></img>
        </div>
        <div
          className="row metin-row"
          
        >
          <div
            className="col-md-6 tirtik tirtik2"
            style={{ backgroundColor: "#E4E0E0", color: "#000" }}
          >
            <p
              
            >
              TUSEC'in amacı başta Bilişim Sistemleri ve Teknolojisi öğrencileri
              olmak üzere tüm KYÇUBYO öğrencilerini güncel teknolojileri siber
              uzayı hakkında temelden ileri düzeye doğru Siber Güvenlik
              eğitimleri, panelleri, konferansları, workshopları, bootcampleri
              ve staj imkanları gibi faaliyetler ve imkanlar sağlamaktadır.
              Hızla gelişen teknoloji dünyasında siber ihtiyaçta artmaktadır bu
              bağlamda siber kültür ve genel siber güvenlik eğitimleri ve
              gereksinimleri kümelenme üyelerine temelden en doğru şekilde
              aşılamayı hedeflemektedir Cumhur Başkanlığı Savunma Sanayi
              Bakanlığı, Dijital Dönüşüm Ofisi Bakanlığı himayesi altında
              kuracağımız TUSEC öğrenci topluluğu Türkiye Siber Güvenlik
              Kümelenmesi paydaşı olması hem okulumuz bünyesinde hem de
              Üniversite bünyesinde staj ve eğitim imkanları sağlamaktadır.
            </p>
          </div>
          <div className="col-md-6">
            <img src={tusec2}  className="tusec-img-2" alt=""></img>
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
        >
          <div
            style={{
              background: "gray",
              flex: "1",
              borderBottom: "1px solid black",
              height: "2px",
            }}
          />
          <span
            style={{
              paddingLeft: "16px",
              paddingRight: "16px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Klüp Üyeleri
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
        <div>
          <div className="row" style={{marginTop:"80px",marginBottom:"80px"}}>
          <div className="col-md-3">
              <div
                class="card"
                style={{
                  width: "18rem",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  boxShadow: "2px 4px 15px 0px rgba(0,0,0,0.75)",
                  borderRadius:"10px"
                }}
              >
                <img
                  className="card-img-top"
                  src={recep}
                  alt=""
                  style={{
                    width: "170px",
                    height: "170px",
                    borderRadius: "50%",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">Recep Terzi</h5>
                  <p class="card-text">Front-end Developer</p>
                  <ul class="social-icons" >
                    <li >
                      <a class="twitter" href="/" style={{background:"black"}}>
                        <i class="fa fa-twitter" ></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div><div className="col-md-3">
              <div
                class="card"
                style={{
                  width: "18rem",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  boxShadow: "2px 4px 15px 0px rgba(0,0,0,0.75)",
                  borderRadius:"10px"
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
                <div class="card-body">
                  <h5 class="card-title">Seyit Yusuf Baş</h5>
                  <p class="card-text">Cyber Security </p>
                  <ul class="social-icons" >
                    <li >
                      <a class="twitter" href="/" style={{background:"black"}}>
                        <i class="fa fa-twitter" ></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div><div className="col-md-3">
              <div
                class="card"
                style={{
                  width: "18rem",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  boxShadow: "2px 4px 15px 0px rgba(0,0,0,0.75)",
                  borderRadius:"10px"
                }}
              >
                <img
                  className="card-img-top"
                  src={recep}
                  alt=""
                  style={{
                    width: "170px",
                    height: "170px",
                    borderRadius: "50%",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">Recep Terzi</h5>
                  <p class="card-text">Front-end Developer</p>
                  <ul class="social-icons" >
                    <li >
                      <a class="twitter" href="/" style={{background:"black"}}>
                        <i class="fa fa-twitter" ></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div><div className="col-md-3">
              <div
                class="card"
                style={{
                  width: "18rem",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  boxShadow: "2px 4px 15px 0px rgba(0,0,0,0.75)",
                  borderRadius:"10px"
                }}
              >
                <img
                  className="card-img-top"
                  src={recep}
                  alt=""
                  style={{
                    width: "170px",
                    height: "170px",
                    borderRadius: "50%",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">Recep Terzi</h5>
                  <p class="card-text">Front-end Developer</p>
                  <ul class="social-icons" >
                    <li >
                      <a class="twitter" href="/" style={{background:"black"}}>
                        <i class="fa fa-twitter" ></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="/" style={{background:"black"}}>
                        <i class="fa fa-instagram"></i>
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
        >
          <div
            style={{
              background: "gray",
              flex: "1",
              borderBottom: "1px solid black",
              height: "2px",
            }}
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
        <div className="img-grid" style={{marginTop:"80px"}}>
          <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
            <motion.img
              src={ders1}
              alt="yüklenen resim"
              style={{ borderRadius: "10px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
          <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
            <motion.img
              src={ders2}
              alt="yüklenen resim"
              style={{ borderRadius: "10px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
          <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
            <motion.img
              src={ders3}
              alt="yüklenen resim"
              style={{ borderRadius: "10px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        </div>
        <div className="img-grid" style={{marginBottom:"80px"}}>
          <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
            <motion.img
              src={ders1}
              alt="yüklenen resim"
              style={{ borderRadius: "10px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
          <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
            <motion.img
              src={ders2}
              alt="yüklenen resim"
              style={{ borderRadius: "10px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
          <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
            <motion.img
              src={ders3}
              alt="yüklenen resim"
              style={{ borderRadius: "10px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
