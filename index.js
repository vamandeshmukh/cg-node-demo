const express = require('express');
const app = express();
const port = 3333;

app.get('/', (req, res) => {
    console.log("Hello");
    res.send('Hello World!');
});

app.get('/emp', (req, res) => {
    console.log("Emp");
    res.send('Employee data');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
