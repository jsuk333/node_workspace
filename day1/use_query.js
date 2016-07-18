/*
	nodejs 내장 모듈중 query string 내장모듈을 학습한다.
*/

var query=require("querystring");
//var url=require("url");
var result=query.parse("http://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0008548934&isYeonhapFlash=Y");
console.log(result);

