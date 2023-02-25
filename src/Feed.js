import React from 'react';
import { useState,useEffect } from 'react';
import InputOption from './InputOption';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import { Subscriptions,EventNote,CalendarViewDay } from '@material-ui/icons';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
function Feed() {
  const [input,setInput]=useState('');
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    db.collection("posts").orderBy('timesStamp','desc').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map((doc)=>(
        {
          id:doc.id,
          data:doc.data(),
        }
      )))
    })
  },[]);
  const sendPost=e=>{
    e.preventDefault();
    db.collection('posts').add({
      name:'Partha Chakraborty',
      description:'Software Engineer',
      message:input,
      photoUrl:'',
      timesStamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                    <button type='submit' onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption title='Photo' Icon={ImageIcon} color="#70B5F9"/>
                  <InputOption title='Video' Icon={Subscriptions} color="#E7A33E" />
                  <InputOption title='Event' Icon={EventNote} color="#C0CBCD" />
                  <InputOption title='Write article' Icon={CalendarViewDay} color="#7FC15E" />
            </div>
        </div>

        {/* Posts */}
        {posts.map(({id,data:{name,description,message,photoUrl}})=>(
          <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          />
        ))}
        
    </div>
  )
}

export default Feed;