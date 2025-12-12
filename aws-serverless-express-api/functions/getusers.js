export const handler = async(event)=>{
    const id=event.pathParameters.id;
    // from here we fetch data from db using id
    const user={
        name:"navin",
        email:"navin@gmail.com"
    }
    return {
        statusCode:200,
        Headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            success: true,
            message: "User created successfully",
            user:user
          })
    }
}
