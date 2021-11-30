import React, { useState, } from "react";
import { LOGIN_USER } from "../../utils/mutations";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';


const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error("error: ", e, " mutation error: ", error);
    }

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <form className="formFields" onSubmit={handleFormSubmit}>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Email
          </label>
          <input
            type="name"
            id="name"
            className="formFieldInput"
            placeholder="Your email"
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
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
          />
        </div>

        <div className="formField">
          <button
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
            variant="success"
            className="formFieldButton"
          >
            Log In
          </button>
        </div>
      </form>
    </div >
  );
};

export default Login;
