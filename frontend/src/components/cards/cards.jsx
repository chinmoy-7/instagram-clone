import React from "react";
import home from '../../imgs/home.png'
import test from '../../imgs/test.JPG'
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
        <div className="box-bottom"></div>
      </div>
    </>
  );
}
