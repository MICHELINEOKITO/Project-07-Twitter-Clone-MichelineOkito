import DataWhoToFollow from "../../data/DataWhoToFollow";

const TrendsListFollow = () =>{
    return(

    <>
        {
            DataWhoToFollow.map(TrendFollow =>(
                <div className="trends-list-follow" key={TrendFollow.key}>
                    <div className="follow-title">
                        <img src={TrendFollow.image} alt="" />
                        <div className="follow-list-title">
                            <span>{TrendFollow.title}<img src={TrendFollow.certificat} alt="" /></span>
                            <p>{TrendFollow.author}</p>
                        </div>
                        <button className="follow-button">Follow</button>

                    </div>


                </div>
            )

                )
        }
         <span className="show-more-title">Show more</span>
    </>
    )

}
export default TrendsListFollow;