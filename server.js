var express = require('express'); 
var app = express(); 
//we can now use functions and commands contained within express module in server.js

//check if the server is running correctly
/*app.get('/', function (req, res) { 	// '/' - set route to index page
	res.send("Hello")					
});
*/

app.use(express.static(__dirname + "/public"));		// static includes static files: html, css, js and image files
													// __dirname + "/public": location of the static file

app.get('/studentlist', function(req, res) {
	console.log("Received get request");
	student1 = {
			name: 'Vidhi',
			email: 'vidhi@gmail.com',
			grade: 'A'
		};

		student2 = {
			name: 'Priyanka',
			email: 'priyanka@gmail.com',
			grade: 'B'
		};

		student3 = {
			name: 'Vishal',
			email: 'vishal@gmail.com',
			grade: 'A-'
		};

		var studentlist = [student1, student2, student3]
		res.json(studentlist);
		/*res.send(studentlist);*/
})										
													
app.listen(3000);
console.log("Server running on port 3000");	//port of localhost