const express = require('express')
const app = express();

app.use((req, res, next) => {
    console.log("app.use");
    next();
})

app.get('/home', (req, res, next) => {
    console.log("home path and method");
})

app.post('/login', (req, res, next) => {
    console.log('login');
})

app.listen(8000, () => {
    console.log('success');
})