/*
	nodejs에서 개발자가 객체를 정의 할 수 있는데, 
	특히 nodejs에서는 저장된 파일을 모듈이라고 한다.
	
*/
exports.random=function(n){
	return parseInt(Math.random()*n);

}
exports.getExtend=function(path){//파일의 확장자를 반환해 주는 메서드
	var filename=path.substring(path.lastIndexOf("\\")+1,path.length);
	return filename.split(".")[1];
}
