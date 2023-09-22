import React, { useState } from 'react'
import './login_st.css'
import { BsFacebook } from 'react-icons/bs'
import { PiMetaLogoBold } from 'react-icons/pi'

const Login = ({users,handleSubmit,check_user}) => {

    console.log("users in login",users)

  return (
    <div className="login_con">
        <div className="logo_con">
            <BsFacebook style={{width:'20vw',height:'20vh',color:'blue'}}/>
        </div>
        <div className="input_con">
        <form action="" onSubmit={handleSubmit}>
        <div className="user_name">
               <input type="text" 
                placeholder='Mobile number or email'id='user_name'/>
            </div>
            <div className="pass_word">
            <input  type="password"
                placeholder='password' id='passkey'/>
            </div>
            <div className="btn_login_con">
                <button className='login'onClick={check_user}>Log in</button>
            </div>
            <div className="forgot">
                <p><a href="">fortgot password</a></p>
            </div>
        </form>
        </div>
        <div className="con2">
            <div className="create_acc">
                <div className="crt_acc_con">
                    <button className='create_acc_btn'>Create new account</button>
                </div>
            </div>
            <div className="footer">
            <div className="meta_logo">
            <PiMetaLogoBold style={{marginRight:'5px',position:'relative',top:'1px'}}/> <p>Meta</p>

            </div>
                
            </div>

        </div>
        
         
        
    </div>
    

  )
}

export default Login

































