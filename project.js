const express = require("express");
const app = express();

const student = require("./student")

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: false }));

const students = [];

app.post("/student", (req, res) => {
    students.push({ 
        student
    })
  
    res.send("success")

});

app.get("/student", (req, res)=> {
   
    res.send(students);

});

app.get("/student/:searchBy/:value", (req,res)=> {
    for(let i = 0; i < students.length; ++i){
        if(students[i][req.params.searchBy] === req.params.value){
            return res.send(students[i]);
        }
    }
    return res.send("student does not excist")
})

app.put("/students/:searchByValue", (req, res) => {
    for (let i = 0; i < students.length; ++i){
        if(students[i].email === req.params.searchByValue) {
            for (let key in req.body){
                students[i][key] = req.body[key];
            }
        }
    }
    res.send("Changes has been done")
})

app.listen(3000);