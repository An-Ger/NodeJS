const express = require('express')
const app = express();

app.use('/home', (req, res, next) => {
    console.log("home -1");
    res.end("home end")
    next();
})

app.use((req, res, next) => {
    console.log("222");
})

app.listen(8000, () => {
    console.log('success');
})