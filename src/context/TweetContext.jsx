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

    const addTweet = (newTweet) =>{
        setDataTweet([newTweet, ...dataTweet])
    }
    return (
        <TweetContext.Provider value={{dataTweet, dataUser, addTweet}}>
            {children}
        </TweetContext.Provider>
    )
}

export default TweetProvider