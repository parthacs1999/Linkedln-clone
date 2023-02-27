import React from 'react'
import './Header.css';
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SuperVisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter, Chat, Notifications } from '@material-ui/icons';
import HeaderOption from './HeaderOption';
import { logout} from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>
      <div className='header__left'>
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384171.png" alt="logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SuperVisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenter} title='Jobs' />
        <HeaderOption Icon={Chat} title='Messaging' />
        <HeaderOption Icon={Notifications} title='Notifications' />
        <HeaderOption avatar={true} title="me" onClick={logoutApp} />
      </div>
    </div>
  )
}

export default Header;