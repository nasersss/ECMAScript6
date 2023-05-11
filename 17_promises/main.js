/**
 * Important Knowledge
 * For Promises
 * ---Call stack
 * ----- Mechanism to make interpreter track your cells
 * ----- when you call function its add to the stack
 * ----- when function executed its removed from the stack
 * ----- The interpreter continue calling from the last point reached
 * ----- Call stack detect web API method and leave it to the browser to handle it
 * ---Web API
 * ----- Methods available from environment => browser
 * ----- When complete it add the callback to the callback queue
 * --- Event loop
 * ----- Wait the call stack to finish 
 * ----- get callback to callback queue
 * ----- add callback to call stack
 * ---callback queue
 * -----
 */
// console.log(x + 1500); // Cannot access 'x' before initialization
// let x = 500;

window.setTimeout(() => console.log(x +500),0);
let x = 500;

console.log("first");
