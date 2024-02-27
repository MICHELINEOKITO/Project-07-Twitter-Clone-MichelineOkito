
import { Link } from "react-router-dom";
import DataUtilisateur from "../../data/DataUtilisateur.jsx";
import Avatar from "../Timeline/Avatar.jsx";
import TweetEditorForm from "./Tweet-editor-form.jsx";

export default function TweetEditor(){
    const currentUser = DataUtilisateur.find((user) => {
        return user.isLogin === true
    })
    return (
        <div className="tweet-editor">
            <Link to={`/${currentUser.userName}`}>
            <Avatar />
            </Link>
            <TweetEditorForm />
            
        </div>  
    );
};
 