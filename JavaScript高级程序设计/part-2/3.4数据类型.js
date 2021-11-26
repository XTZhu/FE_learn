// 模板字面量标签函数

let a = 6;
let b = 9;

function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
  console.log(strings);
  console.log(aValExpression);
  console.log(bValExpression);
  console.log(sumExpression);

  return "foobar";
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;

// ["", " + ", " = ", ""]
// 6
// 9
// 15

console.log(untaggedResult); // "6 + 9 = 15"
console.log(taggedResult); // "foobar"

//  ------------------------------------------------ //

let a = 6;
let b = 9;

// 标签函数
function simpleTag(strings, ...expressions) {
  console.log(strings);
  for (const expression of expressions) {
    console.log(expression);
  }

  return "foobar";
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
// 排除插值 ${a} ${b} ${a + b}
// 剩下的 "" + " + " + " = " + ""
// 对于有 n 个插值的模板字面量，传给标签函数的表达式参数的个数始终是 n，而传给
// 标签函数的第一个参数所包含的字符串个数则始终是 n+1。

// ["", " + ", " = ", ""]
// 6
// 9
// 15

console.log(untaggedResult); // "6 + 9 = 15"
console.log(taggedResult); // "foobar"

//  ------------------------------------------------ //

// 如果你想把这些字符串和对表达式求值的结果拼接起来作为默认返回的字符串，可以这样做：

let a = 6;
let b = 9;

function zipTag(strings, ...expressions) {
  console.log(expressions);
  return strings[0] + expressions.map((e, i) => e + strings[i + 1]).join("");
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = zipTag`${a} + ${b} = ${a + b}`;

console.log(untaggedResult); // "6 + 9 = 15"
console.log(taggedResult); // "6 + 9 = 15"
