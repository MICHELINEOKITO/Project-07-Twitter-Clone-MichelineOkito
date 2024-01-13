import MenuSidebar from "./MenuSidebar";

function Sidebar (){
    return(
      <div className="sidebar">
        <div className="sidebar-image-tweeter">
            <img src="src/images/Twitter.svg" alt="" />
        </div>

        <div className="side-option">
            <MenuSidebar/>

        </div>

        <div className="sidebar-footer">

        </div>

      </div>
    )
} 
export default Sidebar;