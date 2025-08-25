// Type Safety
let dogAge: number = 5;
dogAge = 10;
console.log("Dog age is: ", dogAge);

let birdType: string = "Parrot";

// Enum
enum Color {
	Red,
	Green,
	Blue,
}

let c: Color = Color.Green;
console.log(Color[c]); // Green
