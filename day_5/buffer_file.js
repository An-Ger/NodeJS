const fs = require("fs");
fs.readFile("./1.text", {'encoding': 'utf-8'},(err, data) => console.log(data));
