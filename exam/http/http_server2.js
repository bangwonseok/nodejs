const http = require('http');
const fs= require('fs').promises;

http.createServer(async (req, res) => {
	try{
		const data = await fs.readFile('./index.html');
		res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
		//res.end(data);
		//return;
		return res.end(data);
	} catch(err){
		res.writeHead(500,{'Content-Type' : 'text/html; charset=utf-8'});
		//res.end("<h1>" + err.message+"</h1>");
		//return;
		
		return res.end("<h1>" + err.message+"</h1>");
	}
	
	res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
	res.end("해더 출력 테스트");
	})
.listen(8000,() => {
	console.log("8000번 포트에서 서버 대기중...");
});
	
	
	/* Promise
	/**
		res.writeHead -> 출력 헤더
		res.write -> 출력 내용을 출력
		res.end -> 출력하고 종료
		
		html 파일로 페이지를 출력 하려면
			1) 파일로 내용물을 읽은 다음
			2) 웹페이지로 출력(write, end)
		

	

	fs.readFile('./index.html')
		.then((data) => {
			res.writeHead(200,{'content-Type' : 'text/html; charset=utf-8'});
			res.end(data);
		})
		.catch((err) => {
			res.writeHead(500{'content-Type : 'text/html; charset=utf-8'});
			res.end("<h1>" + err.message+"</h1>";
		});
	
	
	//res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
	//res.write('<h1>Hello Node!</h1>');
	//res.end('<p>Hello Server!</p>');
});

server.listen(8000);

server.on('listening', () => {
	console.log('8000번 포트에서 서버 대기 중입니다.');
});

server.on('error', (error) => {
	console.error(error);
});

*/
	