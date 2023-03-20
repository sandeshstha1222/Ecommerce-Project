import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import logo from "../../assests/logo3.png";
const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = () => {
    axios.post("/");
  };
  return (
    <div className="Signup">
      <div className="Logo">
        <img src={logo} className="Logo" alt="UNBOXING STUDIO" />
      </div>
      <div className="Signup-Inputs">
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleInputs}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleInputs}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputs}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleInputs}
        />
        <input
          name="cPassword"
          type="password"
          placeholder="Confirm Password"
          value={values.cPassword}
          onChange={handleInputs}
        />
      </div>
      <div className="Submit" onClick={handleSubmit}>
        <button>SUBMIT</button>
      </div>
      <div>
        <p style={{ display: "flex", height: "max-content" }}>
          Already have an account?
          <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
