import React, { useState, useEffect } from "react";
import "./Blog.Module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      const ref = collection(db, "blog");
      getDocs(ref).then((snap) => {
        let result = [];

        snap.forEach((doc) => {
          result.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        setBlogs(result);
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
        <div className="container blog-container">
          <div className="row">
            <div className="col-md-8">
              {blogs.map((blog) => (
                <div className=" haber-row" key={blog.id}>
                  <div className="">
                    <img src={blog.image} className="haber-image" alt=""></img>
                  </div>
                  <div className=" haber-col">
                    <ul>
                      <p className="tusec-text">TUSEC</p>
                    </ul>
                    <h4 className="haber-baslik">
                      <Link to={`/blogdetail/${blog.id}`}>{blog.title}</Link>
                    </h4>
                    <p className="haber-aciklama">{blog.aciklama}</p>
                    <p className="yazar">writing by {blog.yazar}.</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4 populer-haberler">
              <p className="populer-text">POPÜLER HABERLER</p>
              <ul className="haber-list">
                <li>
                  <ul className="haber">
                    <li className="haber-number">1</li>
                    <li className="haber-text">
                      <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Cupiditate, tempora.
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="haber">
                    <li className="haber-number">2</li>
                    <div className="deneme">
                      <li className="haber-text">
                        <span>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Officiis, animi!
                        </span>
                      </li>
                    </div>
                  </ul>
                </li>{" "}
                <li>
                  <ul className="haber">
                    <li className="haber-number">3</li>
                    <li className="haber-text">
                      <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur, animi.
                      </span>
                    </li>
                  </ul>
                </li>{" "}
                <li>
                  <ul className="haber">
                    <li className="haber-number">4</li>
                    <li className="haber-text">
                      <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eum, repellendus!
                      </span>
                    </li>
                  </ul>
                </li>{" "}
                <li>
                  <ul className="haber border-none-haber">
                    <li className="haber-number">5</li>
                    <li className="haber-text">
                      <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Enim, explicabo?
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
