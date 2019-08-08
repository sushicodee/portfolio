import React , {useState ,useEffect} from 'react'
import {NavLink } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {
    const [toggle, setToggle] = useState(true);
    const toggleClass = toggle? '-open':'-close';

    useEffect(() => {
        const toggling = setTimeout(() => {setToggle(!toggle)},2000);
        return () => {
           clearTimeout(toggling);
        };
    },[])
    return (
       <div className = 'navbar-container'>
           <div className = {`navbar-button`}>
               <button className = {`navbar-toggle navbar-toggle${toggleClass}`} onClick = {() => {setToggle(!toggle);}}> <i className="fas fa-bars"></i></button>
           </div>
           <>
            <nav className = {`navlinks-container navlinks-container${toggleClass}`}>
                <ul>
                  
                    <li>
                        <NavLink to = '/home' activeClassName = "active" onClick = {() => {setToggle(!toggle);}}> <i className="fas fa-home"></i>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/about' activeClassName = "active" onClick = {() => {setToggle(!toggle);}}> <i className="fas fa-address-card"></i>About</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/contact' activeClassName = "active" onClick = {() => {setToggle(!toggle);}}><i className="fas fa-address-book"></i>Contact</NavLink>
                    </li>
                </ul>     
            </nav>
            </>
       </div>
    )
}

export default Navbar
