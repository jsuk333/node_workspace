/*외부의 필요한 모듈을 사용하기 위해서는 require메서드에 필요한 모듈명을 명시하면 된다.*/

var mm=require("./mymodule");
var r=mm.random(5);
console.log(r);

var s=mm.getExtend("test.png");
console.log(s);

function e(){
	console.log(mm.random(5));
	setTimeout(function(){
		e();
	},500);
}
e();