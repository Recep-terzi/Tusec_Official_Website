import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarPage.Module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loading from "../Loading/Loading";
import "alertifyjs/build/css/alertify.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarPage = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      const ref = collection(db, "calendar");
      getDocs(ref).then((snap) => {
        let result = [];

        snap.forEach((doc) => {
          result.push({
            ...doc.data(),
            id: doc.id,
            start: doc.get("start").toDate(),
            end: doc.get("end").toDate(),
            title: doc.get("program"),
          });
        });

        setDocuments(result);
      });
    }, 2000);
  }, []);

  // const doubleClick = ({ id }) => {
  //   const ref = doc(db, "calendar", id);
  //   getDoc(ref).then((snap) => {
  //     if (snap.exists) {
  //       setHrefLink(snap.data());

  //     } else {
  //       console.log("error");
  //     }
  //   });

  //   alertify.alert(
  //     "TUSEC Program Rehberi",
  //     ` Daha detaylı bilgiye ulaşmak için lütfen ilgili programa bir kere daha double click yapınız. `,
  //     function () {
  //       alertify.success("Double Click Yapınız.");
  //     }
  //   );
  // };
  const route = ({ id }) => {
    window.location.replace(`/calendar/${id}`);
    
  };
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
        <div
          className="container"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
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
              Calendar
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
            <Calendar
              localizer={localizer}
              events={documents}
              id={documents.id}
              onDoubleClickEvent={({id}) => {
                route({id})
              }}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 550 }}
            />
          </div>
          <div className="detail-text">Detayları görmek için görmek istediğiniz program'a çift tıklayınız.</div>
        </div>
      )}
    </>
  );
};

export default CalendarPage;
