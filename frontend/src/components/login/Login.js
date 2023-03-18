import React from 'react';

function Login() {
  return (
    <div>
      <div className="login">
        <div className="input">
          <input type="text" placeholder="Email" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
      </div>
    </div>
  );
}

export default Login;
