console.log("hello world");


// Function : A block of code which you want to use multiple times, so you define or declare it once, and then  use it wherever you want as many times .

//I : NORMAL FUNCTION

// function add (){    //defining a function or declaring a function
//     console.log(4+3);
// }

// add();      // calling a function or invoking a function 


//II : FUNCTION WITH PARAMETERS

// a and b are known as parameters, they gets used inside the definition of the function 


// function additionTwoNum (a, b) {   
//     let c = 10; 
//     console.log(a+b+c);               
// }

// additionTwoNum("Kiran",11);  

// additionTwoNum(12,13)           // 12 and 13 are known as arguments, they gets passed inside the function.

// additionTwoNum(2,3);



//III : FUNCTIONS WITH RETURN STATEMENT AND PARAMETERS

//Whenever you are having a return statement in your function, then at the time of invokation of the function, do not invoke the function directly , instead of that , assign the invokation of the function to a variable and the value which you are returning from the function will be now stored in this new variable which you have created.


// function doubleTheValue (num){  
//     const value = num * 2;  
//     return value;
// }
// // doubleTheValue(12);

// const newValue = doubleTheValue(12);
// console.log("Double function call",newValue);


// function handleSubmit (){
//     const element = document.getElementById("name");
//     console.log(element.value);
// }


// regular functions

// function expression : 
// You can create a function and assign the function's value to a variable. This is known as function expression.
// const a = function (){
//     return 1;
// }

// // arrow function
// const displayUserInfo = () => {     // arrow function came in the latest version of JS : ES6
//     console.log("USER INFORMATION");
// }




//PRACTICE DOING BY ME---------------------------------------------------------

// 1.NORMAL FUNCTION:--------------------------------------

// function sahil(){
//     console.log("hello sahil")

// }

// sahil();
// sahil();

//2.FUNCTION WITH PARAMETERS:----------------------------

// function sahil(a,b){       // A AND B ARE KNOWN AS THE FUNCTION PARAMETERS
//         console.log("value of a and b : ",a+b);
// }
// sahil(2,4);              // THIS VALUE WHICH ARE KNOWN AS THE FUNCTION ARGUMENTS


//3.FUNCTION WITH RETURN FUNCTION:-----------------


// function square(x) {
//     return x * x;
//  }
//  var demo = square(3);
//  console.log(demo);


// function marks(s,m) {
//     var a=(s+m);
//     return a;   //the value which are store in a the return.it assign this value again to the function then after marks is 80 and 70 but how we print this then we have store this value in the variable c and we have print the value of c . 
// }
// var c=marks(80,70);
// console.log(c);

//FIND THE MARKS AND % OF 2 SUBJECT MARKS WITHE THE HELP OF RETURN WITH FUNCTION---------**********


// function marks(s,m) {
//     var a=(s+m)
//     return a;
// }
// marks(80,70);
// var c=marks(80,70);
// console.log("Total marks : " ,c);

// function per(total) {
//     var d=(total/200)*100;
//     return d;
// }
// var e=per(c);
// console.log("percentage is : ",e ,"%");



//EXAMPLE OF FUNCTION EXPRESSION IN WHICH WE HAVE ASSIGN THE FUNCTION IN ANY VARIABLE AND WE HAVE CALL THIS VARIABLE  --------  

// var s=function sahil() {
//     console.log("sahil");
// }
// s();

//ARROW FUNCTION 

var hello = () =>{
    console.log("hello sahil");
}
hello();
