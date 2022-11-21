import "./topbar.css"
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