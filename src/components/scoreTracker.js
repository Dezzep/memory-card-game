import { useState } from "react"

const ScoreTracker = (props) => {
  const [hiscore, setHiscore] = useState(0);
  if (props.score > hiscore) {
    setHiscore(props.score);
  }
  return (
    <div className="flex justify-evenly bg-red-500/25">
      <p>Current Score: {props.score}</p>
      <p>Hiscore: {hiscore}</p>
     </div>
  )
}

export default ScoreTracker