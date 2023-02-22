import React from 'react'
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
function Sidebar() {

    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM08Uwzcc1DG5wtAkLexl20p0soQC9mnkBAXWwpp2sdQ&s" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Partha Chakraborty</h2>
                <h4>ParthaChakraborty@gmail.com</h4>
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