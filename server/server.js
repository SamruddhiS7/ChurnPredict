import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from "cookie-parser"
import jwt from 'jsonwebtoken'


const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: [""],
        methods: ["POST, GET"],
        credentials: true
    }
))
    
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
})


/*app.post("/login", (req, res)=> {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    
        db.query(sql,[req.body.email, req.body.password],(err,data) => {
        if(err) return res.json("Login Failed!");
        if(data.length > 0) {
            const name = data[0].name,
            const token = jwt.sign{(name), "our-jsonwebtoken-secret-key", {expiresIn: 'Id'}},


        } else {
            return (res.json({Message: "No Records existed"});)
        }
    })
*/
    app.listen(3309, () => {
        console.log("Listening...");
    })
    

//})
