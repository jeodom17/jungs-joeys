import React,{ useState, useEffect } from "react";
import Login from "../components/Login";
import SignUpForm from "../components/Signup";


const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//^ login schemas 
const FORM_DATA_LOGIN = {
  email: {
    value: '',
    label: 'Email',
    min: 7,
    max: 50,
    required: true,
    validator: {
      regEx: emailRegEx,
      error: 'Please insert valid email',
    },
  },
  password: {
    value: '',
    label: 'Password',
    min: 6,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Please insert valid password',
    },
  },
};

//* MIGHT NEED TO CHANGE THESE FIELDS BASED ON DB REQUIREMENTS
const FORM_DATA_SIGNUP = {
  username: {
    value: '',
    label: 'Username',
    min: 10,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Username fill correctly',
    },
  },
  email: {
    value: '',
    label: 'Email',
    min: 10,
    max: 36,
    required: true,
    validator: {
      regEx: emailRegEx,
      error: 'Email fill correctly',
    },
  },
  password: {
    value: '',
    label: 'Password',
    min: 6,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Password fill correctly',
    },
  },
};

export default function Account() {

  const [useLogin, setUseLogin] = useState(true);

  const [stateFormData, setStateFormData] = useState(FORM_DATA_LOGIN);
  const [stateFormError, setStateFormError] = useState([]);
  const [stateFormValid, setStateFormValid] = useState(false);
  const [stateFormMessage, setStateFormMessage] = useState({});
  const [loading, setLoading] = useState(false);

  function toggleLogin(toggleState) {
    setUseLogin(toggleState)
  }

  function onChangeHandler(e) {
    const { name, value } = e.currentTarget;

    setStateFormData({
      ...stateFormData,
      [name]: {
        ...stateFormData[name],
        value,
      },
    });

    //~ validation handler 
    validationHandler(stateFormData, e);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();

    let data = { ...stateFormData };

    data = { ...data, email: data.email.value || '' };

    data = { ...data, password: data.password.value || '' };

    const isValid = validationHandler(stateFormData);

    if (isValid) {
      //* Call an external API ?
      setLoading(!loading);

      //! THIS FETCH PROBABLY NEEDS TO BE UPDATED TO WORK WITH OUR API 
      //?------------------------------------------------------------
      const loginApi = await fetch(`/auth`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).catch(error => {
        console.error('Error:', error);
      });
      //^ REPLACE WITH PROPER JWT AUTH STUFF
      //
      // let result = await loginApi.json();
      // if (result.success && result.token) {
      //   Cookies.set('token', result.token);
      //   // window.location.href = referer ? referer : "/";
      //   // const pathUrl = referer ? referer.lastIndexOf("/") : "/";
      //   Router.push('/');
      // } else {
      //   setStateFormMessage(result);
      // }
      setLoading(false);
    }
  }

  function validationHandler(states, e) {
    const input = (e && e.target.name) || '';
    const errors = [];
    let isValid = true;

    if (input) {
      if (states[input].required) {
        if (!states[input].value) {
          errors[input] = {
            hint: `${states[e.target.name].label} required`,
            isInvalid: true,
          };
          isValid = false;
        }
      }
      if (
        states[input].value &&
        states[input].min > states[input].value.length
      ) {
        errors[input] = {
          hint: `Field ${states[input].label} min ${states[input].min}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].value &&
        states[input].max < states[input].value.length
      ) {
        errors[input] = {
          hint: `Field ${states[input].label} max ${states[input].max}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].validator !== null &&
        typeof states[input].validator === 'object'
      ) {
        if (
          states[input].value &&
          !states[input].validator.regEx.test(states[input].value)
        ) {
          errors[input] = {
            hint: states[input].validator.error,
            isInvalid: true,
          };
          isValid = false;
        }
      }
    } else {
      Object.entries(states).forEach(item => {
        item.forEach(field => {
          errors[item[0]] = '';
          if (field.required) {
            if (!field.value) {
              errors[item[0]] = {
                hint: `${field.label} required`,
                isInvalid: true,
              };
              isValid = false;
            }
          }
          if (field.value && field.min >= field.value.length) {
            errors[item[0]] = {
              hint: `Field ${field.label} min ${field.min}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.value && field.max <= field.value.length) {
            errors[item[0]] = {
              hint: `Field ${field.label} max ${field.max}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.validator !== null && typeof field.validator === 'object') {
            if (field.value && !field.validator.regEx.test(field.value)) {
              errors[item[0]] = {
                hint: field.validator.error,
                isInvalid: true,
              };
              isValid = false;
            }
          }
        });
      });
    }
    if (isValid) {
      setStateFormValid(isValid);
    }
    setStateFormError({
      ...errors,
    });
    return isValid;
  }
    return (
      <div className="App1">
      <div className="appAside bgImg" />
      <div className="appForm">
        <div className="pageSwitcher">
          <div
            activeClassName="pageSwitcherItem-active"
            className={useLogin ? "pageSwitcherItem-active pageSwitcherItem" : "pageSwitcherItem"}
            onClick={() => toggleLogin(true)}
          >
            Sign In
          </div>
          <div
  
            activeClassName="pageSwitcherItem-active"
            className={useLogin ? "pageSwitcherItem" : "pageSwitcherItem-active pageSwitcherItem"}
            onClick={() => toggleLogin(false)}
          >
            Sign Up
          </div>
        </div>

        <div className="formTitle">
          <div
            
            activeClassName="formTitleLink-active"
            className={useLogin ? "formTitleLink-active formTitleLink" : "formTitleLink"}
            onClick={() => toggleLogin(true)}
          >
            Sign In
          </div>{" "}
          or{" "}
          <div
          
            activeClassName="formTitleLink-active"
            className={useLogin ? "formTitleLink" : "formTitleLink-active formTitleLink"}
            onClick={() => toggleLogin(false)}
          >
            Sign Up
          </div>
        </div>

        {/* <FormLogin
            props={{
              onSubmitHandler,
              onChangeHandler,
              loading,
              stateFormData,
              stateFormError,
              stateFormMessage,
            } */}

            {/* use something like this below */}

      {useLogin ? <Login /> : <SignUpForm/>}
        
      </div>
    </div>
      

    );
 }