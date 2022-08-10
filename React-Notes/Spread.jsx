// ********************************************************** //
// Spread Syntax (...) - JS
// ********************************************************** //

// ... allows an iterable, such as an array or string, to be 
// expanded in places where zero or more arguments (for function
// calls) or elements (for array literals) are expected

const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

function addItem() {
  setThingsArray(prevThingsArray => {
    // Must use template strings (``) to use object literal ${} inside
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
  })
}

// EX 2

const [contact, setContact] = React.useState({
  firstName: "John",
  lastName: "Doe",
  phone: "+1 (719) 555-1212",
  email: "itsmyrealname@example.com",
  isFavorite: true
})

function toggleFavorite() {
  setContact(prevContact => {
      return {
          ...prevContact,
          isFavorite: !prevContact.isFavorite
      }
  })
}

// This is equvalent to 

function toggleFavorite() {
  setContact(prevContact => {
      return {
          firstName: "John",
          lastName: "Doe",
          phone: "+1 (719) 555-1212",
          email: "itsmyrealname@example.com",
          isFavorite: true,   
          isFavorite: !prevContact.isFavorite
      }
  })
}

//  otherwise you replace the entire array with just isFavorite


// EX 3 - Map through box array, change background on click

// Box.js
export default function Box(props) {
  const styles = {
      backgroundColor: props.on ? "#222222" : "transparent"
  }
  
  return (
      <div 
          style={styles} 
          className="box"
          onClick={()=>props.toggle(props.id)}
      >
      </div>
  )
}

// App.js
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}

// boxes.js

export default [
  {
      id: 1,
      on: true
  },   
  {
      id: 2,
      on: false
  },   
  {
      id: 3,
      on: true
  },   
  {
      id: 4,
      on: true
  },   
  {
      id: 5,
      on: false
  },   
  {
      id: 6,
      on: false
  },   
]