import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarPage.Module.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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

const events = [
  {
    title: "Büyük Toplantı",
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
  {
    title: "Proje Toplantı",
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 10),
  },
  {
    title: "Şirket Toplantı",
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 22),
  },
];

const CalendarPage = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
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

      <div >
        <LocalizationProvider dateAdapter={AdapterDateFns} >
          <Stack spacing={3} >
            <div className="calendar-div"><TextField
              id="outlined-basic"
              label="Açıklama"
              className="input-calendar"
              variant="outlined"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />

            <DesktopDatePicker
              label="Başlangıç Tarihi"
              inputFormat="MM/dd/yyyy"
              value={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start: start })}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="Bitiş Tarihi"
              inputFormat="MM/dd/yyyy"
              className="input-calendar"
              value={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end: end })}
              renderInput={(params) => <TextField {...params} />}
            />
            <Button variant="contained" onClick={handleAddEvent}>
              {" "}
              Add Event{" "}
            </Button></div>
            
          </Stack>
        </LocalizationProvider>
      </div>

      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default CalendarPage;
