import DataSiderbar from "../data/DataSiderbar";
import ProfileButton from "./profile-button";

function Sidebar (){
    return(
        <div className="sidebar">
            <div className="profile">
                <img src="src/images/Tweeter.svg" alt="profile" />
            </div>
            <ul className="nav">
               {DataSiderbar.map((index) =>(
                <li key={index.name}>
                    <img src={index.icone} alt="icone" />
                    <span>{index.name}</span>
                </li>  
               )      
                )}
            </ul>
            <button  className="tweet-button">Tweet</button>
            <ProfileButton/>
        </div>
    )
} 
export default Sidebar;