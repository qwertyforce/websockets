const WebSocket = require('ws');
const http = require('http');
const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });
var url = require('url');
function authenticate(request,cb){
console.log(1)
var queryData = url.parse(request.url, true).query;
var user_id=queryData.user_id
if(user_id==="no_id"){

}else{
	
}
exit()
cb()
} 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});

server.on('upgrade', function upgrade(request, socket, head) {
  authenticate(request, (err, client) => {
    if (err || !client) {
      socket.destroy();
      return;
    }

    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request, client);
    });

  });
});

server.listen(8080);
console.log("server started at port 8080")