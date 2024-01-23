import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form  className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_Baku_destination_image_2_l_579_1000.jpg" 
                alt=""
                />
            
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}}/>
     </div>  
     <label> Username</label> 
     <input type="text" placeholder="Enter your Name"/>
     <label> Email</label> 
     <input type="email" placeholder="Enter your Email"/>
     <label> Password</label> 
     <input type="Password" placeholder="Enter your Password"/>
     <button className="settingsSubmit">Update</button>
     </form>
      </div>
      <Sidebar/>

    </div>
  )
}
