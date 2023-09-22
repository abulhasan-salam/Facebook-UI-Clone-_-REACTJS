import './main_feed.css'
import {LiaGlobeAmericasSolid} from 'react-icons/lia'
import {SlOptions} from 'react-icons/sl'
import fblike from './assets/fblike.png'
import {AiOutlineLike} from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'
import {FaRegCommentAlt} from 'react-icons/fa'
import {PiShareFatBold} from 'react-icons/pi'
import { useMemo, useState } from 'react'

const Main_feed = ({posts,handleclick,handlecomment,user_present}) => {

    
    const backcolor =()=> useMemo(() => 
    {
        const backgroundColors = [
            "#3498db", // Blue
            "#e74c3c", // Red
            "#2ecc71", // Green
            "#f1c40f", // Yellow
            "#9b59b6", // Purple
            "#1abc9c", // Teal
            "#f39c12", // Orange
            "#34495e", // Dark Gray
            "#95a5a6"  // Light Gray
        ]
        const rand = Math.floor(Math.random()*backgroundColors.length)
        return backgroundColors[rand]

    }, [])
        

    

    console.log(posts)

  return (
    <div className="main_con">
        <div className="post_childs">
           {posts.map((item,index) => (
              <div className="post_main" key={index}>
                 <div className="post_head">
                    <img src={item.profile_pic} alt="profile pic" className='profile_pic'/>
                    <div className="name_time">
                            <p className='profile_name'>{item.name}</p>
                            <p className='post_time'>{item.post_time}{<LiaGlobeAmericasSolid className='icon'/>}</p>
                    </div>
                    <div className="opt_con">
                            <div className="options">
                                <SlOptions style={{width:'20px',height:'20px'}}/>
                            </div>
                    </div>
                   
                 </div>
                {item.caption && (

                        <div className="caption_con">
                            <div className="caption">
                                <p>{item.caption.text}</p>
                            </div>
                        </div>

                )}
                {item.main_post && (

                    <div className="main_post_con">
                    <div className="post">
                            {item.main_post.type === 'image' ? (
                            <img src={item.main_post.content} alt="Post" className='post_img' />
                            ) : item.main_post.type === 'video' ? (
                            <video controls src={item.main_post.content} className='post_video' type="video/mp4" onError={(e) => console.error("Video Error:", e)}>
                                <p>Your browser does not support the video tag.</p>
                            </video>
                            ) : (
                            <p id='text_post' style={{ backgroundColor: backcolor() }}>
                                {item.main_post.content}
                            </p>
                            )}

                    </div>

                    </div>

                )}
                <div className="reaction">
                    <div className="emojis">
                       <img src={fblike} alt="like" style={{width:'33px',height:'33px'}}/>
                       <p className='emo1'>😀</p>
                       <p className='emo2'>💖</p>
                    </div>
                    <div className="likes">
                        {item.liked? (<p className='likes_no'>You, {item.likes} Likes</p>):(<p className='likes_no'>{item.likes} Likes</p>)}
                    </div>
                    <div className="comments">
                        {item.comments!=0 && item.shares!=0 ? (<p>{item.comments.length} comments. {item.shares} Shares</p>):null}   
                    </div>
                </div>
                <div className="reaction_btn_con">
                    <div className="reaction_btn">
                    <ul className='reaction_lst'>
                        <li  onClick={() => handleclick(item.id,'Like')} >
                            {item.liked ? (<span className='select_like'>{<AiFillLike style={{width:'18px',height:'20px'}}/>}</span>):(<span className='reaction_icon'>{<AiOutlineLike style={{width:'18px',height:'20px'}}/>}</span>)}
                            {/* <span className={clicked?.req === 'Like' && clicked.id === item.id || clicked.liked ? 'selected':'reaction_icon'}><AiOutlineLike style={{width:'18px',height:'20px'}}/></span> */}
                            <span className={item.liked ? "select_like_text":'reaction_text'}>Like</span>
                        </li>
                        <li className='' onClick={() => handlecomment(item.id)}>
                            <span className='reaction_icon'><FaRegCommentAlt style={{width:'15px',height:'auto',position:'relative',top:'5px'}} /></span>
                            <span  className='reaction_text'>Comments</span>
                        </li>
                        <li>
                            <span className='reaction_icon'><PiShareFatBold style={{width:'16px',height:'auto',position:'relative',top:'3px'}}/></span>
                            <span  className='reaction_text'>Shares</span>
                        </li>

                    </ul>

                    </div>

                </div>
                </div>
           ))}

        </div>

    </div>
  )
}

export default Main_feed