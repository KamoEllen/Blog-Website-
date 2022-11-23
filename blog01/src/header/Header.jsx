import "./header.css"
import React from 'react';
export default function Header() {
    return(
    <div className="header">
    <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
    </div>

    <img className="headerImg" src="https://wallpaperforu.com/wp-content/uploads/2021/08/Wallpaper-Erominimalistsensei-Jabami-Yumeko-Kakegurui-M38.jpg" alt=""></img>

    <img className="headerImg" src="https://avatars.githubusercontent.com/u/108501662?v=4" alt=""></img>

    </div>
    )
}