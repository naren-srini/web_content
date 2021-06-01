function sayHey(name) {
    console.log('Hey World. This is a Node.js program by ' + name);
}
var sayHello = () => {
    console.log("Say Hello World");
}
sayHey('Naren');
sayHello();

console.log(module);

// window.console.log("This is a window object"); //there is no window here

// var message = '';
// globalThis.setTimeout(1); 

/* //node modules

setTimeout(); //Call a function after a delay
clearTimeout(); //
setInterval(); //Repeatedly to call a function after a delay
clearTimeout(); //To stop the function to call itself repeatedly

*/

// Notes: Modules in node help us separate concerns regarding scope of variables