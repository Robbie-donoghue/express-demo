import express from "express";
const app = express();

app.listen(3000 , () =>
{
    console.log("server is running on port 3000")
})
app.get("/api" , (request, response) => 
{
    response.json({message: "Hello World!"});
})
app.post("/api" , (request, response) => 
{
    response.json({message: "Hello!"});
})
app.use(express.json())