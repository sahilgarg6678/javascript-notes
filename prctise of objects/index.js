//arrays.


// var len = array.length
// console.log("the lenght of an array is",len);

// var filt = array.filter(e => e>3)
// console.log(filt);

// array.push("hi")
// console.log(array);
// array.pop("1")
// console.log(array);

// array.unshift("kk")
// console.log(array);

// var array1= array.slice(2,3)
// console.log(array1);

// array.splice(2,2,100,200) 
// console.log(array);

// var array1 = array.every(e => e%2==0)
// console.log(array1);

// array = [1,2,3,4,4,5,6,7];
// array1 = array.map(e => e+10 )
// console.log(array1);

// var array1= array.filter(e => e%2==0) 
// console.log(array1);

// var salary  =[100,200,300,400]
// var sum  =salary.reduce((x,sum)=>sum=sum*x,1)
// console.log(sum);

// var array  = [1,2,3,4,5,600,700];
// for (var a in array){
//     console.log("index of array is ",a);
// }
// for (var a of array){
//     console.log("values if array is: ",a);
// }

// var array = []
// console.log(array);
// array.push(1,2,3)
// console.log(array);

// array.pop(1,2);
// console.log(array);

// array.shift(1)
// console.log(array);

// array.unshift(200,300,100)
// console.log(array);


// _______________________________________String_____________________________________________-

// var str = "i am full stack developer";
// console.log(str);

// array = [1,2,3,4,5,6,6]
// array.reverse()
// console.log(array);
// console.log(array);

// array1 = array.toString()
// console.log(array1);
// console.log(typeof(array1));
// array1 = array.join(" ")
// console.log(array1);
// console.log(typeof(array1));

// array1 = array.lastIndexOf(6)
// console.log(array1);

//reverse the string:
// var str = "i am full stack developer";
// var array = str.split(" ").reverse().join(" ")
// console.log(array);

// var str = "i am a full stack developer and full of know";
// var str1 = str.replaceAll("full","half")
// console.log(str1);

// var str = "                sahil         garg                    ";
// console.log(str);
// var str1 = str.trim()
// console.log(str1);

//sets in js____________________________________________

// var array = [1,2,3,4,5,5,2,1,6,7]
// var set = new Set(array) 
// console.log(set);

// let value =new Set("sahillliimm")
// console.log(value); 

// var array = [1,2,3,4,5,6,7,7,7,5,3,2,1]
// var set = new Set(array)
// console.log(set);

// var array = [...set]
// console.log(array);

// let set1 = new Set()
// set1.add(12)
// set1.add("sahil")
// set1.add([1,2,3])
// set1.add(1)
// console.log(set1);

// var ha = set1.has("sahi")
// console.log(ha);

// var si = set1.size
// console.log(si);

// set1.delete("sahil")
// console.log(set1);

// set1.clear()
// console.log(set1);

// ________________________MAP_________________________________ 

// var ma = new Map()
// console.log(ma);

// ma.set("name","sahil")
// ma.set("age",24)
// console.log(ma);

// var ma1 = ma.get("name")
// console.log(ma1);

// var ha = ma.has(24)
// console.log(ha);

// ma.delete("name")
// console.log(ma);

// ma.clear()
// console.log(ma);

// ___________________________object_______________________________

// var obj1 ={
//     name :"sahil",
//     age : 24,
//     contact :9462946678
// } 
// console.log(obj);
// var acc = obj.name
// console.log(acc);

// var obj = {
//     name : "sahil",
//     class : 10,
//     contact : 946294778852,
//     display: function(){
//         var ss = (this.name,this.class)
//         console.log(ss)
//     }
// }
 
// obj.display();


// var obj = new Object()
// obj.name = "sahil"
// obj.claas = 10
// console.log(obj);

// var key = Object.keys(obj);
// console.log(key);

// var valu = Object.values(obj)
// console.log(valu);

// let neww = {...obj,...obj1} 
// console.log(neww);


// let arra = [1,2,3,4,5,6,6]
// console.log(arra);

// var sp = [...arra]
// console.log(sp);

// ------------------------------------------------------------------------------------

// sets______________________

// var array = [1,2,3,4,5,6,7,2,3,4,1,100]
// console.log(array);

// var set1 = new Set(array)
// console.log(set1);

// var array1 = [...set1]
// console.log(array1);

// var find = array[11]
// console.log(find);

// var index = array.indexOf(100)
// console.log(index);

// var str = "i am full stack developer"
// console.log(str);

// var array3 = str.split(" ")
// console.log(array3);

// var array4 = array3.reverse()
// console.log(array4);

// var array5 = array4.join(" ")
// console.log(array5);
// console.log(typeof(array5));


// var state = "sahil is a good student . sahil is a soft engg";
// console.log(state);

// var rep = state.replaceAll("sahil","rahul");
// console.log(rep);

// var str = "i am a sahil";
// var str1 = str.split(" ")
// var str2 = str1.some(e => e=="sahi" )
// console.log(str2);

// var str1 = str.includes("sahil")
// console.log(str1);

// var set1 = new Set()
// console.log(set1); 

// set1.add("sahil");
// set1.add(24);
// set1.add(true);
// set1.add([1,2]);
// set1.add({id:1,name:"sahil"});
// console.log(set1);

// // var set2 = set1.has("sahil")
// // console.log(set2);

// set1.delete("sahil")
// console.log(set1);

// set1.clear()
// console.log(set1);

// var map1 = new Map()
// console.log(map1);

// map1.set("id", 1)
// map1.set("name","sahil")
// map1.set("salary","250000")
// console.log(map1);

// var map2 = map1.get("id")
// console.log(map2);


// console.log(map1.has("id"))

// map1.delete("id")
// console.log(map1);

// console.log(map1.size);

// map1.clear()
// console.log(map1);


// now we see the objects____________________________________

//first way of creating an object:
//by using a curly braces:

// var obj1 = {
//     name:"sahil",
//     name1: "shreya",
//     salary : 25000,
//     age  : 24
// }
// console.log(obj1);

// // obj1.name="garg"
// console.log(obj1);
// console.log(obj1.name);

// var obj1= {
//     name : "sahil",
//     class : 10,
//     salary :25000,
//     display: function(){
//         console.log("my name is "+this.name+"my class is "+this.class+"my salary is "+this.salary);
//     }
// }
// obj1.display()

// second way of creating an objects

// by using a constructor function

// var obj1 = new Object()
// console.log(obj1);
// obj1.name = "sahil";
// obj1.salary = 250000;
// console.log(obj1);

// obj1.name = "shreya"
// console.log(obj1);

// var key1 = Object.keys(obj1)
// console.log(key1);

// var values1 = Object.values(obj1)
// console.log(values1);

// console.log(obj1.name);


// //by using a create 

// var create1 = Object.create(obj1)
// console.log(create1);


// var obj1 ={
//     name :"sahil",
//     salary :25000,
//     age :24
// }  

// // function disp(a) {
// //     console.log("my name is "+a.name+" my age is "+a.age);
// // }
// // disp(obj1);

// function disp(company,position) {
//     console.log(this.name,this.salary,company,position);
// }
// var new1 = disp.bind(obj1);
// new1("tcs","kkkk")



// first class function:+++++++++++++++++++++++++

// function a(obj) {
//     obj();
//     console.log("hello sir");
// }
// function b() {
//     console.log("hi am sahil");
// }
// a(b);

// function hi() {
//     return function ha(){
//        console.log("hi"); 
//     }
//     ha()
// }
// hi();

// var hi = function hello(params) {
//     console.log("hi hero");
// }
// hi();


// function Student(name,age) {
//     this.name = name;
//     this.age = age;
// }
// var student1 = new Student("sahil",24)
// console.log(student1); 

// student1.work = 24
// console.log(student1);

// Student.prototype.job = "giant"
// console.log(student1.job);

// var a
// console.log(a);

// let b;
// b = 10
// console.log(b);
// const c
// c= 10
// console.log(c);

var a = 10;
var b = "10";
if (a === b){
    console.log("hi sahil");
}else{
    console.log("bad work");
}

