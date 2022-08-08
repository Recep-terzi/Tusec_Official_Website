import React, { useState, useRef, useEffect } from "react";
import "../Home/Home.Module.css";
import floot from "../../assets/floot.jpg";

import { init } from "ityped";
const Project = () => {
  const textRef = useRef();
  const textRef2= useRef();
  const textRef3= useRef();
  useEffect(() => {
    init(textRef3.current, {
      showCursor: true,
      backDelay: 1500,
      startDelay: 100,
      cursorChar:"┃",
      disableBackTyping:true,
      typeSpeed: 50,
      strings: [" ──(root㉿kali)-[/home/kali] └─ "],
    })
    
  }, []);
  useEffect(() => {
    setTimeout(() => {init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      startDelay: 100,
      cursorChar:"┃",
      disableBackTyping:true,
      typeSpeed: 50,
      strings: ["# TUSEC'e Hoşgeldiniz. Biz Kimiz ?"],
    });},3000)
  }, []);
 
  useEffect(() => {
    setTimeout(() => {init(textRef2.current, {
      showCursor: true,
      backDelay: 1500,
      startDelay: 100,
      cursorChar:"┃",
      disableBackTyping:true,
      typeSpeed: 50,
      strings: ["TUSEC'in amacı başta Bilişim Sistemleri ve Teknolojisi öğrencileri olmak üzere tüm KYÇUBYO öğrencilerini güncel teknolojileri siber uzayı hakkında temelden ileri düzeye doğru Siber Güvenlikeğitimleri, panelleri, konferansları, workshopları, bootcamplerive staj imkanları gibi faaliyetler ve imkanlar sağlamaktadır.Hızla gelişen teknoloji dünyasında siber ihtiyaçta artmaktadır bubağlamda siber kültür ve genel siber güvenlik eğitimleri vegereksinimleri kümelenme üyelerine temelden en doğru şekildeaşılamayı hedeflemektedir Cumhur Başkanlığı Savunma Sanayi Bakanlığı, Dijital Dönüşüm Ofisi Bakanlığı himayesi altındkuracağımız TUSEC öğrenci topluluğu Türkiye Siber Güvenlik Kümelenmesi paydaşı olması hem okulumuz bünyesinde hem de Üniversite bünyesinde staj ve eğitim imkanları sağlamaktadır."],
    });},8000)
    
  }, []);

  
  return (
    <>
      <div className=" metin-row">

        <div
          className=" tirtik tirtik2"
          style={{
            backgroundColor: "#000",
            color: "#06FF06",
            fontWeight: "bold",
          }}
        >
          <ul style={{display:"flex", textAlign:"center", listStyle:"none",justifyContent:"space-between",backgroundColor:"#06FF06",marginTop:"80px",height:"30px"}}>
            <li style={{color:"black"}}>GNU TUSEC</li>
            <li style={{color:"black"}}>Trakya University</li>
            <li style={{color:"black"}}>Cyber Security</li>
          </ul>
          <p>
           <span ref={textRef3}></span><br /> <span style={{marginLeft:"40px"}} ref={textRef}></span> <br /> <span style={{marginLeft:"40px"}} ref={textRef2}></span>
          </p>
          <div className="row">
            <div className="col"><span style={{backgroundColor:"#06FF06",color:"black",padding:"2px"}}>^G</span> Get Help</div>
            <div className="col"><span style={{backgroundColor:"#06FF06",color:"black",padding:"2px"}}>^O</span> WriteOut</div>
            <div className="col"><span style={{backgroundColor:"#06FF06",color:"black",padding:"2px"}}>^R</span> Read File</div>
            <div className="col"><span style={{backgroundColor:"#06FF06",color:"black",padding:"2px"}}>^Y</span> Prev Page</div>
            <div className="col"><span style={{backgroundColor:"#06FF06",color:"black",padding:"2px",marginLeft:"-5px",paddingRight:"5px"}}>^K</span> Cut Text</div>
          </div>
          <div className="row">
            <div className="col"><span style={{backgroundColor:"#06FF06",color:"black",padding:"2px",marginLeft:"-35px"}}>^X</span> Exit</div>
            <div className="col"><span style={{backgroundColor:"#06FF06",color:"black",padding:"2px",marginLeft:"-4px",paddingRight:"4px"}}>^V</span> Where Is</div>
            <div className="col"><span style={{backgroundColor:"#06FF06",color:"black",padding:"2px",marginLeft:"-17px",paddingRight:"5px"}}>^J</span> Justify</div>
            <div className="col"><span style={{backgroundColor:"#06FF06",color:"black",padding:"2px",marginLeft:"-15px",paddingRight:"2px"}}>^K</span> Execute</div>
            <div className="col"><span style={{backgroundColor:"#06FF06",color:"black",padding:"2px"}}>^M</span> Set Mark</div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Project;
