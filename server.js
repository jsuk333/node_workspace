/*
http 내장모듈로만은 완전한 웹서버를 구축하기엔 너무나 부족하다
따라서 express 모듈을 사용해보자!!!
express 모듈이란? 웹서버 구축에 필요한 기능들을 위해 http 모듈에 
추가시켜놓은 외부모듈.. (http의 업그레이드 모듈  but  2모듈은 같이 사용한다..)
*/
var http=require("http"); //내부
var express=require("express"); //외부
var fs=require("fs"); //내부
var mysql=require("mysql"); //외부

//express모듈로 부터 application 객체를 생성하자!!
var app=express();

var client=mysql.createConnection({//mysql 서버에 접속!!!	
	"url" : "localhost", 
	"user" : "root", 
	"password": ""
});

client.query("use iot"); //사용할 db 선택!!

//클라이언트가 get방식으로 요청을 시도하면 동작하게 될 메서드!!
//var router=app.route("/");


//등록폼을 원하면... http://localhost:8383/regist_form
app.route("/regist_form").get(function(request, response){
	var data=fs.readFileSync("./regist_form.html", "utf8");
	response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
	response.end(data);
});


//클라이언트가 등록을 원하면...post 방식으로 요청할 경우 
//서버에서는 post() 메서드로 받아야 한다!
app.route("/regist").post(function(request, response){
	//클라이언트가 보낸 데이터를 받고!!
	 //express  모듈 사용시 request 가 업그레이드가
	//되었기 때문에 param() 메서드를 사용할 수 있다!!
	var id="xman";
	var pwd="5656";
	var name="엑스맨";

	console.log("넘겨받은 id는 "+id);
	console.log("넘겨받은 pwd는 "+pwd);
	console.log("넘겨받은 name는 "+name);

	//받은 데이터를 데이터베이스에 넣는다!!
	//쿼리문 수행후 두번째 인수인 익명함수가 작동한다..개발자는 여기서
	//등록 성공 or 실패 여부를 확인할 수 있다..
	client.query("insert into student(id,pwd,name) values('"+id+"','"+pwd+"','"+name+"')" , function(error, records, field){
		if(error){
			console.log("등록 실패입니다.");
		}else{
			console.log("등록 성공입니다.");
		}
	});

});



//서버 구동시작!!
var server=http.createServer(app);
server.listen(8383, function(){
	console.log("Server is runing at 8383...");
});