/*
	노드 js는 완제품이 아니다 따라서 서버를 내가 직접 코드를 작성해야 한다.
	하지만 노드 js의 문법및 내장, 외부의 모듈을 이용하면 쉽게 접근한다.
*/
//내부 모듈중 http모듈을 가져오기 모듈은 객체 + 메서드
var http=require("http");
var fs=require("fs");//파일의 내용을 읽어들일 수있는 내부모듈!!!
//server객체 생성
var data;
var server=http.createServer(function(request,response){
	//서버는 이미 w3c가 정해놓은 형식에 맞춰서 클라이언트에게 응답해야하므로 아래와 같은 코드가 작성되어야 한다.
	response.writeHeader(200,{"Content-type":"text/html; charset=utf8"});

	
	/*console.log(request.url);
	if(request.url=="/green.html"){//클라이언트가 green html을 원하면 ...
		console.log("녹색페이지를 원해???");
	}else if(request.url=="/yellow.html"){	//클라이언트가 yello html을 원하면....
		console.log("노란색페이지를 원해???");
	}*/
	// /yellow.html
	if(request.url!="/favicon.ico"){
	data=fs.readFileSync("."+request.url,"utf8")
	//end()의 인수에는   클라이언트가 받게될 문자열 컨텐츠를 넣을 수있다.
	}
	response.end(data);

});

//서버 청취

server.listen(8383,function(){
	console.log("server is running at 8383......");
});

