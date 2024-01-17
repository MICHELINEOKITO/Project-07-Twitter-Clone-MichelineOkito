import { useState } from 'react';
import Likeicon from "../../images/like.svg"
import LikedIcon from "../../images/Liked.svg"

const IconLike = ({ counts }) => {
  const [isLiked, setIsLiked] = useState(false)

  const [count, setCount] = useState(counts)

  const handleClick = () => {
    setIsLiked(!isLiked)
    setCount(isLiked ? count - 1 : count + 1)
  }

  const divStyles = {
    color: isLiked ? "red" : " ",
    padding: "10px",
  }

  return (
    <div
      className="tweet-action-button-react"
      title="like"
      onClick={handleClick}
    >
      <img
        src={isLiked ? LikedIcon  : Likeicon }
      />
      <span style={divStyles}>{count}</span>
    </div>
  )
}
export default  IconLike ;

