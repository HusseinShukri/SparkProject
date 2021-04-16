import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import{ FaBars, FaTimes} from 'react-icons/fa'
import {Button} from '../../Button'
import './Nav.css';
import logoImg from '../../../images/logo2.png'
import{ IconContext } from 'react-icons/lib'

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
                <Link to='/mainpageteacher' className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logoImg} className='navbar-icon'/>
                    SPARK
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                     {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-items">
                        <Link to='/mainpageteacher'className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                      <li className="nav-items"> 
                        <Link to='/'className='nav-links' onClick={closeMobileMenu}>
                            Sell
                        </Link>
                    </li> 
                    <li >
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                             Chat
                        </Link>
                    </li> 
                    <li >
                        <Link to='/Polices' className='nav-links' onClick={closeMobileMenu}>
                            Polices
                        </Link>
                    </li> 
                    <li >
                        <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                             About Us
                        </Link>
                    </li> 
                    <li className="nav-btn">
                       {button ? (
                           <Link to='/signpage' className="btn-link" >
                               <Button buttonStyle='btn--outline' >
                                   SIGN OUT
                               </Button>
                           </Link>     
                       ):
                       (
                        <Link to='/signpage' className="btn-link" >
                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                SIGN OUT
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
