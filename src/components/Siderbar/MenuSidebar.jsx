import Home from "../../images/Home-Fill.svg"
import Explore from "../../images/Explore.svg";
import Notifications from "../../images/Notifications.svg";
import Messages from "../../images/Messages.svg";
import Bookmarks from "../../images/Bookmarks.svg";
import Lists from "../../images/Lists.svg";
import Profile from "../../images/Profile.svg";
import More from "../../images/More.svg";
import Navigation from "./Navigation";


const MenuSidebar = () =>{
    return(
        <nav>
            <ul className="menu-sidebar">

                 <li className="home" >
                    <Navigation text={"Home"} src={Home} url={"/"} className={"navLink"} />
                </li>

                <li className="explore">
                  <Navigation text={"Explore"} src={Explore} url={"/Explore"} className={"navLink"} />
                </li>

                <li className="notifications">
                    <Navigation text={"Notifications"} src={Notifications} url={"/Notifications"} className={"navLink"} />
                </li>

                 <li className="messages">
                    <Navigation text={"Messages"} src={Messages} url={"/Messages"} className={"navLink"} />
                </li>
              

                <li className="bookmarks">
                    <Navigation text={"Bookmarks"} src={Bookmarks} url={"/Bookmarks"} className={"navLink"} />
                </li>

  
                <li className="lists">
                    <Navigation text={"Lists"} src={Lists} url={"/Lists"} className={"navLink"} />
                </li>
               

                <li className="profile">
                    <Navigation text={"Profile"} src={Profile} url={"/Profile"} className={"navLink"} />
                </li>
                 

                <li className="more">
                    <Navigation text={"More"} src={More} url={"/More"} className={"navLink"} />
                </li> 
                 

                
            </ul>
        </nav>

    )
}
export default MenuSidebar;