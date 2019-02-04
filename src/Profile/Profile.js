import React, { Component } from "react";
import "./Profile.css";
import love from "../images/love-button.png";
import next from "../images/next.png";


const Profile = props => {
  return (
    <div>
      <div className="row">
        <div class="row justify-content-between">
          <div className="col-2 ">
            <img alt="love" onClick={props.clickNext}  className="love" src={love} />
          </div>
          <div className="profImg col-8">
            <img alt="user" className="prof col" src={props.src} />
          </div>
          <div className="col-2">
            <img
              alt="love"
              className="love"
              src={next}
              onClick={props.clickNext}
            />
          </div>
        </div>
      </div>
      <div className="container info">
        <div className="col jumbotron">
          <span>
            <b>{props.name}</b>
          </span>
          <br />

          <div class="row detail justify-content-between">
            <div class=" col-4">
              <label>Age</label>
              <input placeholder={props.age} disabled/>
            </div>

            <div class="col-4">
              <label>Height</label>
              <input placeholder={props.height}  disabled/>
            </div>

            <div class=" col-4">
              <label>Location</label>
              <input placeholder={props.location} disabled/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
