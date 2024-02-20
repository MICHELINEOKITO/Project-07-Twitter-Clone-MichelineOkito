import Avatar from "../Timeline/Avatar";
import Cadenas from "../../images/GroupCADENA.svg"

const ProfileOnSidebar = () =>{
   

         return (
                <div className='contener-profile-tweet-sidebar'>
                      <div className="compte-in-sidebar-avatar"><Avatar /></div>
                      <div className="title-icon">
                          <div className="compte-icon">
                            <p>Bradly Ortiz</p>
                            <img src={Cadenas} alt="" />
                          </div>
                          <span className="tweet-title-details">@bradly</span>
                      </div>
                      <div className="compt-more"><img src="src/images/More-2.svg" alt="" /></div>
                </div>
          );
        };


export default ProfileOnSidebar;