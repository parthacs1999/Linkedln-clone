import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SuperVisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter, Chat, Notifications } from '@material-ui/icons';
import HeaderOption from './HeaderOption';
function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384171.png" alt="logo" />
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title='Home'/>
              <HeaderOption Icon={SuperVisorAccountIcon}  title='My Network'/>
              <HeaderOption Icon={BusinessCenter} title='Jobs' />
              <HeaderOption Icon={Chat} title='Messaging' />
              <HeaderOption Icon={Notifications} title='Notifications' />
              <HeaderOption avatar="https://cdn-icons-png.flaticon.com/128/149/149071.png" title="me"/>
        </div>
    </div>
  )
}

export default Header