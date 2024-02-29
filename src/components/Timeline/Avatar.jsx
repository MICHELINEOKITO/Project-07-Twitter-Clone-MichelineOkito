import { useTweetContext } from "../../context/TweetContext";
function Avatar (){
    const {dataUser} =  useTweetContext()
    const currentUser = dataUser.find((user) => {
        return user.isLogin === true
    })
    return(
            <img src={currentUser.avatar} alt="Photo profile" className="avatar" />

    )
}
export default Avatar;