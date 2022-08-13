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
        <div className="container" style={{ marginTop: "100px" }}>
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

          <Calendar
            localizer={localizer}
            events={documents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          />
        </div>
      )}
    </>
  );
};

export default CalendarPage;
