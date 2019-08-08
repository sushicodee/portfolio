import React , {useState , useEffect} from 'react'
import {NavLink } from 'react-router-dom';
import './Floater.scss';
const Floater = () => {
    const [toggle ,setToggle] = useState(true);
    const toggleClass = toggle?'-open':'-close';
    const handleToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
         setTimeout(() =>  {
            setToggle(!toggle);
        },2000);
    }, [])
    return (
        <>
        <div className = 'floater-button-container'>
            <button className = {`floater-button floater-button${toggleClass}`} onClick = {() => setToggle(!toggle)}><i class="fas fa-ghost"></i></button>
        </div>
        <div className = 'floater'>
            <nav className = {`floater-links floater-links${toggleClass}`}>
                <ul>
                    <li>
                        <NavLink to ='/github' onClick = {handleToggle}><i className="fab fa-github"></i></NavLink>
                    </li>
                    <li>
                        <NavLink to ='/linkedin' onClick = {handleToggle}><i className="fab fa-linkedin-in"></i></NavLink>
                    </li>
                    <li>
                        <NavLink to ='/facebook' onClick = {handleToggle}><i className="fab fa-facebook"></i></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Floater;
