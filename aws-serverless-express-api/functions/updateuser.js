export const handler= async(event)=>{
     const id=event.pathParameters.id;
     const {name}=JSON.parse(event.body||{});
     // here we get the id using that we find user in db and change the with that name
     return {
        statusCode:200,
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            success: true,
            message: "User updated successfully",
            user: { name}
          })
     }
}