import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./CalendarDetail.Module.css";
import Loading from "../Loading/Loading";
const CalendarDetail = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      const ref = doc(db, "calendar", id);
      const data = [];
      getDoc(ref).then((snap) => {
        if (snap.exists) {
          data.push(snap.data());
        } else {
          console.log("error");
        }
        setBlogs(data);
      });
    }, 3000);
  }, [id]);

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
        <div className="container calendar-detail-container">
          {blogs.map((blog) => (
            <div key={id} className="calendar-detail-body">
              <h1>{blog.program}</h1>
              <p className="time">
                {new Date(blog.start.seconds * 1000).toLocaleString()} -{" "}
                {new Date(blog.end.seconds * 1000).toLocaleString()}{" "}
              </p>
              <p>{blog.aciklama}</p>

              {blog.link && (
                <div className="calendar-detail-link-div">
                  <a href={blog.link} className="calendar-detail-link">
                    Detayları görüntülemek için tıklayınız.
                  </a>
                </div>
              )}
              {!blog.link && <div className="calendar-detail-link-div2"></div>}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CalendarDetail;
