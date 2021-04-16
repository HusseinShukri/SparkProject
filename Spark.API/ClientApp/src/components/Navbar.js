import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { MdFingerprint} from 'react-icons/md'
import{ FaBars, FaTimes} from 'react-icons/fa'
import {Button} from './Button'
import './Navbar.css';
import logoImg from '../images/logo2.png'
import{ IconContext } from 'react-icons/lib'
import login from './signpage';


function Navbar() {

    const[click, setClick]= useState(false)
    const[button,setButton] = useState(true)
    const handleClick= () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton= () =>{
       if(window.innerWidth<=960){
           setButton(false)
       } else{
           setButton(true)

       }
   }

   useEffect(() => {
       showButton();
   }, [])
   window.addEventListener('resize',showButton);
    return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logoImg} className='navbar-icon'/>
                    SPARK
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                     {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-items">
                        <Link to='/'className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    {/* {/* <li className="nav-items"> 
                        <Link to='/services'className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li> */}
                    {/* <li >
                        <Link to={login} className='nav-links' onClick={login}>
                             AboutUs
                        </Link>
                    </li>  */}
                    <li className="nav-btn">
                       {button ? (
                           <Link to='/signpage' className="btn-link" >
                               <Button buttonStyle='btn--outline' >
                                   SIGN IN
                               </Button>
                           </Link>     
                       ):
                       (
                        <Link to='/signpage' className="btn-link" >
                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                SIGN IN
                            </Button>
                        </Link>
  
                       )} 
                    </li>
                </ul>
=            </div>
        </div>
        </IconContext.Provider>
    </>

    )
    
}

export default Navbar
