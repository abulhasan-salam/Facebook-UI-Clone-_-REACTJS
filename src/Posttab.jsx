import React, { useState } from 'react'
import './Post.css'
import profile from './assets/1.jpg';
import {BiSolidSmile} from 'react-icons/bi'
import {TiLocation,TiImage} from 'react-icons/ti'

const Posttab = ({user_present}) => {
  const [post,setpost] =useState('')
  const post_list = [
    { text:'Photos' , icon:<TiImage color='green' style={{width:'20px',height:'auto'}}/>},
    { text:'Feeling' , icon:<BiSolidSmile color='yellow' style={{width:'20px',height:'auto'}}/>},
    { text:'Location' , icon:<TiLocation color='red' style={{width:'20px',height:'auto'}}/>}

  ]

  console.log(`in posttab ${JSON.stringify(user_present)}`)
  return (
    <div className="post">
      <div className="upper">
         <img src={profile} alt="profile_pic" className='profilePic'/>
         <form className='postInp'>
            <input type="text" className='inpTab'
             placeholder="What's on your mind?"
             value={post}
             onChange={(e) => setpost(e.target.value)}
            />
         </form>
      </div>
      <div className="pstopt">
        <ul className='optList'>
          {post_list.map((item,index) => (
            <li key={index}>
              <span role='button'>{item.icon}</span>
              <span role='button' style={{paddingLeft:"5px",fontWeight:"550",color:'black',fontFamily: 'sans-serif',fontSize:'16px'}}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Posttab  
