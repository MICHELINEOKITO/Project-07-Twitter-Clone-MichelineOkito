import React from "react";
import ObjetsTweeter from "../data/DataTwetter";

export default function Tweet (){
    return (
        <>
            {ObjetsTweeter.map((Tweet, index)=>(
                
                <div className="tweet" key={index}>
                
                    <div className="tweet-avatar"><img src={Tweet.tweetAvatar} alt="" /></div>
                
                    <div className="tweet-content">
                
                        <div className="tweet-body">
                
                            <div className="tweet-title">
                               <span className="tweet-title-author">{Tweet.title}</span>
                               <img src={Tweet.iconeCertification} alt="" />
                               <span className="tweet-title-details">{Tweet.smallTitle}</span>
                               <span className="tweet-title-details">.</span>
                               <span className="tweet-title-details">{Tweet.titleTime}</span>
                            </div>
                            <div className="tweet-text">{Tweet.textTweet}</div>
                            <div className="tweet-image"></div>
                
                        </div>
                
                        <div className="tweet-actions "></div>
                
                    </div>
                
                
                </div>
            )
        )}
    </>
)
}

