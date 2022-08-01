const http = require('http'); 
const HTMLEX = '<h1>This is an HTML tag</h1>';

//let sentences = [serverOne,serverTwo,serverThree];

const server = http.createServer((req, res) => {

  res.setHeader(`content-Type`, `text/html`)
  
  res.write(HTMLEX)

  res.end()


});
//console.log('NEW PORT: Node.js web server at port 3000 is running..'))
server.listen(3000);