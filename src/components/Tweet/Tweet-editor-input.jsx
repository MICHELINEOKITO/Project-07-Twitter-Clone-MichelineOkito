import { useState } from "react";
import { useTweetContext } from "../../context/TweetContext";
import TweetEditorButtons from "./Tweet-editor-buttons.jsx";

function TweetEditorInput(){
    const {dataUser} = useTweetContext()
    const {addTweet} = useTweetContext()



  const currentUser = dataUser.find((user) => {
    return user.isLogin === true
})
    const [textTweet, setTextTweet] = useState("")

    const hadleCreateTweet = (e) =>{
        e.preventDefault()
        const createTweet = {
            userId:currentUser.userId,
            id: Math.floor(Math.random() * (1000 - 6)),
            tweetAvatar:currentUser.avatar,
            title:currentUser.userName,
            iconeCertification:currentUser.iconCertification,
            smallTitle:currentUser.lienProfil,
            titleTime: new Date().toISOString(),
            textTweet:textTweet,
            imageTweet:null,
            iconeCommentaire:0,
            iconeRetweet:0,
            iconeLike:0,
            iconeShare:""

        }
        setTextTweet("")
        addTweet(createTweet)
    }
    return (
    <form onSubmit={(e) =>{hadleCreateTweet(e)}}>
        <input type="text" value={textTweet} onChange={(event) =>{setTextTweet(event.target.value)}} placeholder="What's happening ?" className="tweet-editor-input"/>
        <TweetEditorButtons />
    </form>
    )
}
export default TweetEditorInput;