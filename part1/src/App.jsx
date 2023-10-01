
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content course = {course.parts}/>
      <Total course = {course.parts}/>
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part}</p>
  )
}

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}
const Content = ({course}) => {
  return (
    <>
            {course.map(c => 
          <Part part={c.name} key={c.id} note={c} />
        )}
    </>
  )
}
const Total = ({course}) => {
  var numberOfE = 0;
  {course.map(c => 
    numberOfE += c.exercises
  )}

  return (

    <p>Number of exercises {numberOfE}</p>
    
  )
}

export default App