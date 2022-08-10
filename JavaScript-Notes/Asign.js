// Object.assign copies properties from object to the target object

const studentDetails = {
  firstName: 'janaka',
  lastName: 'siriwardena',
  age: 28,
  country: 'sri lanka',
  email: 'j.siri@totalinternet.com',
  discordUsername: 'JS1',
}

function Student(data) {

  // this.firstName = data.firstName
  // this.lastName = data.lastName
  // this.age = data.age
  // this.country = data.country
  // this.email = data.email
  // this.discordUsername = data.discordUsername

  // All of this becomes this
  Object.assign(this, data)
  
  this.summariseStudent = function () {
      console.log(`${this.firstName} ${this.lastName} is ${this.age} years old 
      and comes from ${this.country}. Their email is ${this.email} and you can find them on discord as ${this.discordUsername}`)
  }
}

const newStudent = new Student(studentDetails)
newStudent.summariseStudent()