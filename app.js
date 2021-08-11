
var btninc= document.querySelector("#grow");
var btnshrink= document.querySelector("#shrink");

var txtIn1= document.querySelector("#input1");
var outputview = document.querySelector("#output");



var i=20
btninc.addEventListener("click",function callinc(){
  var txtVal=txtIn1.value;
  i=i+4;
  outputview.style.fontSize=`${i}px`
  outputview.innerText=txtVal
});

btnshrink.addEventListener("click",function call(){
  var txtVal=txtIn1.value;
  i=i-4;
  outputview.style.fontSize=`${i}px`
  outputview.innerText=txtVal
});


