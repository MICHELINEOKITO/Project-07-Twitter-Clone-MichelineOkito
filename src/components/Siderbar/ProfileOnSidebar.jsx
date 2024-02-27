
import Cadenas from "../../images/GroupCADENA.svg"
import DataUtilisateur from "../../data/DataUtilisateur";
import { Link } from "react-router-dom";

const ProfileOnSidebar = () =>{

  const currentUser = DataUtilisateur.find((user) => {
    return user.isLogin === true
})
   

         return (
                <div className='contener-profile-tweet-sidebar'>
                  <Link to={`/${currentUser.userName}`}>
                      <div className="compte-in-sidebar-avatar"><img src={currentUser.avatar} alt="" /></div>
                      </Link>
                      <div className="title-icon">
                          <div className="compte-icon">
                  <Link to={`/${currentUser.userName}`}>

                            <p>{currentUser.userName} </p>
                            </Link>
                            <img src={Cadenas} alt="" />
                          </div>
                  <Link to={`/${currentUser.userName}`}>

                          <span className="tweet-title-details">{currentUser.lienProfil} </span>
                          </Link>
                      </div>
                      <div className="compt-more"><img src="src/images/More-2.svg" alt="" /></div>
                </div>
          );
        };


export default ProfileOnSidebar;