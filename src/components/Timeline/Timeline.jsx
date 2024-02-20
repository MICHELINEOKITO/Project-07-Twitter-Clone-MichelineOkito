import Header from "../Header/Header";
import TweetEditor from "../Tweet/Tweet-editor";
import Tweets from "../Tweet/Tweets";
function Timeline() {
    return <div className="timeline">
        <Header />
        <TweetEditor/>
        <Tweets />
    </div>
}
export default Timeline;