import TrendsListForYou from "./TrendsListForYou";
import TrendsListFollow from "./TrendsFollow";



const Trends = () =>{
    return(
        <div className="trends">

            <div className="trends-input">
                <img src="src/images/search.svg" alt="" />
                <input type="text" placeholder="Search tweeter"/>

            </div>

            <div className="trends-for-you">
                <div className="trends-for-you-title">
                    <h2>Trends for you </h2>
                    <img src="src/images/Settings.svg" alt="" />
                </div>
                <TrendsListForYou />
            </div>

            <div className="trends-follow">
                <h2>Who to follow</h2>
                <TrendsListFollow />


            </div>
        <div className='trendsCopieRigth'>
            <span className="tweet-title-details">Terms of Service Privacy Policy cookie Policy Imprint Ads info More ... &copy; 2021 Twitter, Inc.</span>
        </div>

        </div> 
    )

}
export default Trends;