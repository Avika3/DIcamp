const http = require('http');


const user = {
	firstname: 'John',
	lastname: 'Doe'
}

const server = http.createServer((req,res) => {

	res.setHeader(`content-Type`, `text/html`);
	
	const myob = JSON.stringify(user) 

	res.write(myob)
	
	res.end()

})

server.listen(8080);