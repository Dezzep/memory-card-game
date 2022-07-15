import { useState } from "react"

const ScoreTracker = (props) => {
  const [score, setScore] = useState(0);
  const [hiscore, setHiscore] = useState(0);
  return (
    <div className="flex justify-evenly bg-red-500/25">
      <p>Current Score: {score}</p>
      <p>Hiscore: {hiscore}</p>
     </div>
  )
}

export default ScoreTracker