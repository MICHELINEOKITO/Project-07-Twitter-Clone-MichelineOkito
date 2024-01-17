
import { useState } from 'react';
import RetweetIcon from "../../images/retweet.svg"
import RetweetedIcon from "../../images/Retweet.png"

const IconRetweet = ({ counts }) => {
  const [isRetweet, setIsRetweet] = useState(false)

  const [count, setCount] = useState(counts)

  const handleClick = () => {
    setIsRetweet(!isRetweet)
    setCount(isRetweet ? count - 1 : count + 1)
  }

  const divStyles = {
    color: isRetweet ? "#00ba7c" : " ",
    padding: "10px",
  }

  return (
    <div
      className="tweet-action-button-react"
      title="retweet"
      onClick={handleClick}
    >
      <img
        src={isRetweet ? RetweetedIcon   : RetweetIcon  }
      />
      <span style={divStyles}>{count}</span>
    </div>
  )
}
export default  IconRetweet ;

