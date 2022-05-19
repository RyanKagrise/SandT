import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import DemoUser from '../DemoUser'
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='login-form'>
        <div className='title-login'>Welcome! Please login below!</div>
        <form onSubmit={onLogin} className='form-login'>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='email-login'>
            <label htmlFor='email' className='email-label'>Email</label>
            <input
              name='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='password-login'>
            <label htmlFor='password' className='password-label'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <button className='login-button' type='submit'>Login</button>
        </form>
        <div className='demo-signup'>
          <div className='demo-div'>
            Try our site out as a demo user instead!
          </div>
          <DemoUser />
        </div>
      </div>
    </>

  );
};

export default LoginForm;
