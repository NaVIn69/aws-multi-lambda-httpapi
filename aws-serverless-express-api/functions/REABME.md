this is one API Gateway with multiple lamdba function
no express
API Gateway map each routes to its lamdba function

routing is done in serverless.yml file

pros
fast cold start
small, lightweight function
each functions deploy independently
AWS best practice for Microservices

very cheap
best for larger code base and for scaling 

cons->
no express convenience during writing code for handle
must manually parsing event and header and body


 GET - https://2dds41hd06.execute-api.us-east-1.amazonaws.com/users/{id}
  POST - https://2dds41hd06.execute-api.us-east-1.amazonaws.com/users
  PUT - https://2dds41hd06.execute-api.us-east-1.amazonaws.com/users/{id}
  DELETE - https://2dds41hd06.execute-api.us-east-1.amazonaws.com/users/{id}
