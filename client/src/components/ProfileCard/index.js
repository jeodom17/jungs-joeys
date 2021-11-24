
import React from "react";
// import { Link } from "react-router-dom";
// import { Sidenav } from "materialize-css";
import profileImage from '../../assets/image.png';


export default function SideNav() {
  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col s3 body-font">
      <header className="clearfix mt-4">
        <h1>ReactJs Users Cards</h1>
      </header>
      <div className="clearfix">
        <div className="row">
            <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={profileImage}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    CARD Title
                  </h5>
                  <p className="card-text">
                   <span className="location">Location</span> 
                    <br />
                    <span className="phone">Phone :</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
    
      </div> 
      </div>
    </div> 
    </div>       
    </>
  );
  }