var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");


var smtpTransport = nodemailer.createTransport({
   service : "Gmail",
   auth : {
       user: "sen.zheng@neiconn.com",
       pass: "xethcotnleacuewx"
   }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});


router.post('/postComments', function (req, res, next){
    var db = req.db;
    var email = req.body.email;
    var comment = req.body.comment;
    console.log(email);

    var collection = db.get('comments');

    collection.insert({
      "email" : email,
      "comment" : comment
    },function (err, doc){
      if(err){
        res.send("There was a problem to connect to the database! Please try later!");
      }else{
        res.redirect('/');
      }
    });

      smtpTransport.sendMail({
        from: "Neiconn <sen.zheng@neiconn.com>", // sender address
        to: " < " + email + ">", // comma separated list of receivers
        subject: "registration Confirmation", // Subject line
        //text: "Hello world ✔",
        html: "<h3>Welcome to Neiconn Family. Congratulations! You are a member of Neiconn Already!</h3>"// plaintext body
        }, function(error, response){
   if(error){
       console.log(error);
   }else{
       console.log("Message sent");
   }
});
});



function _insertComments (collectionName, req, res){
    var db = req.db;
    var email = req.body.email;
    var comment = req.body.comment;

    var collection = db.get(collectionName);

    collection.insert({
    	"email" : email,
    	"comment" : comment
    }, function (err, doc){
    	if(err){
    		res.send("There was a problem to connect to the database! Please try later!")
    	}else{
    		res.redirect('/');
    		    	}
    });
}

module.exports = router;
