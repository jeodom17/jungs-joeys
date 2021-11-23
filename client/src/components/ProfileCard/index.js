
import React from "react";
import { Sidenav } from "materialize-css";

export default function SideNav() {
  return (
    <>
    <div class="row">
        <div class="col s3 body-font">
        <div>
            <div>
            <img src="images/sample-1.jpg"></img>
            <p>Username</p>
            </div>
            <div>
            <p>Bio</p>
            </div>
            <div>
            <a href="#">This is a link</a>
            </div>
        </div>
        </div>
        <div class="col s9 body-font">
            <div>
                <p>My Posts:</p>
                <div class="collection">
                    <a href="#!" class="collection-item">Alvin</a>
                    <a href="#!" class="collection-item active">Alvin</a>
                    <a href="#!" class="collection-item">Alvin</a>
                    <a href="#!" class="collection-item">Alvin</a>
                </div>
            </div>
            <div>
                <p>Favorite Posts:</p>
                <div class="row">
                    <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
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