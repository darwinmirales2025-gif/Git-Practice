class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

class Student extends Person {
  study() {
    return this.getName() + " is studying.";
  }
}

const learner = new Student("Darwin");

console.log(learner.getName());
console.log(learner.study());