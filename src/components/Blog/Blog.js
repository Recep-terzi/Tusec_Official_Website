import React from "react";
import "./Blog.Module.css";
import tusec from "../../assets/tusec.png";
const Blog = () => {
  return (
    <div className="container blog-container">
      <div className="row">
        <div className="col-md-8">
          <div className=" haber-row">
            <div className="">
              <img
                src={
                  "https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/08/Google-Pixel-6a-inceleme.jpeg?resize=640%2C360&ssl=1"
                }
                className="haber-image"
                alt=""
              ></img>
            </div>
            <div className=" haber-col">
              <ul>
                <p className="tusec-text">TUSEC</p>
              </ul>
              <h4 className="haber-baslik"><a href="/" >Haber Başlık</a></h4>
              <p className="haber-aciklama">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, reprehenderit. Amet fuga aliquid magnam suscipit
                consectetur quibusdam praesentium, nulla beatae!
              </p>
              <p className="yazar">
                writing by Recep.
              </p>
            </div>
          </div>
          <div className="haber-row">
            <div className="">
              <img
                src={
                  "https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/08/Google-Pixel-6a-inceleme.jpeg?resize=640%2C360&ssl=1"
                }
                className="haber-image"
                alt=""
              ></img>
            </div>
            <div className=" haber-col">
              <ul>
                <p className="tusec-text">TUSEC</p>
              </ul>
              <h4 className="haber-baslik"><a href="/" >Haber Başlık</a></h4>
              <p className="haber-aciklama">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                eaque vitae porro nihil consectetur at voluptatibus officiis
                voluptatem, consequuntur modi.
              </p>
              <p className="yazar">
                writing by Recep.
              </p>
            </div>
          </div><div className="haber-row">
            <div className="">
              <img
                src={
                  "https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/08/Google-Pixel-6a-inceleme.jpeg?resize=640%2C360&ssl=1"
                }
                className="haber-image"
                alt=""
              ></img>
            </div>
            <div className=" haber-col">
              <ul>
                <p className="tusec-text">TUSEC</p>
              </ul>
              <h4 className="haber-baslik"><a href="/" >Haber Başlık</a></h4>
              <p className="haber-aciklama">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                eaque vitae porro nihil consectetur at voluptatibus officiis
                voluptatem, consequuntur modi.
              </p>
              <p className="yazar">
                writing by Recep.
              </p>
            </div>
          </div><div className="haber-row">
            <div className="">
              <img
                src={
                  "https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/08/Google-Pixel-6a-inceleme.jpeg?resize=640%2C360&ssl=1"
                }
                className="haber-image"
                alt=""
              ></img>
            </div>
            <div className=" haber-col">
              <ul>
                <p className="tusec-text">TUSEC</p>
              </ul>
              <h4 className="haber-baslik"><a href="/" >Haber Başlık</a></h4>
              <p className="haber-aciklama">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                eaque vitae porro nihil consectetur at voluptatibus officiis
                voluptatem, consequuntur modi.
              </p>
              <p className="yazar">
                writing by Recep.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 populer-haberler">
          <p className="populer-text">POPÜLER HABERLER</p>
          <ul className="haber-list">
            <li>
              <ul className="haber">
                <li className="haber-number">1</li>
                <li className="haber-text"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, tempora.</span></li>
              </ul>
            </li>
            <li>
              <ul className="haber">
                <li className="haber-number">2</li>
                <div className="deneme">
                    <li className="haber-text"><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, animi!</span></li>
                </div>
              </ul>
            </li> <li>
              <ul className="haber">
                <li className="haber-number">3</li>
                <li className="haber-text"><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, animi.</span></li>
              </ul>
            </li> <li>
              <ul className="haber">
                <li className="haber-number">4</li>
                <li className="haber-text"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, repellendus!</span></li>
              </ul>
            </li> <li>
              <ul className="haber border-none-haber">
                <li className="haber-number">5</li>
                <li className="haber-text"><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, explicabo?</span></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
