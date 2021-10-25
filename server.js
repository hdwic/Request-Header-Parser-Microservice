// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/whoami', function (req,res){
	
	console.log(req.ip.split(':')[req.ip.split(':').length - 1])
	
	
	
	// 	the correct method to get the remote IP, if the server is behind a proxy, is request.headers['x-forwarded-for']
	//  The general format of the field is:
	//  x-forwarded-for: client, proxy1, proxy2, proxy3
	
	/* const parseIp = (req) =>
	req.headers['x-forwarded-for'].split(',').shift()
	|| req.socket.remoteAddress
	console.log('====')
	console.log(parseIp(req))
	*/
	
	// res.send(`${parseIp(req)}  ==  ${req.header('Accept-Language')}  ==  ${req.header('User-Agent')}`)
	res.json(
		{
			ipaddress : req.ip.split(':')[req.ip.split(':').length - 1],
			language : req.header('Accept-Language'),
			software : req.header('User-Agent')
		}
	)
	
	
	
	
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
