
import React from "react";
// import { Link } from "react-router-dom";
// import { Sidenav } from "materialize-css";
import profileImage from '../../assets/image.png';
import "./style.css"

// const styles = {
//     phoneStyle: {
//         "color": "green"
//     }
// }

export default function SideNav() {
  return (
    <>
    <div className="row">
      <div className="col s3 body-font">
      <header className="clearfix mt-4">
        <h3>User Name </h3>
      </header>
      <div className="clearfix">
        <div className="row">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={profileImage}
                      className="card-img-top"
                      alt="profile-pic"
                    />
                  </div>
                  <h3 className="card-title">
                    CARD Title
                  </h3>
                  <p className="card-text">
                   <span className="location" style={{"color":"red"}}>Location</span> 
                    <br />
                    <span className="phone" >Phone :</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div> 
      </div>
    </>
  );
  }