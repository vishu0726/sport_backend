const Router = require("express").Router();

let data = [];

//during register the user we pass post request and save data 
Router.post('/register',(req,res) => {
    data.push({...req.body,id:new Date().getMilliseconds()});
    res.send("Data post successfuly");
})
//during login we get the data from the save data
Router.get('/login',(req,res) => {
    res.send(data);
})


module.exports = Router;