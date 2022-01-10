// function student (name,age,city){
//     this.name = name;
//     this.age  = age;
//     this.city = city;
// }

// let student1 = new student("sahil",24,"jaipur")
// let student2 = new student("rahul",23,"delhi")
// let student3 = new student("shreya",24,"jaipur")
// console.log(student1);
// console.log(student2);
// console.log(student3);

// student1.salary = 30000;
// console.log(student1);



// var num = (9- "4")
// console.log(num);
// console.log(typeof(num));

// Create an empty object user.
// Add the property ""name"" with the value John.
// Add the property ""age"" with the value 24.
// Change the value of the ""name"" to Smith.
// Remove the property ""name"" from the object."


// var user = {
//     name : "john",
//     age : 24
// }
// console.log(user);

// user.name = "smith"
// console.log(user);

// delete(user.name)
// console.log(user);


// let salaries = {
//     John: 100,
//     Smith: 150,
//   }
// //   Write the code to sum all salaries and store in the variable sum. Should be 250 in the example above.
  
// //   If salaries is empty, then the result must be 0."
  
// var sum = (salaries.John)+(salaries.Smith)
// console.log(sum);


// "Question : Create a function multiplyNum(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: ""My menu""
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place."


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// multiplyNumeric(menu);
  

// function multiplyNum(obj){

// }


// "Question : Create a single object by merging these 2 objects : person and job
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     ssn: '123-456-2356'
// };


// let job = {
//     jobTitle: 'JavaScript Developer',
//     location: 'USA'
// };
 
// var arr = {...person,...job}
// console.log(arr);


// practise by me __________________________________________________________________________

// function Person (name ,age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// let person1 = new Person("sahil","24",25000)
// let person2 = new Person("rahul","23",30000)
// console.log(person1);
// console.log(person2);

// person1.occupation = "hr";
// console.log(person1);

// Person.prototype.company = "


let employee = {
    name : "John",
    salary : 25000,
    designation : "HR",
    displayEmpDetails : function(){  
        console.log(this.name + " is earning " + this.salary + " at " + this.designation + " position. ");  //code block
    }
}

var teacher = Object.create(employee);
console.log(teacher);
console.log(employee.name);