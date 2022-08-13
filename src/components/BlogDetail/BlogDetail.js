import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import tusec from "../../assets/tusec2.png";

import "./BlogDetail.Module.css";
import Loading from "../Loading/Loading";
const BlogDetail = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      const ref = doc(db, "blog", id);
      getDoc(ref).then((snap) => {
        if (snap.exists) {
          setBlogs(snap.data());
        } else {
          console.log("error");
        }
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
        <>
          {blogs && (
            <div className="detail-container container">
              <div className="row ">
                <div className="col-md-8">
                  <div>
                    <div className="baslik-div">
                      <h1>{blogs.title}</h1>
                    </div>
                    <div className="image-div">
                      <img src={blogs.image} alt="" />
                    </div>
                  </div>
                </div>{" "}
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
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Officiis, animi!
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
              <div className="content-div">
                <div className="row">
                  {/* <div className="col-md-2 sol-icon">
                    <img src={tusec} alt="" className="content-img" />
                    <p className="yazar">writing by {blogs.yazar}</p>
                  </div> */}
                  <div className="col-md-9 aciklama">
                    <h1>Haber Açıklamaları</h1>
                    <p>{blogs.aciklama}</p>
                  </div>
                  <div className="col-md-3 haber-etiketleri">
                    <h3> Haber Etiketleri</h3>
                    <ul>
                      {blogs.etiketler.map((etiket) => (
                        <li>
                          <span>{etiket}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BlogDetail;
