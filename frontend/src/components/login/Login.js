import React, { useState } from 'react';

function Login() {
  const initialState = {
    email: '',
    pass: '',
  };
  const [form, setForm] = useState(initialState);
  console.log(form);

  const handleChange = (fname, value) => {
    setForm({ ...form, [fname]: value });
  };
  return (
    <div>
      <div className="login">
        <div className="input">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            name="pass"
            value={form.pass}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
