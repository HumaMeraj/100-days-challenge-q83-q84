//Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
// Outputs: "I love TypeScript and TypeScript is awesome!"
