import Avatar from "../Timeline/Avatar7";
import { VscLockSmall } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";

const ProfileTweeterSidebar = () =>{
   

         return (
                <div className='contener-profile-tweet-sidebar'>
                      <div className="compte-in-sidebar-avatar"><Avatar /></div>
                      <div className="title-icon">
                          <div className="compte-icon">
                            <p>Bradly Ortiz</p>
                            <VscLockSmall/>
                          </div>
                          <span className="tweet-title-details">@bradly</span>
                      </div>
                      <BsThreeDots />
                </div>
          );
        };


export default ProfileTweeterSidebar;