const express = require('express');
const app = express();
const port = 3333;

let employee = {
    firstName: "Sonu",
    phone: 9876543210,
    city: "Hyderabad"
};

app.get('/', (req, res) => {
    console.log("Hello");
    res.send('Hello World!');
});

app.get('/emp', (req, res) => {
    console.log("Emp");
    res.send(employee);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
