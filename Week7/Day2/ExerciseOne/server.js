const http = require('http'); 
const serverOne = '<h1>This is my first response</h1>';
const serverTwo = '<h2>This is my second response</h1>';
const serverThree = '<h6>This is my third response</h1>';

let sentences = [serverOne,serverTwo,serverThree];

const server = http.createServer((req, res) => {

	res.setHeader(`content-Type`, `text/html`)
	
	for(let i=0; i<sentences.length; i++){
		res.write(sentences[i])
	}
	res.end()


});
//console.log('NEW PORT: Node.js web server at port 3000 is running..'))
server.listen(4000);