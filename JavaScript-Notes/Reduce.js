const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

const totalGrades = grades.reduce(function(total, currentGrade){
    return total + currentGrade
})

// loops through array and adds them using a running total and the current grade it is on

console.log(`The class average is ${totalGrades/grades.length}`)