import DataSiderbar from "../data/DataSiderbar";

function Sidebar (){
    return(
        <div className="sidebar">
            <div className="profile">
                <img src="src/images/Tweeter.svg" alt="" />
            </div>
            <ul className="nav">
               {DataSiderbar.map((index) =>(
                <li key={index.name}>
                    <img src={index.icone} alt="icone" />
                    <span>{index.name}</span>
                </li>  
               )      
                )}
            </ul>
        </div>
    )
} 
export default Sidebar;