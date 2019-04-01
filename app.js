// Create a route handler function on the path /sum that accepts two query parameters named a and b and find the sum of the two values. Return a string in the format "The sum of a and b is c". Note that query parameters are always strings so some thought should be given to converting them to numbers.

const express = require('express');
const app = express();

// path = /sum
// app.get('/sum', (req, res) => {
//     // parseInt() converts to a number
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     const c = parseInt(a + b);
//     res.send(`The sum of ${a} and ${b} is ${c};`);
//   });

// app.listen(8000, () => {
// console.log('Express server is listening on port 8000!');
// });

//Create an endpoint /cipher. The handler function should accept a query parameter named text and a one named shift. Encrypt the text using a simple shift cipher also known as a Caesar Cipher. It is a simple substitution cipher where each letter is shifted a certain number of places down the alphabet. So if the shift was 1 then A would be replaced by B, and B would be replaced by C and C would be replaced by D and so on until finally Z would be replaced by A. using this scheme encrypt the text with the given shift and return the result to the client. Hint - String.fromCharCode(65) is an uppercase A and 'A'.charCodeAt(0) is the number 65. 65 is the integer value of uppercase A in UTF-16. See the documentation for details.

app.get('/cipher', (req, res) => {
    const base =  'A'.charCodeAt(0);
    const shift = parseInt(req.query.shift);
    let text = req.query.text;

    const cipher = text
        .toUpperCase()
        .split('')
        .map(character => {
            let code = character.charCodeAt(0);
            if (code <= base + 26 || code >= base){
                text = code + shift;
                return convertedLetter = String.fromCharCode(text);
            }
        })
        .join('')     
     
    res.send(cipher);
  });

app.listen(8000, () => {
console.log('Express server is listening on port 8000!');
});
