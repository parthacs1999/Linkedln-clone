import React from 'react';
import InputOption from './InputOption';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import { Subscriptions,EventNote,CalendarViewDay } from '@material-ui/icons';
function Feed() {
  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption title='Photo' Icon={ImageIcon} color="#70B5F9"/>
                  <InputOption title='Video' Icon={Subscriptions} color="#E7A33E" />
                  <InputOption title='Event' Icon={EventNote} color="#C0CBCD" />
                  <InputOption title='Write article' Icon={CalendarViewDay} color="#7FC15E" />
            </div>
        </div>
    </div>
  )
}

export default Feed;