// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

const students = Object.keys(studentGrades) // ['tom', 'george', 'abdul']
for (let i = 0; i < students.length; i++) {
  const estudiante = students[i]
  const grade = studentGrades[estudiante]
  if (grade > 18) {
    console.log(estudiante + ' - ' + grade)
  }
}
console.log()
students.filter( // ['tom', 'george', 'abdul']
  estudiante => {
    const grade = studentGrades[estudiante]
    return grade > 18
  }
) //[ 'tom', 'abdul' ]
  .forEach(
    estudiante => {
      const grade = studentGrades[estudiante]
      console.log(estudiante + ' - ' + grade)
    }
  )

  // Prints
  // TOM - 20
  // ABDUL - 19