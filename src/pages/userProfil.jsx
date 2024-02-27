import { Link, useParams } from "react-router-dom";
import DataUtilisateur from "../data/DataUtilisateur";
import { GrLinkPrevious } from "react-icons/gr";
import { RxLink2 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { RiUserFollowFill } from "react-icons/ri";
import { useState } from "react";




const UserProfil = () =>{
    const {userName} = useParams()
    const [selected, setSelected] = useState("posts");

    
    const oneProfil = DataUtilisateur.find((profil) => {
        return profil.userName == userName
    })

    const handleClick = (tab) => {
        setSelected(tab);
      };
    
    return(
        <div className="w-[800px] border-x-[1px] border-solid border-gray-700 relative">
      <div className="p-5 flex items-center gap-10 fixed z-10 bg-black w-[800px]">
        <Link to={"/"}>
          <GrLinkPrevious />
        </Link>
        <div>
          <h2 className="flex items-center gap-2">
            {oneProfil?.userName} <img src={oneProfil?.iconCertification} alt="" />
          </h2>
          <span className="text-gray-400 text-sm"> posts</span>
        </div>
      </div>
      <div className="max-h-[350px] max-w-full relative mt-[89px] ">
        <img className="w-full max-h-[350px] " src={oneProfil?.banner} alt="" />
        <div className="absolute bottom-[-40px] pl-5 flex w-[150px] ">
          <img
            className="absolute bottom-[-40px] pl-50 flex rounded-full "
            src={oneProfil?.avatar}
            alt=""
          />
          <div className="flex items-center gap-3 absolute bottom-[-35px] right-[-630px]">
            <p className="w-10 h-10 border border-white text-center rounded-full pt-[2px] ">
              {oneProfil?.points}{" "}
            </p>
            <button className="bg-white text-black px-5 py-2 text-xl rounded-full">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[70px] p-5">
        <h2 className="flex items-center gap-2">
          {oneProfil?.userName} <img src={oneProfil?.iconCertification} alt="" />
        </h2>
        <span className="text-gray-400 text-sm">{oneProfil?.lienProfil} </span>
      </div>
      <p className="px-5 text-justify">{oneProfil?.description} </p>
      <div className="p-5 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <RxLink2 />
          <span className="text-[#1D9BF0] ">{oneProfil?.linkWeb} </span>
        </div>
        <div className="flex items-center gap-1">
          <SlCalender />
          <span className="text-gray-400 text-sm">{oneProfil?.dateCreated} </span>
        </div>
      </div>
      <div className="px-5 flex gap-8">
        <p>
          {oneProfil?.abonnemets}{" "}
          <span className="text-gray-400 text-sm">abonnemets</span>
        </p>
        <p>
          {oneProfil?.abonne}{" "}
          <span className="text-gray-400 text-sm">abonnés</span>
        </p>
      </div>
      <div className="p-5 flex items-center gap-2.5">
        <RiUserFollowFill />
        <span className="text-gray-400 text-sm">{oneProfil?.suiviPar} </span>
      </div>
      <ul className="py-4 px-8 flex justify-between border-b border-gray-500 list-none">
        <li
          className={
            selected === "posts" ? "cursor-pointer active" : "cursor-pointer"
          }
          onClick={() => handleClick("posts")}
        >
          Posts
        </li>
        <li
          className={
            selected === "affilies" ? "cursor-pointer active" : "cursor-pointer"
          }
          onClick={() => handleClick("affilies")}
        >
          Affiliés
        </li>
        <li
          className={
            selected === "reponse" ? "cursor-pointer active" : "cursor-pointer"
          }
          onClick={() => handleClick("reponse")}
        >
          Réponses
        </li>
        <li
          className={
            selected === "media" ? "cursor-pointer active" : "cursor-pointer"
          }
          onClick={() => handleClick("media")}
        >
          Médias
        </li>
        <li
          className={
            selected === "aime" ? "cursor-pointer active" : "cursor-pointer"
          }
          onClick={() => handleClick("aime")}
        >
          J'aime
        </li>
      </ul>
      {selected === "posts" && (
        <div>
          <h1>la page post</h1>
        </div>
      )}
      {selected === "affilies" && (
        <div >
            <h1>la page affilies</h1>
        </div>
      )}
      {selected === "reponse" && (
        <div >
          <h1>la page reponse</h1>
        </div>
      )}
      {selected === "media" && (
        <div >
          <h1>la page media</h1>
        </div>
      )}
      {selected === "aime" && (
        <div >
          <h1>la page j'aime</h1>
        </div>
      )}
    </div >

    )

}
export default UserProfil;