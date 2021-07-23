const fs = require('fs').promises;

(async () =>{
	try{
	let data = await
	console.log("1번", data.toString());
	data = await fs.readFile('./writeme.txt');
	console.log("2번", data.toString());
	data = await fs.readFile('./writeme.txt');
	console.log("3번", data.toString());
	data = await fs.readFile('./writeme.txt');
	console.log("4번", data.toString());
	data = await fs.readFile('./writeme.txt');
	console.log("5번", data.toString());
	} catch(err){
		console.error(err) // 
	}
})();