export const handler = async (event) => {
    const { name, email } = JSON.parse(event.body || "{}");
  
    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        message: "User created successfully",
        user: { name, email }
      })
    };
  };
  