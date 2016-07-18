/*모듈은 개발자가 정의 할수도 있지만 이미 node js 자체로 제공하는 유용한 모듈도 있다.
	
*/

var http=require("http");//http모듈을 가져오겟다.
//변수로 해당 모듈을 가르키겠다.
var server=http.createServer(function(request,response){
	response.writeHead(200,{"Content-type":"text/html"});
	response.end("<marquee>hi</marquee>");
});//서버 모듈 생성
//웹서버 가동하기
server.listen(9999,function(){
	console.log("server is running 9999 port.....");
});

