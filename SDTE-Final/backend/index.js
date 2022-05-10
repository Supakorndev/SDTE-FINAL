const express = require("express")
var cors = require('cors')
const path = require("path")
const app = express();
const client = require("./config")
app.use(cors())

app.use(express.static('static'))
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 


app.get("/result", async(req, res, next)=>{
    let result
    await client.connect()
    const session = client.startSession();
    try{
        result = await client.db("SDTE").collection("SDTE-Final").findOne({name: req.query.search}, {tag: {faculity: req.query.faculty, round: req.query.round, project: req.query.org,course: req.query.lak}});
        res.send(result)
        console.log(result)
    }catch(error){
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})