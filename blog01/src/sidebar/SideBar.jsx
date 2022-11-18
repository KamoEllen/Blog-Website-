import "./sidebar.css"

export default function Sidebar(){
    return(
        <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://avatars.githubusercontent.com/u/108501662?v=4" alt=""></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">LIFE</li>
                <li className="sidebarListItem">PROGRAMMING</li>
                <li className="sidebarListItem">RESEARCH</li>
                <li className="sidebarListItem">DESIGN</li>
                <li className="sidebarListItem">BOOKS</li>
                <li className="sidebarListItem">STYLE</li>
            </ul>
        </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-youtube"></i>
        </div>
        </div>
        </div>
    )
}