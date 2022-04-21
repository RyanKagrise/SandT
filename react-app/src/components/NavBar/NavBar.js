import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useDispatch, useSelector } from 'react-redux'
import './NavBar.css'
// import ProfileButton from './ProfileComponent';

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser?.id) {
    return (
      <nav className='container'>
        <div className='nav-list'>
          <div>
            <NavLink className='nav-text' to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink className='nav-text' to='/articles' exact={true} activeClassName='active'>
              Articles
            </NavLink>
          </div>
          <div>
            <NavLink className='nav-text' exact to={`/articles/create`}>
              Create Article
            </NavLink>
          </div>
          {/* <div>
            <NavLink className='nav-text' to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
          <div>
            <NavLink className='nav-text' to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div> */}
          {/* <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div> */}
          <div>
            <LogoutButton />
          </div>
          {/* <ProfileButton /> */}
        </div>
      </nav>
    )
  } else {
    return (
      <nav className='container'>
        <div className='nav-list'>
          <div>
            <NavLink className='nav-text' to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink className='nav-text' to='/articles' exact={true} activeClassName='active'>
              Articles
            </NavLink>
          </div>
          {/* <div>
            <NavLink className='nav-text' exact to={`/articles/create`}>
              Create Article
            </NavLink>
          </div> */}
          <div>
            <NavLink className='nav-text' to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
          <div>
            <NavLink className='nav-text' to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
          {/* <div>
        <NavLink to='/users' exact={true} activeClassName='active'>
          Users
        </NavLink>
      </div> */}
          {/* <div>
            <LogoutButton />
          </div> */}
          {/* <ProfileButton /> */}
        </div>
      </nav>
    )
  };
}

export default NavBar;
