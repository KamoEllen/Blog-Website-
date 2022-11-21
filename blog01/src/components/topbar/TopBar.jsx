import "./topbar.css"

import {Link} from"react-router-dom";
import React from 'react';
export default function TopBar() {
    const user = true;

import React from 'react';
export default function TopBar() {

    return(
    <div className="top">

    <div className="topLeft">
    <i className="topIcon fa-brands fa-facebook"></i>
    <i className="topIcon fa-brands fa-pinterest"></i>
    <i className="topIcon fa-brands fa-square-instagram"></i>
    <i className="topIcon fa-brands fa-youtube"></i>
    </div>

    <div className="topCenter">
        <ul className="topList">

            <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
            <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/">WRITE</Link></li>
            <li className="topListItem"><Link className="link" to="/"></Link>{user && "LOGOUT"}</li>
        </ul>
    </div>
    <div className="topRight">
            {
            user ? (
            <img className="topImg" src="https://avatars.githubusercontent.com/u/108501662?v=4" alt=" ">
            </img>
                ) :  (
                    <ul className="topList">
                        <li className="topListItem">
                           <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                           <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
            }
        <i className="topSearchIcon fas fa-search"></i>
            
   </div>
     <li className="topListItem">HOME</li>
            <li className="topListItem">SERVICES</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">HOME</li>
            <li className="topListItem">CONTACT</li>
        </ul>
    </div>
    <div className="topRight">
    <img className="topImg" src="https://avatars.githubusercontent.com/u/108501662?v=4" alt=" ">
        </img><i className="topSearchIcon fas fa-search"></i>
        </div>

    </div>
    )
}