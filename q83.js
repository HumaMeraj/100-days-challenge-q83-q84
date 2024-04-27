//Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function convertCase(str) {
    var upperStr = str.toUpperCase();
    var lowerStr = str.toLowerCase();
    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
// Example: Changing the case of "Hello World"
convertCase("Hello World"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
