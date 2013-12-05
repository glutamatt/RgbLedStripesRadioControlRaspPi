
var keys_map = require('./compile.json') ;

var exec = require('child_process').exec,child;

var rgb_color = function( input_key ) {
	if( ! keys_map.hasOwnProperty(input_key)) return console.log(Object.keys(keys_map)) ;
	var raw_send = keys_map[input_key][0] ;
	child = exec('pilight-send -p raw -c "' + raw_send + '"', function(){
		console.log( input_key + ' Sent !') ;
	});
}

var http = require('http');
var fs = require('fs');
var srv = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function (err, data) {
	  if (err) return res.end(err);
	  res.end(data);
	});
});
var io = require('socket.io').listen(srv);
io.on('connection', function(socket){
  socket.on('push_key', function(data){
  	console.log('pushed !!') ;
  	rgb_color( data.key ) ; 
  	socket.broadcast.emit('pushed_key', data);
  });
});
srv.listen(8009) ;







