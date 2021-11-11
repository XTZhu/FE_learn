/*  ---------------------------------------   */
let a;

function sum() {
  a = b = 100;

  console.log(a);
  console.log(b);
}

sum();
/*  ---------------------------------------   */
function test() {
  message = "hi"; // 全局变量
}
test();
console.log(message); // "hi"

/*  ---------------------------------------   */

if (true) {
  var name = "Matt";
  console.log(name); // Matt
}
console.log(name);
