Student Registration Form – Full Stack Web Task
📌 Project Overview

This project is a Student Registration Form built using HTML, JavaScript, and Node.js.
It demonstrates both client-side validation and server-side validation while temporarily storing submitted data on the server.

The project also includes a modern professional UI with icons and a success confirmation page.

🚀 Features
 
Modern responsive UI
 
Inline CSS styling

JavaScript client-side validation

Node.js server-side validation

Temporary server data storage

Success confirmation page

Professional input fields with icons

🛠 Technologies Used

HTML5

JavaScript

Node.js

Express.js

📂 Project Structure

Task2_Form_Validation

├── server.js
├── package.json
└── public
    ├── index.html
    └── success.html

⚙ Installation and Setup
1️⃣ Clone the repository

git clone https://github.com/yourusername/Task2_Form_Validation.git

2️⃣ Navigate to project folder

cd Task2_Form_Validation

3️⃣ Install dependencies

npm install

4️⃣ Run the server

node server.js

5️⃣ Open in browser

http://localhost:3000

✅ Form Validation
Client-Side Validation

Implemented using JavaScript to check:

Empty fields

Email format

Age requirement (18+)

Password length (minimum 6 characters)

Server-Side Validation

Implemented in Node.js to ensure:

All fields are present

Age requirement is met

Password strength is acceptable

💾 Temporary Data Storage

Submitted form data is stored temporarily in a server-side array.

Example:

[
 { 
   name: "Dimple",
   email: "dimple@email.com",
   age: 20,
   password: "******"
 }
]

This data is stored in memory and printed in the server console.

🎯 Learning Outcomes

This project demonstrates:

HTML form creation

Inline CSS styling

JavaScript DOM manipulation

Client-side validation

Server-side validation using Node.js

Express server setup

Handling POST requests

Basic full stack development

📸 Application Flow

User opens the registration form
⬇
User enters details
⬇
JavaScript validation runs
⬇
Form data sent to server
⬇
Server validates data
⬇
Data stored temporarily
⬇
Success page displayed

👩‍💻 Author

Dimple K

📜 License

This project is created for educational and academic purposes.
