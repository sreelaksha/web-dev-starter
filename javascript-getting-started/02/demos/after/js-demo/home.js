/*
let greeting = (function(){
    let message = 'Hello';
    let getMessage = function(){
        return message;
    };
    return{
        getMessage : getMessage,
    } //this is closure with object and property and the value is getMessage
    })();
console.log(greeting.getMessage());*/


//Arrow functions

/*let greet = function greetings(name){
    return 'Hi there,' + name;
}
let message = greet('Laksha');
console.log(message);*/

/*let greetings = name => 'Hi there,' +name ;
let message = greetings('Laksha');
console.log(message);*/

/*function sum(num1,num2){
    return num1+num2;
}
let result = sum(10,2);
console.log(result);*/


/*let sum = (num1,num2) => num1+num2;
let result = sum(10,2);
console.log(result);*/

/*
let message = {
    name : 'Laksha',
    regularFunction : function(){
        console.log(this); // message object
        console.log('Hi' + this.name);
    },
    arrowFunction : () => console.log('Hello' + this.name),
    //here it looks for name variable in the global context-the window object
}
message.regularFunction();
message.arrowFunction();
console.log(this); // Window object
*/
/*
let greeting = {};
   greeting.sayHi = function(){
    console.log('Hi');
    console.log(this);
 }
   greeting.sayHi();*/


/*
   function employee(name,profession){
        console.log('My name is ' +name+ '.' +' I am a ' +profession);
        console.log(this);
   }
   employee('Laksha','Frontend Developer');
   employee.call(undefined,'Darshan','Businessman');
   employee.apply(undefined , ['Harish','Backend Developer']);
   */

 /* let person1 = {
        name:'Kai',
        getName : function(){
            return this.name;
        }
  };
  let person2 = {
            name: 'David'
            };
  let getNameCopy = person1.getName.bind(person2);
console.log(getNameCopy()); //David
*/

/*function showMessage(message, name='World'){
    console.log(message + name);
}
showMessage('yo ');
showMessage('Hi ','Laksha');*/

/*function greet(message, ...names){
    console.log(message+ 'World' ); //Hello World
    names.forEach(i => console.log('Hi' +i));//Hi Ram Hi Shyam Hi Seeta

}
greet('Hello', 'Ram' , 'Shyam', 'Seeta');

*/

function greet(person1,person2){
    console.log('Hi ' + person1 + ' and ' + person2);
}
let names = ['Mary','Lilly']
greet (...names);


function print(char1,char2,char3,char4, ...others){
    console.log(others); //[e f g h ]
    console.log(char1, char2, char3, char4) //a b c d
}
let letters= 'abcdefgh';
print(...letters);