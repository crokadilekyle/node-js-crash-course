class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hi.  I am ${this.name} and I am ${this.age}.`;
  }
}

module.exports = Person;
