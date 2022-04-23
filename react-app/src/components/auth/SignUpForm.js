import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import DemoUser from '../DemoUser';
import './SignUp.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setErrors(["Password and Repeat Password Field Must Match!"])
    }

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='login-form'>
        <div className='title-login'>Welcome! Please sign up below!</div>
        <form onSubmit={onSignUp} className='form-login'>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='username-signup'>
            <label className='username-label'>User Name</label>
            <input
              type='text'
              name='username'
              placeholder='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className='email-signup'>
            <label className='email-label'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className='password-signup'>
            <label className='password-label'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className='repeat-signup'>
            <label className='password-label'>Repeat Password</label>
            <input
              type='password'
              name='repeat_password'
              placeholder='repeat password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div className='signup-div'>
            <button className='signup-button'  type='submit'>Sign Up</button>
          </div>
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

export default SignUpForm;
