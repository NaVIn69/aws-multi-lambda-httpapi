const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/userdeatils", (req, res, next) => {
    const user={
        name:"navin",
        email:"navin@gmail.com"
    }
  return res.status(200).json({
    success: true,
    message: "get the user deatils",
    user:user
  });
});

app.post('/create',(req,res,next)=>{
  const {name, email}=req.body;
    return res.status(201).json({
       message: "User created successfully",
       user: {name, email}
    })
})

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

exports.handler = serverless(app);

// this is one lamdba function with express , 
/*
Pros
very easy for developer
all routes is one place
can reuse middleware
fast tp build

routining is handle by express
 API Gateway send every request to the one lambda function

cons

cold start slower
one lamdba means big bundle
harder to scale function independently
all routes deploy together
not usefull for bigger codebase

*/
