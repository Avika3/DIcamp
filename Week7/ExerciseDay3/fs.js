// const http = require("http");

// const server = http.createServer((req,res) => {

// 	res.setHeaders(`content-Type`, `text/html`);

// 	res.end()


// })


// server.listen(1111);

/// Exercise 1 : Reading From A File In Node.JS


const one = require(`fs`)

one.readFile(`Boom.text`, `utf-8`,  (err,data)=>{
	//one.readFile(`exerciseOne.text`, `utf-8`, function (err,data){
		if (err){
			console.error(err)
			return;
		}
		console.log(data);
	});

console.log("Success???", `\n`,);



	//Exercise 2 : Writing Files With Node JS
	// one.writeFile(`Dailyexe.js`, `Hello World and Adane!`, (err) =>{

	// 	if (err){
	// 		console.log(err);
	// 		return;
	// 	}
	// 	console.log(``);
	// });



	// one.appendFile(`Boom.text`, `The last minutes` + `\n` , (err) =>{

	// 	if (err){
	// 		console.log(err);
	// 		return;
	// 	}
	// 	console.log(``);
	// });


// one.unlink(`Boom.text`, (err) =>{

// 	if (err){
// 		console.log(err);
// 		return;
// 	}

// });

