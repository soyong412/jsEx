

var options = document.getElementById('options');
var btn = document.getElementById('button');

function add(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
function div(a,b){
  return a/b;
}
function mul(a,b){
  for (i=1;i<=b;i++){
    res=res*a
  }
  return res
}

function click_in(){
  var one=document.getElementById("one")
  var num1=one.value;
  var num1a=parseInt(num1);
  var two=document.getElementById("two");
  var num2=two.value;
  var num2a=parseInt(num2);
  var num3a;
  var options=document.getElementById("options");
  var ops=options.value;
  var thr=document.getElementById("thr")

  if (ops=='+'){
    num3a=add(num1a,num2a);
  }
  else if (ops=='-'){
    num3a=sub(num1a,num2a);
  }
  else if (ops=='/') {
    num3a=div(num1a,num2a);
  }
  else if (ops=='%'){
    num3a=div(num1a,num2a);
  }
  else if (ops=='^'){
    num3a=mul(num1a,num2a);
  }
  thr.value=parseInt(num3a)
}
