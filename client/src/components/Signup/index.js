import React, { useState, useEffect } from "react";
import { ADD_USER } from "../../utils/mutations";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

//* Sign up Form
const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();


    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <form className="formFields" onSubmit={handleFormSubmit}>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Username
          </label>
          <input
            type="name"
            id="name"
            className="formFieldInput"
            placeholder="Enter username"
            name="name"
            onChange={handleInputChange}
            value={userFormData.username}
          />
        </div>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            Email
          </label>
          <input
            type="name"
            id="email"
            className="formFieldInput"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
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
            placeholder="Enter password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
          />
        </div>

        <div className="formField">
          <button
            // disabled={!(userFormData.email && userFormData.password && userFormData.username)}
            type="submit"
            variant="success"
            className="formFieldButton"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;