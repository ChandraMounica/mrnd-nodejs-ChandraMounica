var express = require('express');
var router = express.Router();
var contacts=[];
var index=0;

/* GET contacts */
router.get('/:id', function(req, res, next) {
	//console.log(req.params.id);
	//should put double quotes or not?
	//can we print any thing?
	res.send(contacts[(parseInt(req.params.id))]);
	
	
});

router.post('/', function(req, res, next) {
	contacts[index+""]=req.body;
	//contacts.push(req.body);
  console.log(req.body+"");
  //console.log("i am in post now");
 // res.send(contacts[index]);
 res.send(contacts.length-1+"");
  index=index+1;
});

router.put('/:id', function(req, res, next) {
  console.log(req.body);
 
  contacts[(parseInt(req.params.id))].firstName=req.body.firstName;
		  
	  
  res.send(contacts[(parseInt(req.params.id))]);

});

router.put('/chat/:id', function(req, res, next) {
  console.log(req.body);
 
  contacts[(parseInt(req.params.id))].messages.push(req.body.msg);
	contacts[(parseInt(req.params.id))].no_msgs+=1;	  
	  
  res.send(contacts[(parseInt(req.params.id))].no_msgs+"");

});

router.get('/chat/:id',function(req,res,next){
	res.send(contacts[(parseInt(req.params.id))]);
})



module.exports = router;
