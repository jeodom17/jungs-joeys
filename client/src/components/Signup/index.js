
//^ Imports below

import React, { Component } from "react";
import "./style.css"

//* Sign up Form
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="sign">
        <div className="formCenter">
          <form onSubmit={this.handleSubmit} className="formFields">
            <div className="formField">
              <label className="formFieldLabel" htmlFor="name">
                UserName
              </label>
              <input
                type="name"
                id="name"
                className="formFieldInput"
                placeholder="Enter your USERNAME"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                EMail Address
              </label>
              <input
                type="name"
                id="email"
                className="formFieldInput"
                placeholder="Enter your EMAIL"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your PASSWORD"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>


            <div className="formField">
              <button className="formFieldButton">Sign Up</button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUpForm;
