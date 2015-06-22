
var getContactFileName = function(id) {

	// We assume contacts are stored under data sub-folder
	return "data\\" + id + "-Contact.json";
}

describe("FilePersistence Test Suite", function(){

	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://localhost:3000";
	var contacts_url = base_url + "/contacts";
	var fs = require('fs');
	

	describe("create persist contact", function(){
		var idCreated;

		it("should create contact",function(done){

			var contact = new Object();
			contact.firstName = "jagan";
			contact.lastName = "peri";
			contact.phone = "23002300";
            contact.messages=[];
	        contact.no_msgs=0;
			console.log(JSON.stringify(contact));
		    
		    request.post({url: contacts_url,
		    			  body: contact,
		    			  json: true
		    			}, 
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);
							idCreated = body;
							done();
					    });
		});

		it("should persist contact",function(done){

			var fileName = getContactFileName(idCreated);

			var obj = JSON.parse(fs.readFileSync(fileName));

			expect(obj.firstName).toBe("jagan");
			done();

		});
		it("should update contact",function(done){

			var updatedContact = new Object();
			updatedContact.firstName = "jagan-updated";
			request.put({
							url: contacts_url + "/" + idCreated,
							body: updatedContact,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);

							var fileName = getContactFileName(idCreated);

							var obj = JSON.parse(fs.readFileSync(fileName));
							expect(obj.firstName).toBe("jagan-updated");
							done();
					    });
		});
	//});

	//TODO: Fill out the test case below that posts a message to a contact
	// and retrieves it back.
	//describe("post and get message to contact", function(){

		it("should post message to contact", function(done){
			//TODO: Write your test case here.
			var message = new Object();
			message.msg = "this is my msg";
			request.put({
							url: contacts_url +"/"+"chat"+"/"+ idCreated,
							body: message,
							json: true
						},
		    		    function(error, response, body){

						    
							expect(response.statusCode).toBe(200);
							console.log("the user with id "+idCreated+"has got "+body+"no:of messages");

							var fileName = getContactFileName(idCreated);

							var obj = JSON.parse(fs.readFileSync(fileName));
							
							expect(obj.no_msgs).toBe(body);
							done();
					    });

		});

		it("should get message for contact", function(done){
			//TODO: Write your test case here.
			request.get({
				url:contacts_url+"/"+"chat"+"/"+idCreated,
				json:true
			},
			function(error,response,body){
				expect(response.statusCode).toBe(200);
				console.log("\ni'm retrieving message");
				expect(body.messages[body.no_msgs-1]).toBe("this is my msg");
				console.log(body);
				var fileName = getContactFileName(idCreated);

				var obj = JSON.parse(fs.readFileSync(fileName));
							
				expect(obj.messages[obj.no_msgs-1]).toBe("this is my msg");

				done();
				
			});
			
		});

	});

});
