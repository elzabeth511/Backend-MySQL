//Js code should be executed in "strict mode"
"use strict";
//require the express and body-parser modules
const express = require('express');
const bodyParser = require('body-parser');
//require the sqlite3 package 
const sqlite3 = require('sqlite3').verbose();
//create a database object
const database = new sqlite3.Database("../mydb.sqlite");
var cors = require('cors')


//require jsonwebtoken and bcryptjs:
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//a secret key to sign the payloads to create JSON tokens:
const SECRET_KEY = "secretkey23456";

//create an Express application and en Express router.
const app = express();
const router = express.Router();
app.use(cors())
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json())

router.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const role = req.body.role;

    const password = bcrypt.hashSync(req.body.password);
    createUser([name, email,role, password], (err) => {
        if (err) return res.status(500).send("Server error!");
        findUserByEmail(email, (err, user) => {
            if (err) return res.status(500).send('Server error!');
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                expiresIn: expiresIn
            });
            res.status(200).send({
                "user": user, "accessToken": accessToken, "expires_in": expiresIn
            });
        });
    });

});
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    findUserByEmail(email, (err, user) => {
        if (err) return res.status(500).send('Server error!');
        if (!user) return res.status(404).send('User not found!');
        const result = bcrypt.compareSync(password, user.password);
        if (!result) return res.status(401).send('Password not valid!');
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
            expiresIn: expiresIn
        });
        res.status(200).send({
            "user": user,
            "accessToken": accessToken,
            "expires_in": expiresIn
           
        });
    });
});

app.put('/update/:id', function(req,res){
    database.serialize(()=>{
      database.run('UPDATE users SET email = ? WHERE id = ?', [req.body.email,req.params.id], function(err){
        if(err){
          res.send("Error encountered while updating");
          return console.error(err.message);
        }
        res.send("Entry updated successfully");
        console.log("Entry updated successfully");
      });
    });
  });

router.get('/', (req, res) => {
    res.status(200).send('This is an authentication  server');
});
router.delete('/del/:id', function(req,res){
    database.serialize(()=>{
      database.run('DELETE FROM users WHERE id = ?', req.params.id, function(err) {
        if (err) {
          res.send("Error encountered while deleting");
          return console.error(err.message);
        }
        res.send("Entry deleted");
        console.log("Entry deleted");
      });
    });
  });
app.use(router);
const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
    console.log('Server listening at http://localhost:' +
        port);
});

// add three methods to create the users table
// createUsersTable, findUserByEmail, createUser
// use back tick since using multiline query
const createUsersTable = () => {
    const sqlQuery =
        `
    CREATE TABLE IF NOT EXISTS users (
    id integer PRIMARY KEY,
    name text,
    email text UNIQUE,
    role text,
    password text)`;
    return database.run(sqlQuery);
}
const findUserByEmail = (email, cb) => {
    return database.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
        cb(err, row)
    });
}
const createUser = (user, cb) => {
    return database.run('INSERT INTO users (name, email,role, password) VALUES  (?,?,?,?)', user, (err) => {
        cb(err)
    });
}

const updateUser = (email,cb) =>{
    return database.run(`UPDATE emp SET password = ? WHERE email = ?`, [email], (err,row) =>{
        cb(err,row)
    });
}
// let’s create the users table by calling the createUsersTable()
createUsersTable()