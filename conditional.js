// var ageofperson=20;
// if (ageofperson>18){
//     console.log("able to giving vote");
// }

// Largest among 3 numbers, numbers are 18, 29, 33

// var a=18;
// var b=29;
// var c=33;
// if (a>b && a>c){
//     console.log(a ,"a is greater");
// }
// else if(b>a && b>c){
//     console.log(b,"b is grater");
// }
// else{
//     console.log(c, "c is greater");
// }


// var day=2
// switch (day) {
//     case 1:
//       day = "Sunday";
//       break;
//     case 2:
//       day = "Monday";
//       break;
//     case 3:
//        day = "Tuesday";
//       break;
//     case 4:
//       day = "Wednesday";
//       break;
//     case 5:
//       day = "Thursday";
//       break;
//     case 6:
//       day = "Friday";
//       break;
//     case 7:
//       day = "Saturday";
//     default:
//         console.log("give the correct value");
//     break;      
//   }
//   console.log(day);

// var a=40;
// var b=10;
// var c="-";
// switch (c) {
//   case "+":
//     c=a+b;
//     break;
//   case "-":
//     c=a-b;
//     break;
//   case "*":
//     c=a*b;
//     break;
//   case "/":
//     c=a/b ;
//     break;   

//   default:
//     break;
// }
// console.log(c);
// var c=10;
// var b=20; 
// var a="+"
// const d= (a, b, c) => 
// {
// 	switch (a){
// 	  case "+":
// 	    a=b+c;
// 	  break;
	  
// 	  case "-":
// 	    a=b-c;
// 	    break;
	    
// 	  case "*":
// 	    a= b*c;
// 	    break;
	 
// 	 case "/":
// 	   a=b/c;
// 	   break;
	 
// 	}
//     console.log(d);
// };
// var N=36;
// const Check_divisibility = (N) => {
//   console.log(( N%6===0 && N%9===0 ? "divisible by both":" not devisible by both"));

  
// };
// var a=30;
// var b=40;
// var c=60;
// switch (true) {
//   case (a>b && b>c):
//     console.log(a); 
//     break;
//   case(b>a&&b>c):
//     console.log(b);
//     break;
//   case (c>a && c>b):
//     console.log(c);  
//       break;
//   default:
//     break;
// }
// for(var a=19; a<=19; a++){
//     console.log(a+19);
// }

// for( let i= 1; i<5;i++){
//   for( let j=1; j<4;j++){
//     console.log("value of i is :",i,"value of j is:",j);
//   }
// }

// let i = 0;
// while (i < 6) {
//   console.log(i*2)
//   i++;
// }
// var i=1;
// do{
//   console.log(i);
//   i++; 
// }
// while(i<1)

// for(var i=1;i<=10;i++){
//   console.log(i*19);
// }


let num=346;
let sum=0;
while(num>0){
    rem=num%10;
    sum=sum+rem;
    num=parseInt(num/10);
}
console.log(num,sum);