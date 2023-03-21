import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import logo from "../../assests/logo3.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";

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
    if (
      (values.firstName &&
        values.lastName &&
        values.email &&
        values.password &&
        values.cPassword) === ""
    ) {
      toast.error("Field is Empty");
    }
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password &&
      values.cPassword
    ) {
      axios
        .post("/user/", {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          cPassword: values.cPassword,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="Signup">
      <div className="Logo">
        <img src={logo} className="Logo" alt="UNBOXING STUDIO" />
      </div>
      <div className="Signup-Inputs">
        <BsPersonFill />
        <span class="material-icons-round">email</span>
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
