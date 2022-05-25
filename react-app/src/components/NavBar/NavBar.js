import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux'
import DemoUser from '../DemoUser';
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
              <div className='Logo-nav'>
                <div className='logo-scuba'>Scuba</div>
                <div>&</div>
                <div className='logo-travel'>Travel</div>
              </div>

              {/* <img className='logo' src='https://previews.123rf.com/images/greatnotions/greatnotions1509/greatnotions150902580/44990041-your-rescue-diver-works-to-save-lives-everyday-show-them-how-much-you-appreciate-their-service-.jpg' onError={(e) => e.target.src = 'https://fh-sites.imgix.net/sites/4921/2016/12/07115947/Dive-030619-1164.jpg'} /> */}
            </NavLink>
          </div>
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
            <NavLink className='nav-text' to='/sign-up' exact={true} activeClassName='active'>
            <div className='Logo-nav'>
                <div className='logo-scuba'>Scuba</div>
                <div>&</div>
                <div className='logo-travel'>Travel</div>
              </div>
              {/* <img className='logo' src='https://previews.123rf.com/images/greatnotions/greatnotions1509/greatnotions150902580/44990041-your-rescue-diver-works-to-save-lives-everyday-show-them-how-much-you-appreciate-their-service-.jpg' /> */}
            </NavLink>
          </div>
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
          <DemoUser className='demo-nav' />
        </div>
      </nav>
    )
  };
}

export default NavBar;
