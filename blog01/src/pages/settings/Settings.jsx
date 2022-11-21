import './settings.css';
import SideBar from "../../components/sidebar/SideBar"


export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://i.pinimg.com/736x/2d/dc/ce/2ddcce361efeda544208d2857c6a8e8f.jpg" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle">

                        </i>
                    </label>
                    <input type="file" id="finaleInput" style={{display: "none"}}/>
                </div>
                <label>UserNAme</label>
                <input type="text" placeholder="Kamo"/>
                <label>Email</label>
                <input type="email" placeholder="Kamo@email.com"/>
                <label>Password</label>
                <input type="text" placeholder="Kamo"/>
            </form>
        </div>
        <SideBar/>
        </div>
  )
}
