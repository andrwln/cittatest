'use strict';

var request = require('request');

var ticketId;

request({
	uri: "http://localhost:9000/api/tickets/",
	method: "POST",
	form: {
	  time: new Date(),
      userName: "Test User",
      seatNumber: "123",
      movieName : "Test Movie Name"
	}
}, function(error, response, body) {
	ticketId = JSON.parse(body)._id;
	console.log('Test posted new ticket with body: ', body)
	if(body) {
		console.log('Post ticket API test ran successfully!');
	};
	request("http://localhost:9000/api/tickets/"+ticketId, function(error, response, body) {
		console.log('get specific ticket with ID: ', ticketId)
		request({
			uri:"http://localhost:9000/api/tickets/"+ticketId,
			method: "DELETE"
		}, function(error, response, body) {
			console.log('successfully deleted ticket');
		})
	})
});


request("http://localhost:9000/api/tickets", function(error, response, body) {
	console.log('Returned from get all tickets api test: ', body);
})
