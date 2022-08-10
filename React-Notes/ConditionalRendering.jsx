// ********************************************************** //
// Conditional rendering
// ********************************************************** //

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false)

  function toggleShown(){
      setIsShown(prevShown => !prevShown)
  }

  return (
    // if props.setup = false, the h3 will not show
      <div>
          {props.setup && <h3>{props.setup}</h3>}
          {isShown && <p>{props.punchline}</p>}
          <button onClick={toggleShown}>Show Punchline</button>
          <hr />
      </div>
  )
}

// Conditional with ternary

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false)
  function toggleShown(){
      setIsShown(prevShown => !prevShown)
  }
  return (
      <div>
          {props.setup && <h3>{props.setup}</h3>}
          {isShown && <p>{props.punchline}</p>}
          <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
          <hr />
      </div>
      // conditional if display or not
      // ternary if chossing which to display
  )
}