import React, { useState, useRef, useEffect } from "react";
import "../Home/Home.Module.css";
import '../Project/Project.Module.css'
import floot from "../../assets/floot.jpg";
import DevicesIcon from '@mui/icons-material/Devices';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
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
      strings: ["TUSEC'in amacı başta Bilişim Sistemleri ve Teknolojisi öğrencileri olmak üzere tüm KYÇUBYO öğrencilerini güncel teknolojileri siber uzayı hakkında temelden ileri düzeye doğru Siber Güvenlik eğitimleri, panelleri, konferansları, workshopları, bootcamplerive staj imkanları gibi faaliyetler ve imkanlar sağlamaktadır.Hızla gelişen teknoloji dünyasında siber ihtiyaçta artmaktadır bu bağlamda siber kültür ve genel siber güvenlik eğitimleri ve gereksinimleri kümelenme üyelerine temelden en doğru şekilde aşılamayı hedeflemektedir. Cumhur Başkanlığı Savunma Sanayi Bakanlığı, Dijital Dönüşüm Ofisi Bakanlığı himayesi altında kuracağımız TUSEC öğrenci topluluğu Türkiye Siber Güvenlik Kümelenmesi paydaşı olması hem okulumuz bünyesinde hem de Üniversite bünyesinde staj ve eğitim imkanları sağlamaktadır."],
    });},8000)
    
  }, []);

  
  return (
    <>
      <div className=" metin-row">
        <div style={{backgroundColor:"#E4E0E0",height:"30px",display:"flex", textAlign:"center", listStyle:"none",justifyContent:"space-between"}}>
        <div style={{marginLeft:"30px"}}>
        <DevicesIcon sx={{mr:1}} /> <span style={{fontWeight:"bold"}}> root@TUSEC:~</span>
          </div>
          <div style={{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"end"}}>
            <ul style={{display:"flex",textAlign:"center",listStyle:"none",marginTop:"7px"}}>
              <li style={{marginRight:"25px"}} className="icon-hover"><HorizontalRuleIcon /></li>
              <li style={{marginRight:"25px"}} className="icon-hover"><CropSquareIcon /></li>
              <li className="icon-hover" style={{marginRight:"5px"}}><CloseIcon /></li>
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
          
          <ul style={{display:"flex", textAlign:"center", listStyle:"none",justifyContent:"space-between",backgroundColor:"#000",height:"30px"}}>
            <li style={{color:"white"}}>GNU TUSEC</li>
            <li style={{color:"white"}}>Trakya University</li>
            <li style={{color:"white",marginRight:"10px"}}>Cyber Security</li>
          </ul>
          <p>
           <span ref={textRef3}></span><br /> <span style={{marginLeft:"40px"}} ref={textRef}></span> <br /> <span style={{marginLeft:"40px"}} ref={textRef2}></span>
          </p>
          <div>
          <div className="row">
            <div className="col"><span style={{backgroundColor:"#000",color:"white",padding:"2px"}}>^G</span> Get Help</div>
            <div className="col"><span style={{backgroundColor:"#000",color:"white",padding:"2px"}}>^O</span> WriteOut</div>
            <div className="col"><span style={{backgroundColor:"#000",color:"white",padding:"2px"}}>^R</span> Read File</div>
            <div className="col"><span style={{backgroundColor:"#000",color:"white",padding:"2px"}}>^Y</span> Prev Page</div>
            <div className="col"><span style={{backgroundColor:"#000",color:"white",padding:"2px",marginLeft:"-5px",paddingRight:"5px"}}>^K</span> Cut Text</div>
          </div>
          <div className="row last-row">
            <div className="col"><span style={{backgroundColor:"#000",color:"white",padding:"3px",marginLeft:"-35px"}}>^X</span> Exit</div>
            <div className="col"><span style={{backgroundColor:"#000",color:"white",padding:"2px",marginLeft:"-4px",paddingRight:"4px"}}>^V</span> Where Is</div>
            <div className="col"><span style={{backgroundColor:"#000",color:"white",padding:"2px",marginLeft:"-17px",paddingRight:"5px"}}>^J</span> Justify</div>
            <div className="col"><span style={{backgroundColor:"#000",color:"white",padding:"2px",marginLeft:"-15px",paddingRight:"2px"}}>^K</span> Execute</div>
            <div className="col"><span style={{backgroundColor:"#000",color:"white",padding:"1px"}}>^M</span> Set Mark</div>
          </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
