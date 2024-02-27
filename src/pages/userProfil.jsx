import { useParams } from "react-router-dom";
import DataUtilisateur from "../data/DataUtilisateur";



const UserProfil = () =>{
    const {userName} = useParams()
    
    const oneProfil = DataUtilisateur.find((profil) => {
        return profil.userName == userName
    })
    return(
        <div>
            
        </div>

    )

}
export default UserProfil;