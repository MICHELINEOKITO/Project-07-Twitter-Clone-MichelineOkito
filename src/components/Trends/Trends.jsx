import TrendsListForYou from "./TrendsListForYou";



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

            </div>

        </div> 
    )

}
export default Trends;