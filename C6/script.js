"use strict";

class Student {
  constructor(name, phone_number, age, hobbies) {
    this.name = name;
    this.phone_number = phone_number;
    this.age = age;
    this.hobbies = hobbies;
  }

  getHobbies() {
    return this.hobbies;
  }

  setHobbies(newHobbies) {
    this.hobbies = newHobbies;
  }

  greetings() {
    console.log(`Hello,my name is ${this.name} and I am ${this.age} of age`);
  }
}

const student1 = new Student("John Doe", "0724134865", 32, [
  "Programming",
  "Reading",
]);

student1.setHobbies(["Movies", "English"]);
console.log(student1.getHobbies());
student1.greetings();

const students = [
  "Sharleen Rollo",
  "Della Wally",
  "Ryana Ami",
  "Lydia Mercy",
  "Mikey Valorie",
  "Chester Lexie",
  "Danette Luanna",
  "Adalyn Goddard",
  "Johnnie Peta",
  "Natille Nigellus",
];

const phone_number = [
  "0724582011",
  "0724582012",
  "0724582013",
  "0724582014",
  "0724582015",
  "0724582016",
  "0724582017",
  "0724582018",
  "0724582019",
  "0724582010",
];

const age = [22, 23, 24, 25, 21, 25, 25, 20, 19, 23];

const hobbies = [
  "Music",
  "Books",
  "Programming",
  "Travelling",
  "Books",
  "History",
  "Movies",
  "Hiking",
  "Skying",
  "English",
];

const allStudents = [];

for (let i = 0; i < students.length; i++) {
  allStudents.push(new Student(students[i], phone_number[i], age[i], hobbies[i]));
  console.log(allStudents[i]);
}

console.log(`----IF CONTAINS`);

for (let i = 0; i < allStudents.length; i++){
  if (allStudents[i].hobbies === 'Books' || allStudents[i].hobbies === "Music") {
    allStudents[i].greetings();
  }
}
