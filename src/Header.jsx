import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {BiLogoMessenger} from 'react-icons/bi'
import './Header_St.css'


const Header = () => {
  return (
    <header className='header'>
        <h1>facebook</h1>
        <form className='btn_h'>
             <BiSearchAlt className='header_bt'
              role='button'
              style={{width:'26px' , height:'26px'}}
             />
             <BiLogoMessenger className='header_bt'
               role='button'
               style={{width:'26px' , height:'26px'}}
             />
        </form>
    </header>
  )
}

export default Header























