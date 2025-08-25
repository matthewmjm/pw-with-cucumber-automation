// Simple function using typescript
// More traditional approach
function greet(name: string) {
	return "Hello " + name;
}
// Call the function with a parameter
console.log(greet("Sarah"));

// Arrow functions
const welcome = (name: string): string => {
	return "Welcome " + name;
};
// Call the arrow function with a parameter
console.log(welcome("Joe"));
