import PageTitle from "../Header/Page-title";
import ProfileImage from "../../images/profile-photo.png"

const ProfileHeaderInfo = () =>{
    return(
        <div className="timeline">
            <div className="header">
                <PageTitle text={"Profile"}/>
            </div>
            <div className="image-profile-background">
                <img src={ProfileImage} alt="" />
            </div>

            <div className="profile-info">
                <button className="button-profile-edit">Edit profile</button>

            </div>
       </div>
        
    )
}
export default ProfileHeaderInfo ;