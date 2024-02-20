import React from "react";
import Button from "../ButtonTweet/Button.jsx";
import TweetEditorAction from "./Tweet-editor-actions.jsx";
export default function TweetEditorButtons(){
    return(
        <div className="tweet-editor-buttons">
              <TweetEditorAction/>
              <Button />
        </div>
      

    )
}
                
