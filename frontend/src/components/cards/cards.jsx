import React from "react";
import home from "../../imgs/home.png";
import like from "../../imgs/like.png";
import comment from "../../imgs/comment.png";
import share from "../../imgs/share.png";
// import test from '../../imgs/test.JPG'
export default function Cards() {
  return (
    <>
      <div className="box">
        <div className="box-top">
          <div className="box-top-left">
            <img src={home} alt="logo" />
            <h4>Chinmoy Dehingia</h4>
          </div>
          <div className="box-top-right">
            <h2>...</h2>
          </div>
        </div>
        <div className="box-mid">
          <img src="" alt="dp" />
        </div>
        <div className="box-bottom">
          <div className="like-comment">
            <img src={like} alt="" />
            <img src={comment} alt="" />
            <img src={share} alt="" />
          </div>
          <div className="footer-content">
            <p>24 likes</p>
            <p>
              <strong>Username:</strong>Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Vel, exercitationem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
