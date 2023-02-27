import React from 'react';
import { useSelector } from 'react-redux';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM08Uwzcc1DG5wtAkLexl20p0soQC9mnkBAXWwpp2sdQ&s" alt="" />
                <Avatar className='sidebar__avatar' src={user.photoUrl}>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who's viewed you</p>
                    <p className='sidebar__statNumber'>47</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>5,932</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('nextjs')}
                {recentItem('java')}
                {recentItem('dsa')}
                {recentItem('nodejs')}
            </div>
        </div>
    )
}

export default Sidebar