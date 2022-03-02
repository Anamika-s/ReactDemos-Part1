  
console.log("Arro Funcion")

// function Add()
// {
//    console.log("Inside Add");
// }

// Add();

// const Add = function()
// {
//    console.log("Inside Add");
// }

// Arrow function
const Add = ()=>
 console.log("Inside Add");
 const Add1 = (num) =>
 console.log("Inside Add" + num);
 const Add2 = num =>
 console.log("Inside Add" + num);
 const Add3 = (num1,num2) =>
 console.log("Inside Add" + (num1 + num2));
 //const Add4 = (num1 , num2)=> {return (num1+num2);}
 const Add4 = (num1 , num2)=> num1+num2;
 Add();
Add2(1);
Add3(2,3);
console.log(Add4(22,3));
 









