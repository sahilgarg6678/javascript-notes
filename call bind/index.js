 var student = {
     name : "sahil",
     contact :9462946678,
     city : "jaipur"
 }

 var teacher = {
    name : "rahul",
    contact :8825647845,
    city : "delhi"
}

//  function dis(a) {
//      console.log("my object is : ",a);
//      console.log(a.name+" my contact is "+a.contact+" my city is "+a.city);
//  }
//  dis(student);
//  dis(teacher);


//by using a call function : we have dont require to pass an object as a parameter of a function.by using a this keyword we have access all the values of an object.
// function callfun() {
//     console.log("this is a object using call function",this);
//     console.log("my name is "+this.name+" my contact no is "+this.contact+" my city is "+this.city);
// }
// callfun.call(student)
// callfun.apply(teacher)
//in this case call and apply is work as a same .


// ----------//but we can see the another case in which we see the difference b/w both of us .
// function applyfun(company,position) {
//     console.log("this is a object : ",this);
//     console.log("my name is"+this.name+" my contact no is "+this.contact+"my city is "+this.city,company," ",position);
// }
// applyfun.call(student,"MINDTREE","APSINO")
// applyfun.apply(student,["MINDTREE","APSINO"])
//in case of apply when we pass the argument to the parameter of function we have always kept this argument in tha array. but in the case of call we have simply pass all the argument to the parameter of a function.



//now just we have see the bind function 
// function bindfun(company,position) {
//     console.log("this is our original object ",this );
//     console.log(" my name is "+this.name+" my contact no is "+this.contact+" my city is "+this.city,company," ",position);
// }
// var newFunc = bindfun.bind(student);//all this part assign in the new function and we have call new function at this time we have pass the argument in the function.
// newFunc("google","apsino")
//i case of bind function we have make a newfunction and in this we have pass a argument of a function.




//first class function:
// 1.these are those function which can be pass as an argument as a function.
// function a(myfun) {
//     myfun();
//     console.log("i am from jaipur");
// }

// function b() {
//     console.log("my name is sahil");
// }

// a(b);

function a(obj) {
  obj();
  console.log("my contact no is")
}

function b() {
    console.log("i am sahil");
}
a(b);


//can we returned from a function:
function ret (){
    return function ret1(){
      console.log("i am sahil garg");
    }
}

//function which can be assign to a variable:
var a = function ass() {
    console.log("i am jaipur");
}
a();





