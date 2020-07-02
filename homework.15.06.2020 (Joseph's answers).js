let numbers = [23, 45, 8, 9, 1043, 68]; 
numbers.push(18)
let numbersmorethan20 = numbers.filter(function(n){
    return n > 20;
});

console.log(numbersmorethan20);
let Joseph = {};

    Joseph = {
    firstname : "Joseph",
    lastname : "wong",
    age : 12,
    weigth : "40kg",
};

function name(){
    
}

function age(age){
 if (age === 12){
 console.log("Joseph is of age")
 } else{
 console.log("Joseph is not of age")
 }
};
 
 age(12);

 switch (true){
    case numbers.length === 7 :
        console.log("OK")
        break;
    case numbers.length === 6 :
        console.log("Missing the pushed value")
        break;
    defult:
    null
};
let x = true;

console.log(btoa("Joseph wong"));
  if (x === true){
      console.log(atob("Sm9zZXBoIHdvbmc="));
  } else {
      null
  };
  a ();
 function a(){
console.log("a")
   b()
 };
 function b(){
     setTimeout(
         () =>{
        console.log("e");
         },
         0
     );
     console.log("c")
 };
 console.log("d")
