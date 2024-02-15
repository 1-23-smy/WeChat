require('dotenv').config()
const express=require('express');
const DbConnect=require('./database.js')
const router=require('./routes')
const cors=require('cors')
const app=express();
const cookieParser=require('cookie-parser')
app.use(cookieParser())
app.use(express.json({
    limit:"8mb"
}))
const corsOption = {
    credentials:true,
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use('/storage',express.static('storage'))
const PORT=process.env.PORT || 5500
DbConnect()
app.use(router)
app.get('/',(req,res)=>{
    res.send("Hello from express")
})

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})