var express = require('express');
var router = express.Router();
var contacts=[];
var index=0;
var fs = require('fs');
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
 
  index=index+1;
  
  var string="F:/nodejs/data//"
  //"../../data/";
  string+=contacts.length-1;
  string+="-Contact.json";
  console.log(string);
  fs.open(string,"w");
  fs.writeFile(string, JSON.stringify(req.body), function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
res.send(contacts.length-1+"");
});

router.put('/:id', function(req, res, next) {
  console.log(req.body);
 
  contacts[(parseInt(req.params.id))].firstName=req.body.firstName;

var fileName=  "F:/nodejs/data//"+parseInt(req.params.id)+"-Contact.json";
var obj = JSON.parse(fs.readFileSync(fileName));	
obj.firstName=req.body.firstName;
fs.writeFile(fileName,JSON.stringify(obj),function(err){
	if(err) throw err;
	console.log("It's saved!");
});
	
  res.send(contacts[(parseInt(req.params.id))]);

});

router.put('/chat/:id', function(req, res, next) {
  console.log(req.body);
 
  contacts[(parseInt(req.params.id))].messages.push(req.body.msg);
	contacts[(parseInt(req.params.id))].no_msgs+=1;	  
	
var fileName=  "F:/nodejs/data//"+parseInt(req.params.id)+"-Contact.json";
var obj = JSON.parse(fs.readFileSync(fileName));
obj.messages.push(req.body.msg);
obj.no_msgs+=1;
fs.writeFile(fileName,JSON.stringify(obj),function(err){
	if(err) throw err;
	console.log("it's saved!");
});
	
  res.send(contacts[(parseInt(req.params.id))].no_msgs+"");

});

router.get('/chat/:id',function(req,res,next){
	
	
	
	res.send(contacts[(parseInt(req.params.id))]);
});

router.get('/contact/:cid/message/:mid',function(req,res,next)
{
	res.send(contacts[(parseInt(req.params.cid))].messages[parseInt(req.params.mid)-1]);
})


module.exports = router;
