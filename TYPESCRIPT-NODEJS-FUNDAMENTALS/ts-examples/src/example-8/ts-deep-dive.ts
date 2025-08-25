// A simple object example
// An object is a simple collection of properties
let student: { name: string; age: number } = {
	name: "Alice",
	age: 20,
};
console.log(student.age + " " + student.name);

// A simple class example
// A class is a blueprint for creating objects with specific properties and methods.
class Car {
	constructor(public model: string, public year: number) {}
}

let myCar = new Car("Toyota", 2020);
console.log(myCar.model + " " + myCar.year);
