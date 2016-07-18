/*
	내장모듈 중 os 모듈을 사용해 보기
*/

var os=require("os");
//cpu정보
//console.log(os.cpus());
//메모리 정보
//console.log(os.freemem()/1024/1024+"Mb");
console.log(os.platform());