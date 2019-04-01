// Create a route handler function on the path /sum that accepts two query parameters named a and b and find the sum of the two values. Return a string in the format "The sum of a and b is c". Note that query parameters are always strings so some thought should be given to converting them to numbers.


const express = require('express');
const app = express();

// path = /sum
app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = parseInt(a + b);
    res.send(`The sum of ${a} and ${b} is ${c};`);
  });

app.listen(8000, () => {
console.log('Express server is listening on port 8000!');
});