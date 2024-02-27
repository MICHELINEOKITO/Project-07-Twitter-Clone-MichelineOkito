import Home from "../../images/Home-Fill.svg"
import Explore from "../../images/Explore.svg";
import Notifications from "../../images/Notifications.svg";
import Messages from "../../images/Messages.svg";
import Bookmarks from "../../images/Bookmarks.svg";
import Lists from "../../images/Lists.svg";
import Profile from "../../images/Profile.svg";
import More from "../../images/More.svg";
import Navigation from "./Navigation";
import DataUtilisateur from "../../data/DataUtilisateur";
import { Link } from "react-router-dom";


const MenuSidebar = () =>{
    const currentUser = DataUtilisateur.find((user) => {
        return user.isLogin === true
    })
    return(
        <nav>
            <ul className="menu-sidebar">

                 <li className="home" >
                    <Navigation text={"Home"} src={Home} url={"/"} className={"navLink"} />
                </li>

                <li className="explore">
                  <Navigation text={"Explore"} src={Explore}  className={"navLink"} />
                </li>

                <li className="notifications">
                    <Navigation text={"Notifications"} src={Notifications}  className={"navLink"} />
                </li>

                 <li className="messages">
                    <Navigation text={"Messages"} src={Messages} className={"navLink"} />
                </li>
              

                <li className="bookmarks">
                    <Navigation text={"Bookmarks"} src={Bookmarks}  className={"navLink"} />
                </li>

  
                <li className="lists">
                    <Navigation text={"Lists"} src={Lists} className={"navLink"} />
                </li>
               
                <Link to={`/${currentUser.userName}`}>
                <li className="navLink"><img src={Profile} alt="" />Profile</li>
                </Link>
                
                 

                <li className="more">
                    <Navigation text={"More"} src={More} className={"navLink"} />
                </li> 
                  <button className="button button-for-sidebar">Tweet</button>
            </ul>

        </nav>

    )
}
export default MenuSidebar;