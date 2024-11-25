let myString = "Eleanor Roosevelt";
let myRegex = /^(Franklin|Eleanor)( \w+.)? Roosevelt$/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
result = myRegex.test(myString);