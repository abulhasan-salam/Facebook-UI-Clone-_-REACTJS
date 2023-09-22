import React, { useState } from 'react'
import './nav_st.css'
import {AiOutlineHome} from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import {BsPlayBtn} from 'react-icons/bs'
import { BsPlayBtnFill } from 'react-icons/bs'
import {RiGroup2Line} from 'react-icons/ri'
import { RiGroup2Fill } from 'react-icons/ri'
import {BsBell} from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import {PiListBold} from 'react-icons/pi'


const Nav = () => {

  const [clicked,Setclicked] = useState('home')
  const nav_arr = [
     { text:'home',icon:<AiOutlineHome style={{width:'30px',height:'auto'}} role='button'/>,icon2:<AiFillHome style={{width:'30px',height:'auto'}} role='button'/>},
     { text:'videofeed',icon:<BsPlayBtn style={{width:'30px',height:'auto'}} role='button'/>,icon2:<BsPlayBtnFill style={{width:'30px',height:'auto'}} role='button'/>},
     { text:'group',icon:<RiGroup2Line style={{width:'30px',height:'auto'}} role='button'/>,icon2:<RiGroup2Fill style={{width:'30px',height:'auto'}} role='button'/>},
     { text:'bell',icon:<BsBell style={{width:'30px',height:'auto'}}role='button' />,icon2:<BsBellFill style={{width:'30px',height:'auto'}} role='button'/>},
     { text:'lists',icon:<PiListBold style={{width:'30px',height:'auto'}} role='button'/>,icon2:<PiListBold style={{width:'30px',height:'auto'}} role='button'/>}
  ]
 
  const handleclick =(item) =>
  {
     Setclicked(item)
  }

  return (
    <nav>
        <ul>
            {nav_arr.map((item,index) => (
                <li key={index} 
                onClick={() => handleclick(item.text)} >

                  {clicked === item.text ? (<span className = 'selectedNav'>{item.icon2}</span>):(<span className ='none'>{item.icon}</span>)}

                    
                </li>
            ))}
        
        </ul>
    </nav>
  )
}

export default Nav














































