export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)
  
  console.log("Component rendered")

  React.useEffect(() => {
      console.log("Effect function ran")
  }, [count]) // <--- dependency array
  // without it, it will run on every rerender
  // with it empty, it will only run once
  // with it set to count, it will run anytime count changes
  
  return (
      <div>
          <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
          <h2>The count is {count}</h2>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
      </div>
  )
}

// 1. What is a "side effect" in React? What are some examples?
// - Any code that affects an outside system.
// - local storage, API, websockets, two states to keep in sync


// 2. What is NOT a "side effect" in React? Examples?
// - Anything that React is in charge of.
// - Maintaining state, keeping the UI in sync with the data, 
//   render DOM elements


// 3. When does React run your useEffect function? When does it NOT run
//    the effect function?
// - As soon as the component loads (first render)
// - On every re-render of the component (assuming no dependencies array)
// - Will NOT run the effect when the values of the dependencies in the
//   array stay the same between renders


// 4. How would you explain what the "dependecies array" is?
// - Second paramter to the useEffect function
// - A way for React to know whether it should re-run the effect function



// Use effect cleaning up

export default function WindowTracker() {
    
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  
  React.useEffect(() => {
      function watchWidth() {
          console.log("Setting up...")
          setWindowWidth(window.innerWidth)
      }
        // trying to run the event listener when the component is unmounted
        // will cause a memory leak
      window.addEventListener("resize", watchWidth)
      
      // it returns the 'clean up' 2nd function when the component is unmounted
      return function() {
          console.log("Cleaning up...")
          window.removeEventListener("resize", watchWidth)
      }
  }, [])
  
  return (
      <h1>Window width: {windowWidth}</h1>
  )
}
