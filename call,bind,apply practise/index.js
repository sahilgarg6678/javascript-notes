var student= {
    name : "sahil",
    occupation : "software engineer",
    city : "jaipur",
    contact_no:9462946678  
}

var teacher= {
    name : "rahul",
    occupation : "engg",
    city : "delhi",
    contact_no:65478954512  
}

// function info(a) {
//     console.log(" my name is : "+a.name+" occuoation is: "+a.occupation+" city is : "+a.city+" contact no: "+a.contact_no);
// }
// info(student);
// info(teacher);

// function info() {
//     console.log(" my name is : "+this.name+" occuoation is: "+this.occupation+" city is : "+this.city+" contact no: "+this.contact_no);
// }
// info.call(student);
// info.call(teacher);

function info(company,work) {
    console.log(" my name is : "+this.name+" occuoation is: "+this.occupation+" city is : "+this.city+" contact no: "+this.contact_no, company, work);
}
info.call(student,"tcs","hr");
info.apply(teacher,["infosys","engg"]);

// var aaa = info.bind(student)
// aaa("genpect","hr");


