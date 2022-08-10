/* 1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
Right before the form is submitted.


2. In a React app, when do you gather all the data from
   the filled-out form?
As the form is being filled out. The data is all held in local state.


3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
`name` property.


4. What's different about saving the data from a checkbox element
   vs. other form elements?
A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead.


5. How do you watch for a form submit? How can you trigger
   a form submit?
onSubmit handler on the `form` element. */

export default function Form() {
  const [formData, setFormData] = React.useState(
      {
          // initialized state to store needed values for the inputs on the form
          // each type does not have to have every value
          firstName: "", 
          lastName: "", 
          email: "", 
          comments: "", 
          isFriendly: true,
          employment: "",
          favColor: ""
      }
  )
  
  // onChange constantly updates localstorage with values in the form
  function handleChange(event) {
      // from the event, pull out name, value, type (to check if checkbox), and checked
      const {name, value, type, checked} = event.target
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              // update property based on name pulled from event
              // if no checkbox, [name]: value is fine
              // it will then update the name (initialized as '')
              // to whatever is being entered into the field
              [name]: type === "checkbox" ? checked : value
          }
      })
  }
  
  // onSubmit only updates to server or wherever else when submit is called
  function handleSubmit(event) {
      event.preventDefault() // prevents page from reloading on submit
      // submitToApi(formData)
      console.log(formData)
  }
  
  return (
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
          />
          <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
          />
          <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
          />
          <textarea 
              value={formData.comments}
              placeholder="Comments"
              onChange={handleChange}
              name="comments"
          />
          <input 
              type="checkbox" 
              id="isFriendly" 
              checked={formData.isFriendly}
              onChange={handleChange}
              name="isFriendly"
          />
          <label htmlFor="isFriendly">Are you friendly?</label>  {/*htmlFor connects label to id */} 
          <br /> 
          <br />
          
          <fieldset>
              <legend>Current employment status</legend>
              <input 
                  type="radio"
                  id="unemployed"
                  name="employment"
                  value="unemployed"
                  checked={formData.employment === "unemployed"}
                  onChange={handleChange}
              />
              <label htmlFor="unemployed">Unemployed</label> {/*htmlFor connects label to id */}
              <br />
              
              <input 
                  type="radio"
                  id="part-time"
                  name="employment"
                  value="part-time"
                  checked={formData.employment === "part-time"}
                  onChange={handleChange}
              />
              <label htmlFor="part-time">Part-time</label>  {/*htmlFor connects label to id */}
              <br />
              
              <input 
                  type="radio"
                  id="full-time"
                  name="employment"
                  value="full-time"
                  checked={formData.employment === "full-time"}
                  onChange={handleChange}
              />
               <label htmlFor="full-time">Full-time</label> {/*htmlFor connects label to id */}
              <br />
          </fieldset>
          <br />
          
          <label htmlFor="favColor">What is your favorite color?</label> {/*htmlFor connects label to id favColor*/}
          <br />
          <select 
              id="favColor" 
              value={formData.favColor}
              onChange={handleChange}
              name="favColor"
          >
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
          </select>
          <br />
          <br />
          <button>Submit</button>
      </form>
  )
}
