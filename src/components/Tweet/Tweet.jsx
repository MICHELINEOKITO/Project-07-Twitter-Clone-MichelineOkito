
 import IconComment from "../AllIcons/IconComment";
 import IconRetweet from "../AllIcons/IconRetweet";
 import IconLike from "../AllIcons/IconLike";
import { Link } from "react-router-dom";
export default function Tweet ({tweets}){
    return (
        <>
            {tweets.map((Tweet)=>(
                
                <div className="flex flex-row gap-4 p-6 border-b border-gray-200" key={Tweet.id}>
                    <Link to={`/${Tweet.title}`}>
                        <div className="w-70 h-70"><img src={Tweet.tweetAvatar} alt="" className="w-full max-h-40 rounded-full"/></div>
                    </Link>
                    <div className="flex flex-col items-start justify-start gap-6 w-full">
                
                        <div className="flex flex-col gap-1">
                
                            <div className="flex justify-start items-start gap-2 text-base">
                            <Link to={`/${Tweet.title}`}>
                                <span className="text-base">{Tweet.title}</span>
                            </Link>
                               <img src={Tweet.iconeCertification} alt="" />
                            <Link to={`/${Tweet.title}`}>
                                     <span className="text-gray-600">{Tweet.smallTitle}</span>
                            </Link>
                               <span className="text-gray-600">.</span>
                               <span className="text-gray-600">{Tweet.titleTime}</span>
                            </div>
                            <div className="text-gray-400 text-base">{Tweet.textTweet}</div>
                            {Tweet.imageTweet && <div className="w-full p-3 pt-0 pb-0 pl-0">
                <img src={Tweet.imageTweet} alt="" className="rounded-[50px] " /></div>}
                        </div>
                
                        <div className="flex justify-center items-center gap-20 text-gray-400 text-base">
                            <IconComment counts={Tweet.iconeCommentaire}/>
                            <IconRetweet counts={Tweet.iconeRetweet}/>
                            <IconLike  counts={Tweet.iconeLike}/>
                            
                            <span className="flex justify-center items-center gap-4">
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6083 4.725L9.44167 0.558335C9.1975 0.314168 8.80167 0.314168 8.55833 0.558335L4.39167 4.725C4.14667 4.96917 4.14667 5.365 4.39167 5.60834C4.63667 5.85167 5.03083 5.85333 5.275 5.60834L8.375 2.50833V11C8.375 11.345 8.655 11.625 9 11.625C9.345 11.625 9.625 11.345 9.625 11V2.50833L12.725 5.60834C12.8467 5.73083 13.0067 5.79167 13.1667 5.79167C13.3267 5.79167 13.4867 5.73167 13.6083 5.60834C13.8525 5.36417 13.8525 4.96917 13.6083 4.725Z" fill="#6E767D"/>
                                    <path d="M15.4233 16.7867H2.57667C1.52334 16.7867 0.666672 15.93 0.666672 14.8767V10.1667C0.666672 9.82167 0.946672 9.54167 1.29167 9.54167C1.63667 9.54167 1.91667 9.82167 1.91667 10.1667V14.8767C1.91667 15.2408 2.2125 15.5367 2.57667 15.5367H15.4233C15.7875 15.5367 16.0833 15.2408 16.0833 14.8767V10.1667C16.0833 9.82167 16.3633 9.54167 16.7083 9.54167C17.0533 9.54167 17.3333 9.82167 17.3333 10.1667V14.8767C17.3333 15.93 16.4767 16.7867 15.4233 16.7867Z" fill="#6E767D"/>
                                </svg>
                            </span>
                        </div>
                
                    </div>
                
                
                </div>
            )
        )}
    </>
)
}

