3





let btn = document.getElementById("btn");
btn.addEventListener("click", requestData)

let xhr = new XMLHttpRequest();

function requestData () {
	xhr.open('GET', 'https://lisenakache.github.io/HttpRequestGithub/test.json');
	xhr.responseType = 'json'; 
	xhr.send();
}

//5. when the request is complete and the response is fully downloaded.
xhr.onload = function() {
	document.body.style.backgroundColor = "white";
	if (xhr.status != 200) {
		console.log("error status")
		displayError(xhr)
	} else {
		console.log("Finished Loading")
		console.log(xhr.response)
		displayUser(xhr.response) 
	}
};

// 6. triggers periodically while the response is being downloaded
xhr.onprogress = function(event) {
	console.log("progress", xhr)
	document.body.style.backgroundColor = "red";
};

//7. when the request couldn’t be made - when there is a NETWORK error
xhr.onerror = function(event) {
	console.log("error", xhr);
	displayError(xhr)
};

const displayUser = (animals) => {
	let results = document.getElementById("results")
	animals.forEach(info => {
		let li = document.createElement("li");
		li.textContent = `${info.name} - ${info.species}`
		results.appendChild(li)
	});

}

const displayError = (xhr) => {
	console.log("in display error")
	let error = document.getElementById("error");
	let h2 = document.createElement("h2");
	// h2.textContent = `Error`;
	h2.textContent = `Error : ${xhr.status}`
	h2.style.backgroundColor = 'pink';
	error.appendChild(h2);
}



