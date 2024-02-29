import { createContext, useContext, useState } from "react";
import ObjetsTweeter from "../data/DataTwetter";
import DataUtilisateur from "../data/DataUtilisateur";

const TweetContext = createContext()

export const useTweetContext = () =>{
    return useContext(TweetContext)
}

const TweetProvider = ({children}) =>{
    const [dataTweet, setDataTweet] = useState(ObjetsTweeter)
    const [dataUser, setDataUser] = useState(DataUtilisateur)
    return (
        <TweetContext.Provider value={{dataTweet, dataUser}}>
            {children}
        </TweetContext.Provider>
    )
}

export default TweetProvider