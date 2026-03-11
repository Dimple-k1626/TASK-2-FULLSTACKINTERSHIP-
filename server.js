const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

let tempStorage = []; // temporary storage

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", (req, res) => {

const {name,email,age,password} = req.body;

// server side validation
if(!name || !email || !age || !password){
return res.send("All fields are required");
}

if(age < 18){
return res.send("Age must be greater than 18");
}

if(password.length < 6){
return res.send("Password must be at least 6 characters");
}

// store data temporarily
tempStorage.push(req.body);

console.log("Stored Data:", tempStorage);

res.sendFile(__dirname + "/public/success.html");
});

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});