import MenuSidebar from "./MenuSidebar";
import Tweeter from "../../images/Twitter.svg";
import ProfileOnSidebar from "./ProfileOnSidebar";

function Sidebar (){
    return(
      <div className="sidebar">
        <div className="sidebar-image-tweeter">
            <img src={Tweeter} alt="" />
        </div>

        <div className="side-option">
            <MenuSidebar/>
        </div>

        <div className="sidebar-footer">
            <ProfileOnSidebar />
        </div>

      </div>
    )
} 
export default Sidebar;