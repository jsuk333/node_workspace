/*
	nodejs를 사용하면, 자바스크립트에서도 데이터 베이스 연동 프로그램이 가능하다
	(과거엔 불가능하다.)
	내장 모듈로 해결되지 않는 부분은 외부의 모듈을 추가하여 개발하면 된다.
	이 방법이 nodejs가 위력을 발휘하는 이유다.
	전 세계 개발자들이 지금 이 시점에도 새로운 모듈을 개발중이다.
*/



var mysql=require("mysql");


var client=mysql.createConnection({
	"url":"localhost",
	"user":"root",
	"password":"",
});

	//사용할 데이터 베이스 선택

	client.query("use iot");
	//한건 넣기
	client.query("insert into student(id,pwd,name) values('superman',1234,'슈퍼맨')");