import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
//const qualifications =['education', 'skills','participation'];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
     res.render("index.ejs", {
       education: true,
       skills: false,
       participations: false
     });
});
   
app.get("/education", (req, res) => {
     res.render("index.ejs", {
       education: true,
       skills: false,
       participations: false
     });
});
   
app.get("/tech-skills", (req, res) => {
     res.render("index.ejs", {
       education: false,
       skills: true,
       participations: false
     });
});
   
app.get("/participations", (req, res) => {
     res.render("index.ejs", {
       education: false,
       skills: false,
       participations: true
     });
});



app.listen(port, ()=>{
     console.log(`Server is running on port ${port}`);
});