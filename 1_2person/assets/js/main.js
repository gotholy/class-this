class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    return `${this.name} is ${this.age} years old`;
  }
}
const person1 = new Person("Andre", 27);
console.log(person1.info());
