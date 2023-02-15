// Create a javascript object called "student" that has the following properties: name, age, grade, and favorite subject.
// add a method to the object called "greet" that logs a greeting to the console in the following format: "Hello, my name is <name> and I am a student in <grade> grade."
const student = {
    name: 'John',
    age: 17,
    grade: 12,
    favoriteSubject: 'Math',
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am a student in ${this.grade} grade.`);
    }
};

function myName(name, age, grade, favoriteSubject) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.favoriteSubject = favoriteSubject;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name} and I am a student in ${this.grade} grade.`);
    }
}

// call the "greet" method on your instance of the "student" in step 3.
const me = new myName('John', 17, 12, 'Math');

