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

/*  ---------------------------------------   */

for (var i = 0; i < 5; ++i) {
  // 循环逻辑
}
console.log(i); // 5

/*  ---------------------------------------   */

for (let j = 0; j < 5; ++j) {
  // 循环逻辑
}
console.log(j); // 5

/*  ---------------------------------------   */

for (var i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// 你可能以为会输出 0、1、2、3、4
// 实际上会输出 5、5、5、5、5

/*  ---------------------------------------   */

for (let i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// 实际上会输出 0、1、2、3、4

/*  ---------------------------------------   */

const age = 26;
age = 36; // TypeError: 给常量赋值

/*  ---------------------------------------   */

// const 也不允许重复声明
const name = "Matt";
const name = "Nicholas"; // SyntaxError

/*  ---------------------------------------   */

// const 声明的作用域也是块
const name = "Matt";
if (true) {
  const name = "Nicholas";
}
console.log(name); // Matt

/*  ---------------------------------------   */

const person = {};
person.name = "Matt"; // ok

/*  ---------------------------------------   */

// JavaScript 引擎会为 for 循环中的 let 声明分别创建独立的变量实例，虽然 const 变量跟 let 变
// 量很相似，但是不能用 const 来声明迭代变量（因为迭代变量会自增）：
for (const i = 0; i < 10; ++i) {} // TypeError：给常量赋值

/*  ---------------------------------------   */

// 遍历中使用const
let i = 0;
for (const j = 7; i < 5; ++i) {
  console.log(j);
}
// 7, 7, 7, 7, 7
for (const key in { a: 1, b: 2 }) {
  console.log(key);
}
// a, b
for (const value of [1, 2, 3, 4, 5]) {
  console.log(value);
}
// 1, 2, 3, 4, 5

/*  ---------------------------------------   */
