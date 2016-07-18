/*
	내장 모듈 중 url 모듈을 학습한다.
	URL(Uniformed Resource locator): 자원의 위치!!
*/
var url=require("url");
//특정 데이터로 부터 의미있는 데이터를 추출하는 일련의  과정 parsing이라 한다.
//url 객체의 parse메서드는 , 지정된 url 정보에 대한 해석 후 json 형태의 객체를 반환해 준다.
var obj=url.parse("http://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0008548583&isYeonhapFlash=Y");
console.log(obj.port);
//javascript objects notation(표기법)