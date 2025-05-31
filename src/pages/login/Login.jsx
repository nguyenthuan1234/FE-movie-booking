// Login.jsx
import React, { useState } from 'react';
import './Login.scss';
import { IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline, personOutline, closeOutline } from 'ionicons/icons';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={`wrapper ${isLogin ? 'active-popup' : 'active active-popup'}`}>
      <span className="icon-close" onClick={() => setIsLogin(true)}>
        <IonIcon icon={closeOutline} />
      </span>

      <div className={`form-box login ${isLogin ? '' : 'hidden'}`}>
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <span className="icon"><IonIcon icon={mailOutline} /></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><IonIcon icon={lockClosedOutline} /></span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="login-register">
            <p>Don't have an account? <span className="register-link" onClick={toggleForm}>Register</span></p>
          </div>
        </form>
      </div>

      <div className={`form-box register ${isLogin ? 'hidden' : ''}`}>
        <h2>Registration</h2>
        <form>
          <div className="input-box">
            <span className="icon"><IonIcon icon={personOutline} /></span>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon"><IonIcon icon={mailOutline} /></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><IonIcon icon={lockClosedOutline} /></span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />I agree to the terms & conditions</label>
          </div>
          <button type="submit" className="btn">Register</button>
          <div className="login-register">
            <p>Already have an account? <span className="login-link" onClick={toggleForm}>Login</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
