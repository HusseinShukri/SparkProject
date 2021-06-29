import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import{ FaBars, FaTimes} from 'react-icons/fa'
import { Button } from '../../Button'
import './Navvvv.css'
import logoImg from '../../../images/logo2.png'
import{ IconContext } from 'react-icons/lib'
import { useHistory } from 'react-router-dom'

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
    const history = useHistory();
    async function logout() {
        let result = await fetch("http://localhost:5555/Account/Logout", {
            method: 'POST',

        })
        localStorage.clear();
        history.push("/")

         }
   useEffect(() => {
       showButton();
   }, [])
   window.addEventListener('resize',showButton);
    return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbars">
            <div className="navbar-containers containers">
                <Link to='/mainpage' className="navbar-logos" onClick={closeMobileMenu}>
                    <img src={logoImg} className='navbar-icons'/>
                    SPARK
                </Link>
                <div className="menu-icons" onClick={handleClick}>
                     {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menus active' : 'nav-menus'}>
                            <Link to='' className="btn-link" >
                                <Button onClick={history.goBack} buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                    Leave
                            </Button>
                            </Link>
                    <li className="nav-btns">
                       {button ? (
                           <Link to='' className="btn-link" >
                               <Button onClick={logout} buttonStyle='btn--outline' >
                                   SIGN OUT
                               </Button>
                           </Link>     
                       ):
                       (
                        <Link to='' className="btn-link" >
                            <Button onClick={logout} buttonStyle='btn--outline' buttonSize='btn--mobile'>
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
