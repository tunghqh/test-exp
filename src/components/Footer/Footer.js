import React from 'react'
import {AiOutlineInstagram,AiFillYoutube} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import './Footer.scss'
import Logo from "../../assets/imgs/logo.svg"
function Footer() {
  return (
    <div className='footer__wrap'>
        <div className='footer'>
            <img src={Logo} alt='logo' className='footer__logo'/>
            <ul className='footer__menu'>
              <li className='footer__menu-item'>About Us</li>  
              <li className='footer__menu-item'>Out Product</li>  
              <li className='footer__menu-item'>Contact Us</li>  
              <li className='footer__menu-item'>Shop</li>  
            </ul>
            <ul className='footer__media'>
               <li> <AiOutlineInstagram /></li>
               <li> <AiFillYoutube /></li>
               <li> <FaFacebookF /></li>
            </ul>
        </div>
        <div className='copyright'>
            <div className='copyright__left'>©2021 INOGROW. All Rights Reserved.</div>
            <div className='copyright__right'>
                <MdEmail />
                <span>E-mail: info@ultrafitprotection.com</span>
            </div>
        </div>
    </div>
    
  )
}

export default Footer