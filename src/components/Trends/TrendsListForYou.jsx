import DataTrendsForYou from "../../data/DataTrendsForYou";


const TrendsListForYou = () =>{
    return(
        <>
       {
        DataTrendsForYou.map(Trend =>(
            <div className='trends-list-title' key={Trend.key}>
                <div className="trends-title-details">
                    <p className="title-details">{Trend.title}</p>
                    <img src="src/images/More-2.svg" alt="" />
                </div>
                <p className="trend-author">{Trend.author}</p>
                <p className="title-details">{Trend.number} <span className="title-details">tweet</span></p>

            </div>
        )
            )
       }
       <span className="show-more-title">Show more</span>
        </>


    )
}
export default TrendsListForYou;