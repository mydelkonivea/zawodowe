import { useState } from 'react'

const Statistics = ({props, value}) => {
  return (
  <p>{props} {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
<h1>Give feedback</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <br/>
      <h1>Statistics</h1>
      <Statistics props = "good" value = {good}/>
      <Statistics props = "neutral" value = {neutral}/>
      <Statistics props = "bad" value = {bad}/>
      <Statistics props = "all" value = {bad + good + neutral}/>
      <Statistics props = "average" value = {(good + (bad*-1)) / (bad + good + neutral)}/>
      <Statistics props = "positive" value = {good/(bad + good + neutral)}/>
    </div>
  )
}

export default App