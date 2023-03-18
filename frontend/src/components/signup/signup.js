import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="Signup">
      <div className="Signup-Inputs">
        <input
          name="firstname"
          placeholder="First Name"
          value={values.firstname}
          onChange={handleInputs}
        />
        <input
          name="lastname"
          placeholder="Last Name"
          value={values.lastname}
          onChange={handleInputs}
        />

        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputs}
        />
        <input
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleInputs}
        />
        <input
          name="cpassword"
          placeholder="Confirm Password"
          value={values.cpassword}
          onChange={handleInputs}
        />
      </div>
      <div className="Submit">
        <button>SUBMIT</button>
      </div>
      <div>
        <p style={{ display: "flex", height: "max-content" }}>
          Already have an account?{" "}
          <span style={{ textDecoration: "underline" }}>
            {/* <Link>Login</Link> */}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
