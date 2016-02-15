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

router.get('/index', function(req, res, next){
  if(req.session.email){
       res.render('index');
     }

     res.render('/');
});

router.get('/result', function(req, res, next){
  if(req.session.email){
      res.render('search-result'); 
   } 
});

router.get('/profile', function(req, res, next){
  if(req.session.email){
    res.render('profile');
  }
   res.render('/');
});

router.get('/activity',function(req, res, next){
   res.render('activity');
});


router.get('/login/:email/:password', function (req, res, next){
   var db = req.db;
   var collection = db.get('user');
   
   collection.find({"email" : req.params.email , "password" : req.params.password},{},function (err, data){
      if(data.length == 1){
        req.session.email = data[0].email;
        res.redirect('/index');
      }else if(data.length != 1){
        res.send("Please check you username and password");
      }
       
       //console.log(username);
       //res.end(JSON.stringify(data));

   });
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
        subject: "	welcome", // Subject line
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
