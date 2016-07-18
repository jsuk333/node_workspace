/*
	내장 모듈중 파일 시스템 모듈을 학습한다.!!!!!
	fs내장 모듈은 파일을 읽어들여 그 데이터를 반환한다.
*/


var fs=require("fs");
//sync 동기화: 처리가 끝날때까지 실행부가 
//					아무것도 못하고 기다리는 요청처리 방식
var result=fs.readFileSync("data.txt","utf8");
console.log(result);