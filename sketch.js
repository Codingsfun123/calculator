var n1,n2;
var b1,b2,b3,b4;

function setup() {
  createCanvas(400,400);


num1=createInput();
num1.position(5,60);

num2=createInput();
num2.position(200,60);
b1=createButton("add");
b1.position(10,200);
b1.mousePressed(add);

b2=createButton("multiply");
b2.position(100,200);
b2.mousePressed(multiply);

b3=createButton("subtract");
b3.position(200,200);
b3.mousePressed(subtract);

b4=createButton("divide");
b4.position(300,200);
b4.mousePressed(divide);
}

function draw() 
{
  background(30);
text("number1",70,50)

text("number2",270,50)
n1=parseInt(num1.value());
n2=parseInt(num2.value());
}
function add(){
  console.log(n1+n2)
}
function subtract(){
  console.log(n1-n2)
}
function multiply(){
  console.log(n1*n2)
}
function divide(){
  console.log(n1/n2)
}




