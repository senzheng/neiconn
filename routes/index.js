var express = require('express');
var router = express.Router();

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
});

router.get('/get',function (req, res, next){
	var db = req.db;
    var collection = db.get('comments');
    collection.find({},{},function(e,doc){
        res.end(JSON.stringify(doc));
   });
})

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
