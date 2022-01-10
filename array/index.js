// let friends=["sahil","rahul","shreya","sakshi","piyush"];
// console.log(friends);

// const len =friends.length
// console.log("length of array :",len);

// console.log("array 1:",friends[0]);
// console.log("array 2 :",friends[1]);
// console.log("array 3 :",friends[2]);
// console.log("array 4 :",friends[3]);
// console.log("array 5:",friends[4]);



// let num=["a","e","i","o","u"]
// num.push("w");
// console.log("push w :",num);

// let num1=["a","e","i","o","u"];
// num1.pop("u");
// console.log("pop u :",num1);

// let num2=["a","e","i","o","u"]
// num2.shift("a");
// console.log("shift a :",num2);

// let num3=["a","e","i","o","u"]
// num3.unshift("w");
// console.log("unshift w :",num3);

// ---------------------------------------------------------------------------------------------
////  Question  : Array given is arr = [1, 2, 3, 4, 5, 6];. Please write down the slice function which returns a new array as [2, 3, 4]. Notes :: Indexes should be negative

// let arr=[1,2,3,4,5,6]
// const newarr=arr.slice(-5,-2)
// console.log(newarr)

// var arr=[1,2,3,4,5,6,7,8,9,10]
// const value=arr.some(n=>n%3==1)
// const value1=arr.every(n=>n%3==1)
// console.log(value)
// console.log(value1)

// ------------------------------------------------------------------------------------------------
// var arr=[1,2,3,4,5,6,7,8,9,10]

// var arr1=arr.filter(e => (e%2)==0).map (e =>e+1)
// console.log(arr1)

// --------------------------------------------------------------------------------------------
// que:  //Sample Input
// 7
// 1 2 3 4 5 6 7

// Sample Output
// 12 16
// ans:
// var array=[1,2,3,4,5,6,7]
// array1=array.filter((e => e%2==0))
// array2=array1.reduce((sum,x)=>sum=sum+x,0)
// console.log(array1,array2);
// var array3=array.filter(N =>N%2===1);
// var array4=array3.reduce((sum,N)=>sum=sum+N,0)
// console.log(array3,array4);
// -------------------------------------------------------------------------------------------------------

// array=[1,2,3,4,5]
// array1=array.map(e => e+1)
// console.log(array1);

//product of no's-------------------------------------------------------------------
// array=[1,2,3,4,5]
// array1=array.reduce((product,N)=>product=product*N,1);
// console.log(array1);
// -------------------------------------------------------------------------------------

// for in , for of ---------------------------------------------------------------------
// const num=[2,4,6,8,10]

// for(const x in num){
//   console.log("indexes of array :",x);
// }

// for(const x of num){
//   console.log("value of array :",x);
// }
// --------------------------------------------------------------------------------------

// const array=[1,2,3,4,5]
// console.log("this is array",array);
// const array1=array.map(e=>e+2)
// console.log("after map",array1);

// array.forEach(element => {
//   console.log(element+5)
// });



//splice function in array--------------------------------------- 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruits1=fruits.splice(1,4,"sahil","garg");
// console.log(fruits);
// -------------------------------------------------------------------------

// for each-------------------------------------------------------------
// array=[1,2,3,4,5]
// array.forEach(element =>
// {
//   var e=element+2;
//   console.log(e);
// });
// ---------------------------------------------------------------------------



var array=[1,2,3,4,5];

var array1=array;

array.push("hi");

console.log(array);
console.log(array1);











