const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose =  require("mongoose");
const LocalStrategy =  require("passport-local");
const nodemailer = require('nodemailer');

// first I try to work with models by an error of connection with mongodb appeared 
//const User =  require("../models/user");
//const Demande =  require("../models/demande");

// recordRoutes is an instance of the express router.
// i use it to define my routes.
// The router will be added as a middleware and will take control of requests.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// those attributes I will use them later
const ObjectId = require("mongodb").ObjectId;
var current = undefined;

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'hamdaouiwafae2000@gmail.com',
    pass: 'wjtqqudvbgavqzcr'
  },
  tls: {
      rejectUnauthorized: false
  }
  
});
// this fnction help me get the current user

function isLoggedIn(req,res,next) {
  // basically this commande return the current user  
  // req.session.user
  // but for me it always return an undefined value so I declare a const and I initialize  it by "undefined"
  // and in login part I affect to it the user who try to connect 
  //so to verify if there is someone who is login  I just verify the value of attribute "current"
  if(current){
    return next();
  }else{
    return res.status(401).json('unauthorize')
  }
}
// This is the login section 
recordRoutes.route("/login").post(function (req, res) {
  let db_connect = dbo.getDb("demandes");
  const { username, password } = req.body;
  db_connect.collection("users").findOne({username:username,password:password}, function (err, result) {
    if (err) throw err;
    res.json(result);
    req.user=result;
    current=result;
    req.session.save();
    console.log("result",result)
    console.log("req.user",req.user)
  });
});

recordRoutes.route("/logout").post(isLoggedIn, async (req, res) => {
  //basicaly this is the code to destroy a session 
  //req.session.destroy((error) => {
    //if (error) throw error
    //res.clearCookie('session-id') // cleaning the cookies from the user session
    //res.status(200).send('Logout Success')
  //})

  //but bacause it doesn't work and  i already use "current" attrubute so all i need is to change its value
  current = undefined;
})

// This section will help me get a list of all the records.
recordRoutes.route("/record").get(isLoggedIn, function (req, res) {
  console.log("req.user from",req.user)
    let db_connect = dbo.getDb("demandes");
    db_connect
   .collection("demandes")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
// This section will help me get a list of all the records of  specific user
recordRoutes.route("/userRecord").get(isLoggedIn, function (req, res) {
  console.log("req.user from",req.user)
    let db_connect = dbo.getDb("demandes");
    db_connect
   .collection("demandes")
   .find({matricul:current.matricul})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
// This section will help you get a list of all the users.
recordRoutes.route("/user").get(isLoggedIn,function (req, res) {
  let db_connect = dbo.getDb("demandes");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });


// This section will help us get a single record by id
recordRoutes.route("/record/:id").get(isLoggedIn,function (req, res) {
 let db_connect = dbo.getDb("demandes");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("demandes")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
// This section will help us get a single user by id
recordRoutes.route("/user/:id").get(isLoggedIn,function (req, res) {
  let db_connect = dbo.getDb("demandes");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("users")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });
 
// This section will help us create a new record.
recordRoutes.route("/record/add").post(isLoggedIn,function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   matricul: req.body.matricul,
   nom: req.body.nom,
   prenom: req.body.prenom,
   ecole: req.body.ecole,
   ressource: req.body.ressource,
   duree: req.body.duree,
   date: req.body.date,
   status: req.body.status,
 };
 db_connect.collection("demandes").findOne({ressource:myobj.ressource,date:myobj.date,duree:myobj.duree,status:"Validée"}, function (err, demande) {
  if (demande){
    return response.status(400).json({error:"Ressource est occupée pendant cette durée! essayer avec une autre durée"})
  }else{
  db_connect.collection("demandes").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
    console.log("res",res)
    console.log("error",err)
  });
}
});
});
// This section will help us create a new user
// in the beginning I let this task to the student to register or not but because this app is not public is just for student of university 
// so I choise to give this task to the administration in order to ensure that all student have an account(like what we have in konosys app) 
recordRoutes.route("/register").post(isLoggedIn,function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    matricul: req.body.matricul,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  db_connect.collection("users").findOne({matricul:myobj.matricul,username:myobj.username,email:myobj.email}, function (err, user) {
    if (user){
      return response.status(400).json({error:"Utilisateur déjà existe!"})
    }else{
    db_connect.collection("users").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
      console.log("res",res)
      console.log("error",err)
    });
  }
  });
 });

// This section will help us update a record by id.
recordRoutes.route("/update/:id").post(isLoggedIn,function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
    ressource: req.body.ressource,
    duree: req.body.duree,
    date: req.body.date,
    status: "En Attente",
   },
 };
 db_connect
   .collection("demandes")
   .findOne({_id:{$ne:ObjectId(req.params.id)},ressource:(req.body.ressource),duree:(req.body.duree),date:(req.body.date)}, function (err, demande) {
     if (demande){
      return response.status(400).json({error:"Modification échouée! essayez avec d'autres durées ou dates "})
     }else{
      db_connect
     .collection("demandes")
     .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 item updated");
     response.json(res);
     console.log("status",req.body.status)
   });
     }
   });
});

// This section will help us validate a record by id.
recordRoutes.route("/validate/:id").post(isLoggedIn,function (req, response) {
  let db_connect = dbo.getDb();
  console.log("matri",req.body.matricul)
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
     status: "Validée"
    },
  };
db_connect.collection("demandes")
.updateOne(myquery, newvalues, function (err, res) {
if (err) throw err;
console.log("1 item updated");
response.json(res);
});
db_connect.collection("demandes").findOne(myquery,function(err,demande){
  if(demande){
    db_connect.collection("users").findOne({matricul:demande.matricul}, function(err,user){
      if(user){
      console.log("email",user.email)
      var mailOptions = {
      from: 'hamdaouiwafae2000@gmail.com',
      to: user.email,
      subject: 'Confirmation message',
      text: 'Votre réservation est validée !'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
      }
    })
  }
});
 });
// This section will help us reject a record by id.
recordRoutes.route("/reject/:id").post(isLoggedIn,function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
     status: "Rejetée"
    },
  };
  
db_connect.collection("demandes")
.updateOne(myquery, newvalues, function (err, res) {
if (err) throw err;
console.log("1 item updated");
response.json(res);
});
  db_connect.collection("demandes").findOne(myquery,function(err,demande){
    if(demande){
      db_connect.collection("users").findOne({matricul:demande.matricul}, function(err,user){
        if(user){
        console.log("email",user.email)
        var mailOptions = {
        from: 'hamdaouiwafae2000@gmail.com',
        to: user.email,
        subject: 'Confirmation message',
        text: 'Votre réservation est rejetée !'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
        }
      })
    }
  })
 });

// This section will help us update a user by id.
recordRoutes.route("/updateuser/:id").post(isLoggedIn,function (req, response) {
  console.log("current user",current)
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
     matricul: req.body.matricul,
     username: req.body.username,
     email: req.body.email,
     password: req.body.password,
    },
  };
  db_connect
    .collection("users")
    .findOne({_id:{$ne:req.params.id},matricul:(req.body.matricul),username:(req.body.username),email:(req.body.email)}, function (err, user) {
      if (user){
        return response.status(400).json({error:"Modification échouée! essayez avec d'autres données "})
      } else{
    db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("user updated");
      response.json(res);
    });
      }
    });
 });
 
// This section will help us delete a record by id
recordRoutes.route("/:id").delete(isLoggedIn,(req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("demandes").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 item deleted");
   response.json(obj);
 });
});

// This section will help you delete a user by id
recordRoutes.route("/delete/:id").delete(isLoggedIn,(req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 item deleted");
    response.json(obj);
  });
 });
 
module.exports = recordRoutes;