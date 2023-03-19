import React, { useState } from 'react';
import './login.css';
function Login() {
  const initialState = {
    email: '',
    pass: '',
  };
  const [form, setForm] = useState(initialState);
  const [formErr, setFormErr] = useState(true);
  console.log(form);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
    setFormErr(true);
  };

  const validation = () => {
    if (!form.email && !form.pass) {
      setFormErr(false);
    } else if (!form.email) {
      setFormErr('emailErr');
    } else if (!form.pass) {
      setFormErr('passErr');
    }
  };
  return (
    <div className="login-form">
      <div className="login">
        <div className="input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          {formErr == 'emailErr' ? (
            <span style={{ color: 'red' }}>Please enter your email...</span>
          ) : (
            <></>
          )}
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            name="pass"
            value={form.pass}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          {formErr == 'passErr' ? (
            <span style={{ color: 'red' }}>Please enter your password...</span>
          ) : (
            <></>
          )}
          {!formErr && (
            <span style={{ color: 'red' }}>
              Please fill all the informations!
            </span>
          )}
        </div>

        <div className="input">
          <button type="button" onClick={validation}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
