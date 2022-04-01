var filename = "./user_data.json";

const fs = require("fs");

if(ffs.existsSync(filename)) {
var data = fs.readFileSync(filename, 'utf-8');
var users = JSON.parse(data)
if(typeof users["kazman"] != 'undefined') {
console.log(users["kazman"].password);
}
} 
else {
    console.log(`${filename} does not exist!`);
}