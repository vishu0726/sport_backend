const express = require("express");
const Route = require('./Routes/index');
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

//middelware
app.use('/',Route);
app.all("*",(req,res) => {
    res.send("path not found")
})


app.get('/',(req,res) => {
    res.send('hello');
})










const PORT = 4000 || process.env.PORT;
app.listen(PORT,(err) => {
    if (err) throw err;
    console.log(`app is listening on port ${PORT}`);
})