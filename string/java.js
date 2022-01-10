// var str ="sahil garg"
// const len=str.length
// console.log(len);

// let name ="sahil";
// let age ="24"
// let statement = "my name is" +name + "age is" + age
// console.log(statement);

// var str="course full stack developer";
// var rev=str.split(" ")
// console.log(rev);

// var rev1=rev.reverse()
// console.log(rev1);

// var str="course full stack developer";
// var rev=str.split(" ").reverse().join(" ")
// console.log(rev);

// const name ="sahil is a good boy and sahil also a engineer";
// const name1=name.replace("sahil","rahul");
// console.log(name1);

// const name2=name.replaceAll("sahil","rahul");
// console.log(name2);


// const a="                                        sahil garg                         "
// console.log(a);
// console.log(a.trim())



// var name="sahil";
// var age=20;
// var statement=name+" is name "+" age is "+age
// console.log(statement);


// var name ="sahil";
// var age="24";
// var statement = age.concat(" is age ",name," is name " );
// console.log(statement);

// var a=[1,2,3,4,5];
// console.log(a);
// var b=a[0];
// console.log(b);

// var a=[1,2,3,4,5];
// console.log(a);
// var b=a.indexOf(3)
// console.log(b);


// var str="full stack developer course";
// var str1=str.split(" ");
// console.log(str1);

// var str2=str1.reverse();
// console.log(str2);

// var str3=str2.join();
// console.log(str3);

// var str="full stack developer course";
// var str1=str.split(" ").reverse().join("--");
// console.log(str1);

// var temp="my name is sahil . sahil is a good guy";
// var temp1=temp.replace("sahil","rahul")
// console.log(temp1);

// var temp="my name is sahil . sahil is a good guy";
// var temp1=temp.replaceAll("sahil","rahul")
// console.log(temp1);

// var strin="                         sah          il             ";
// console.log(strin);
// var str1=strin.trim();
// console.log(str1);

//que1 of dashboard: count character-----------------------------------------------------------
// var str="AbaDd";
// var str1=str.split("");
// var str2=str1.filter(e=>e=="A").length;

// var str3=str.split("");
// var str4=str3.filter(e=>e=="D").length;
// console.log(str2,str4);
// -------------------------------------------------------------------------

// str1="PrepBytes";
// str2="Technologies"
// var array=str1+str2;
// console.log(array);


// QUE: PALINDROME NO-----------------------------------
// var str="Naman"
// array1=str.split("").join("")
// console.log(array1);
// 	 array2=str.split("").reverse().join("")
//      console.log(array2);
// 	 if(array1==array2){
// 	   console.log("true");
// 	 }
// 	 else
// 	 console.log("false");
// ----------------------------------------------------------------	 



//que:- You are given a string----------------------------------------------- 
// S
//  consisting of two letters 
// A
//  and 
// D
// ,where each character represent the winner of N games played between Aditya and Danish, where letter 
// A
//  represents the win of Aditya and letter 
// D
//  represents the win of Danish. 
// You need to find out the that which player wins the maximum number of games or there is a draw between them.

// Note: You have to complete Game_Winner function. No need to take any input.


// var S="AAADDDD"
// var count=0;
//   var count1=0;
//   S = S.split("");
//   for(i=0; i<S.length; i++){
//     if(S[i]=="A"){
//       count++;
//     }else
//     {
//       count1++;
//     }
//   }
//     if(count>count1)
//     {
//       console.log("Aditya");
//     }
//     else if(count<count1)
//     {
//       console.log("Danish");
//     }
//     else if(count==count1)
//     {
//         console.log("draw");
//     }
// --------------------------------------------------------------------

// ---------que=find the no of vowel or consonent-------------------------------
// S="prepbytes"
//   count = 0;
//   var S = S.split("");
//   console.log(S);
//   for(i=0;i<S.length;i++){
//     if(S[i]=="a" || S[i]=="e" || S[i]=="i" || S[i]=="o" || S[i]== "u" || S[i]=="A" || S[i]=="E" || S[i]=="I" || S[i]=="O" || S[i] =="U")
//       count++
//   }
//   console.log(count);

// S="prepbytes"
//   count = 0;
//   S = S.split("");
//   console.log(S);
//   for(i=0;i<S.length;i++){
//     if(S[i] != "a" && S[i] !="e" && S[i] !="i" && S[i] !="o" && S[i] != "u" && S[i] !="A" && S[i] !="E" && S[i] !="I" && S[i] !="O" && S[i] !="U")
//     count++
//   }
//   console.log(count)
// ------------------------------------------------------------------------------

// function name(){
//     console.log("i am function");
// }
// name();


// function name(fname,lname){
//     var a= fname+" "+lname;
//     return a;
// }
// var b=name("sahil","garg")
// console.log(b);

// function with return value examples---------------------------------------------
// function marks(maths,hindi,english){
//     var a = maths+hindi+english;
//     return a
// }
// var b = marks(10,72,73);
// console.log("total marks - "+b);

// function per(total){
//     var c= total/300*100
//     return c
// }
// var d = per(b);
// console.log("Total percentage is - ",d+" % ");
// --------------------------------------------------------------------------------------



// var count1=0;
// var count=0;
// var s="prepbytes"
// var b= s.split("")
// for(i=0;i<b.length;i++){
//     if(b[i]=="p"){
//         count++;
//     } 
// }

// for(i=0;i<b.length;i++){
//     if(b[i]=="e"){
//         count1++;
//     } 
// }
// if(count1==2 && count==2){
//     console.log("e"+count1+"p"+count);
// }

// var array =[1,2,3];
// array.forEach(element => {
//    var array=element+2;
//    console.log(array);
// });
// console.log(array);______________________________ask_______________________________

// var array=[1,2,3];
// var array1= array.map(e => e+2)
// console.log(array1);


