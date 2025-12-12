export const handler= async(event)=>{
    const id=event.pathParameters.id;
    // here we get the id using that we find user in db and delete that user
    return {
       statusCode:204,
       headers:{
           "content-type":"application/json"
       },
       body: JSON.stringify({
           success: true,
           message: "User deleted successfully"
         })
    }
}