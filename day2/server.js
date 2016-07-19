/*
	http 내장 모듈로만은 완전한 웹서버를 구축하기에는 너무나 부족하다. 따라서 
	express모듈을 사용해봅시다.
	express모듈은 웹서버 구축에 필요한 기능들을 위해 http모듈에 
	추가시켜놓은 외부모듈.... (http의 업그레이드 모듈) but 2모듈은 같이 사용해야 한다.
	ejs모듈을 이용하면 , html 문서내에서 반복문 등의 기초적인  자바
	스크립트 프로그래밍 문법이 적용될 수 있다.
*/

var http=require("http");//내
var express=require("express");//외
var fs=require("fs");//내
var mysql=require("mysql");//외
var bodyParser=require("body-parser");
var ejs=require("ejs");//외부
var app=express();
app.use(bodyParser.json());//json 지원
app.use(bodyParser.urlencoded({extended:true}));//
var client=mysql.createConnection({
	"url":"localhost",
	"user":"root",
	"password":""
});
client.query("use iot");//사용할 db선택

//게시물 목록 요청 처리
app.route("/list").get(function(request, response){
	var page=fs.readFileSync("./list.html","utf8");
	//응답전에 이미 데이터 베이스에서 레코드들을 가져왔어야 한다....
	client.query("select * from student;",function(error,records,field){
		if(!error){
			//console.log(records);
			response.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
			response.end(ejs.render(page,{datalist:records}));//페이지를 렌더링 하면서 2번째 인수로 전달한 객체를
			//렌더링 대상이 되는 html 에 전달해 준다 (자동으로......)
		}else{
			consoe.log("망했어요");
		}
	});
	
});



app.route("/regist_form").get(function(request, response){
	var data1=fs.readFileSync("./regist_form.html","utf8");
	response.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
	
	response.end(data1);
});
//클라이언트가 등록을 원하면  ...... post방식으로 요청할 경우
//서버에서는 post() 메서드로 받아야 한다.!!
app.route("/regist").post(function(request,response){

	console.log(request.body);
	var data=request.body;
	var id=data.id;
	var pwd=data.pwd;
	var name=data.name;
	console.log("넘겨 받은 아이디는 ?"+id);
	console.log("넘겨 받은 패스워드는 ?"+pwd);
	console.log("넘겨 받은 이름은?"+name);//데이터 베이스에 넣는다.
	client.query("insert into student(id,pwd,name) values('"+id+"','"+pwd+"','"+name+"')",function(error,records,field){
		//쿼리문 수행후 두번째 인수 익명함수가 작동한다.성공여부 확인 위해
		if(error){
			console.log("등록 실패입니다.");
		}else{
			console.log("성공입니다.");
			//리스트 페이지 요청
			//클라이언트 브라우저로 하여금, 지정한 url로 요청을 다시 시도하라는 명령
			response.redirect("/list");
		}
	});
});
//상세 보기 요청이 들어 오면
app.route("/detail/:id").get(function(request,response){
	var data=fs.readFileSync("./detail.html","utf8");
	//유저가 선택한 아이디를 get 방식으로 넘겨 받았어야 한다.
	client.query("select * from student where id='"+request.params.id+"'",function(error,records){
		if(!error){
			console.log(records);
			response.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
			response.end(ejs.render(data,{"obj":records}));
		}else{
			console.log("일치하는 데이터가 없습니다.");
		}
	});
});

//삭제 요청 처리
app.route("/delete/:id").get(function(request,response){
	var id=request.params.id;
	client.query("delete from student where id='"+id+"'",function(error,records){
		if(!error){
			response.redirect("/list");
		}else{
			console.log("실패하셨습니다.");
		}
	});
});



//서버 생성
var server=http.createServer(app);

server.listen(8383,function(){
	console.log("server is runninig at 8383.......");
});