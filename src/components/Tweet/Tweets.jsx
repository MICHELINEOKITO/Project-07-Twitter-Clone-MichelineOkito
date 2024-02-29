
import Tweet from "./Tweet";
import ObjetsTweeter from "../../data/DataTwetter";

export default function Tweets(){
    return (
        <div className="">
            <Tweet tweets={ObjetsTweeter}/>
        </div>
    )
}
               