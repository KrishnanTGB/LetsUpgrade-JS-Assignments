console.log("Script Loaded For Day4 - Assignment2");

//Destructuring Objects
const student = {
    name : "Krishna",
    age : 21,
    projects :{
        gradingSystem : "A simple grading system by getting marks",
    },
}

let newName = student.name;
let newProjects = student.projects.gradingSystem;
console.log(`Name is ${newName}, and the project is ${newProjects}`);

const {name2 , age2 , projects2:{gradingSystemnew}} = student;
console.log(name2, age2, gradingSystemnew);