import React, {  useRef, useEffect } from "react";
import "../Home/Home.Module.css";
import "../Project/Project.Module.css";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CloseIcon from "@mui/icons-material/Close";
import tusecsvg from "../../assets/tusec2-removebg-preview.svg";
import { init } from "ityped";
const Project = () => {
  const textRef = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const textRef4 = useRef();
  useEffect(() => {
    init(textRef4.current, {
      showCursor: true,
      backDelay: 1500,
      startDelay: 100,
      cursorChar: "┃",
      disableBackTyping: true,
      typeSpeed: 30,
      strings: ["#!/bin/bash"],
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      init(textRef3.current, {
        showCursor: true,
        backDelay: 1500,
        startDelay: 100,
        cursorChar: "┃",
        disableBackTyping: true,
        typeSpeed: 30,
        strings: [" ──(root㉿kali)-[/home/kali] └─ "],
      });
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        startDelay: 100,
        cursorChar: "┃",
        disableBackTyping: true,
        typeSpeed: 30,
        strings: ["# TUSEC'e Hoşgeldiniz. Biz Kimiz ?"],
      });
    }, 6000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      init(textRef2.current, {
        showCursor: true,
        backDelay: 1500,
        startDelay: 100,
        cursorChar: "┃",
        disableBackTyping: true,
        typeSpeed: 30,
        strings: [
          "TUSEC'in amacı başta Bilişim Sistemleri ve Teknolojisi öğrencileri olmak üzere tüm KYÇUBYO öğrencilerini güncel teknolojileri siber uzayı hakkında temelden ileri düzeye doğru Siber Güvenlik eğitimleri, panelleri, konferansları, workshopları, bootcamplerive staj imkanları gibi faaliyetler ve imkanlar sağlamaktadır.Hızla gelişen teknoloji dünyasında siber ihtiyaçta artmaktadır bu bağlamda siber kültür ve genel siber güvenlik eğitimleri ve gereksinimleri kümelenme üyelerine temelden en doğru şekilde aşılamayı hedeflemektedir. Cumhur Başkanlığı Savunma Sanayi Bakanlığı, Dijital Dönüşüm Ofisi Bakanlığı himayesi altında kuracağımız TUSEC öğrenci topluluğu Türkiye Siber Güvenlik Kümelenmesi paydaşı olması hem okulumuz bünyesinde hem de Üniversite bünyesinde staj ve eğitim imkanları sağlamaktadır.",
        ],
      });
    }, 10000);
  }, []);

  return (
    <>
      <div className=" metin-row">
        <div
          style={{
            backgroundColor: "#E4E0E0",
            height: "30px",
            display: "flex",
            textAlign: "center",
            listStyle: "none",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "30px" }}>
            <img
              src={tusecsvg}
              style={{ height: "30px", width: "30px" }}
              alt="/"
            ></img>
            <span style={{ fontWeight: "bold" }}> root@TUSEC:~</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "end",
            }}
          >
            <ul
              style={{
                display: "flex",
                textAlign: "center",
                listStyle: "none",
                marginTop: "7px",
              }}
            >
              <li style={{ marginRight: "25px" }} className="icon-hover">
                <HorizontalRuleIcon />
              </li>
              <li style={{ marginRight: "25px" }} className="icon-hover">
                <CropSquareIcon />
              </li>
              <li className="icon-hover" style={{ marginRight: "5px" }}>
                <CloseIcon />
              </li>
            </ul>
          </div>
        </div>
        <div
          className=" tirtik tirtik2"
          style={{
            backgroundColor: "#E4E0E0",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          <ul
            style={{
              display: "flex",
              textAlign: "center",
              listStyle: "none",
              justifyContent: "space-between",
              backgroundColor: "#000",
              height: "30px",
            }}
          >
            <li className="pencere-left-text">GNU TUSEC</li>
            <li className="pencere-left-text">Trakya University</li>
            <li  className="pencere-left-text pencere-left-last-text">
              Cyber Security
            </li>
          </ul>
          <p>
            <span ref={textRef4} className="ref-text"></span>
            <br />
            <br />
            <br />
            <br />
            <span ref={textRef3} className="ref-text"></span>
            <br /> <span
              className="ref-text ml-ref-text"
              
              ref={textRef}
            ></span>{" "}
            <br /> <span  ref={textRef2} className="ref-text ml-ref-text"></span>
          </p>
          <div>
            <div className="row pencere-alt">
              <div className="col">
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                    padding: "2px",
                  }}
                >
                  ^G
                </span>{" "}
                Get Help
              </div>
              <div className="col">
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                    padding: "2px",
                  }}
                >
                  ^O
                </span>{" "}
                WriteOut
              </div>
              <div className="col">
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                    padding: "2px",
                  }}
                >
                  ^R
                </span>{" "}
                Read File
              </div>
              <div className="col">
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                    padding: "2px",
                  }}
                >
                  ^Y
                </span>{" "}
                Prev Page
              </div>
              <div className="col">
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                    padding: "2px",
                    marginLeft: "-5px",
                    paddingRight: "5px",
                  }}
                >
                  ^K
                </span>{" "}
                Cut Text
              </div>
            </div>
            <div className="row last-row pencere-alt">
              <div className="col">
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                    padding: "3px",
                    marginLeft: "-35px",
                  }}
                >
                  ^X
                </span>{" "}
                Exit
              </div>
              <div className="col">
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                    padding: "2px",
                    marginLeft: "-4px",
                    paddingRight: "4px",
                  }}
                >
                  ^V
                </span>{" "}
                Where Is
              </div>
              <div className="col">
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                    padding: "2px",
                    marginLeft: "-17px",
                    paddingRight: "5px",
                  }}
                >
                  ^J
                </span>{" "}
                Justify
              </div>
              <div className="col">
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                    padding: "2px",
                    marginLeft: "-15px",
                    paddingRight: "2px",
                  }}
                >
                  ^K
                </span>{" "}
                Execute
              </div>
              <div className="col">
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                    padding: "1px",
                  }}
                >
                  ^M
                </span>{" "}
                Set Mark
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
