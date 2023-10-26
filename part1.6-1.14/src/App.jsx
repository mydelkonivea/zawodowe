import { useState } from 'react'

const Statistics = ({props, value}) => {
  return (
  <p>{props} {value}</p>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const MostVotes = ({points, dotes}) => {
  var idBiggest =-1;

  Object.keys(points).forEach(key => {
    if(idBiggest < 0) idBiggest = key

    if(points[idBiggest] < points[key]) idBiggest = key
  
  });


    return(
      <>
      <h1>Anecdote with most votes</h1>
      {dotes[idBiggest]}
      <br/>
      <p>has {points[idBiggest]} votes</p>
      </>
    )
}

const Parte = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [points, setPoints] = useState({
    0: 0, 1: 0,
    2: 0, 3: 0,
    4: 0, 5: 0,
    6: 0, 7: 0,
  })
  
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br/>
      <button onClick={() => {
        
        const newpoints = {...points}
        newpoints[selected] += 1   
        setPoints(newpoints)

      }}>vote</button>
      <button onClick={()=> {
        setSelected(getRandomInt(anecdotes.length))
      }}>netx anecdotes</button>

      <MostVotes points = {points} dotes = {anecdotes}/>
    </div>
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

      <br/>
        <Parte/>
    </div>
  )
}

export default App