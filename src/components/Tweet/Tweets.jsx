
import { useTweetContext } from "../../context/TweetContext";
import Tweet from "./Tweet";


export default function Tweets(){
    const {dataTweet} = useTweetContext()
    return (
        <div className="">
            <Tweet tweets={dataTweet}/>
        </div>
    )
}
               