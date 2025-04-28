
const express =require("express")

const PORT=process.env.PORT||3000
const app=express();

//get route
app.get("/", (req, res)=>{
    return res.send("backend is running")
})

app.listen(PORT,()=>{
    console.log('server is running ${PORT}')
})

