import DataUtilisateur from "../../data/DataUtilisateur";

function Avatar (){
    const currentUser = DataUtilisateur.find((user) => {
        return user.isLogin === true
    })
    return(
            <img src={currentUser.avatar} alt="Photo profile" className="avatar" />

    )
}
export default Avatar;