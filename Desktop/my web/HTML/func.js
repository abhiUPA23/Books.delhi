console.log("this is for function");
let name1= "abhi";
console.log( name1 + " is a good boy");

function greet(name, greetText= "default value when nothing is written"){
    console.log(greetText+ " ,"+ name );
    console.log(name + " is allright");
}
greetText= "Greetings!";
let name2= "shyam";
let name3= "ghyanshya";

greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name3);

function sum(a, b, c){
    let d= a+b+c;
    return d;
}
let returnval= sum(5,9,7);

console.log(returnval);




