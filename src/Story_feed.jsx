import React from 'react'
import './story.css'
import story from './assets/1.jpg'
import st1 from './assets/stories/st_1.png'
import st2 from './assets/stories/st_2.jpeg'
import st3 from './assets/stories/st_3.jpeg'
import st4 from './assets/stories/st_4.jpeg'
import st5 from './assets/stories/st_5.jpg'
import pro_pic_1 from './assets/stories/profilepic/images.jpeg'
import pro_pic_2 from './assets/stories/profilepic/2.jpeg'
import pro_pic_3 from './assets/stories/profilepic/3.jpeg'
import pro_pic_4 from './assets/stories/profilepic/4.jpeg'
import pro_pic_5 from './assets/stories/profilepic/5.jpeg'

import {IoMdAddCircle} from 'react-icons/io'

const Story_feed = ({user_present}) => {


  const story_arr = [
    { name:'asik ahamed',Image:st1,profile:pro_pic_1},
    { name:'zamir',Image:st2,profile:pro_pic_2},
    { name:'Aisha',Image:st3,profile:pro_pic_3},
    { name:'yazar',Image:st4,profile:pro_pic_4},
    { name:'Deva',Image:st5,profile:pro_pic_5},

  ]
  return (
    <div className="story_feed_con">

      <div className="story_feed">
       <div className='st_list_head'>
            <img src={story} alt="" className='st_feed'/>
            <div className='add_st'>
              <span><IoMdAddCircle style={{width:'40px',height:'auto', color:'blue',border: 'white solid ',borderRadius:'50%',backgroundColor:'white'}} className='plus'/></span>
              <span className='st_txt'>Create a story</span>
            </div>
       </div>
       {story_arr.map((item,index) => (

<div className="st_list_items" key={index}>

    <div className="profilepic"  style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      position: 'absolute',
      top: '10px', // Adjust as needed to position it at the right top corner
      left: '7px', // Adjust as needed to position it at the right top corner
      overflow: 'hidden',
      border:'white solid 4px',
      zIndex:'5'
    }}>
      <img src={item.profile} alt="profile_pic" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
    </div>

    <img src={item.Image} alt="" className='image'/>

    <div className="name">
          <p className='name-text'>{item.name}</p>
    </div>
   
    
</div>

))}




























      </div>
      
      </div>

  )
}

export default Story_feed




































