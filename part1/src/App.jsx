const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14


const App = () => {
  // const-definition

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

const Header = () => {
  return (
    <p>
    {part1} {exercises1}
  </p>
  )
}
const Content = () => {
  return (
    <p>
    {part2} {exercises2}
  </p>
  )
}
const Total = () => {
  return (
    <p>
    {part3} {exercises3}
  </p>
  )
}

export default App