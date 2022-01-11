const zeroes = [0, 0, 0, 0, 0];
console.log(zeroes.fill(6, 6, 3)); // [0, 0, 0, 0, 0]
zeroes.fill(0); // 重置
console.log(zeroes.fill(6, 3, 6)); // [0, 0, 0, 6, 6]
zeroes.fill(0); // 重置
// (-4 + zeroes.length = 1)
// (-1 + zeroes.length = 4)
console.log(zeroes.fill(6, -4, -1)); // [0, 6, 6, 6, 0]
zeroes.fill(0); // 重置
// 索引反向，忽略
console.log(zeroes.fill(6, 6, -3)); // [0, 0, 0, 0, 0]
zeroes.fill(0); // 重置
console.log(zeroes);

/* --------------------------------------------------- */
// 转换方法
// 所有对象都有 toLocaleString()、toString()和 valueOf()方法
// valueOf() 返回的还是数组本身
// 而 toString()返回由数组中每个值的等效字符串拼接而成的一个[逗号]分隔的字符串
// alert()期待字符串，所以会在后台调用数组的 toString()方法，从而得到跟前面一样的结果。

let colors = ["red", "green", "blue"];
alert(colors.toString()); // red,green,blue
alert(colors.valueOf()); // red,green,blue
alert(colors);

/* --------------------------------------------------- */

let person1 = {
  toLocaleString() {
    return "Nikolaos";
  },
  toString() {
    return "Nicholas";
  },
};

let person2 = {
  toLocaleString() {
    return "joce";
  },
  toString() {
    return "Joey";
  },
};

let people = [person1, person2];
alert(people); //Nicholas,Joey
alert(people.toString()); //Nicholas,Joey
alert(people.toLocaleString()); //Nikolaos,joce

/* --------------------------------------------------- */
let colors = ["red", "green", "blue"];
alert(colors.join("and")); // redandgreenandblue
alert(colors.join()); // red,green,blue
alert(colors.join("|")); // red|green|blue
let colors = ["red", "green", null, undefined, "blue"];
alert(colors.join("and")); // redandgreenandandandblue
alert(colors.join()); // red,green,,,blue
alert(colors.join("|")); // red|green|||blue

/* --------------------------------------------------- */
// 栈方法
// push()、pop()
// push() 向数组的末尾添加一个或更多元素，并返回新的长度。
// pop() 从数组的末尾移除一个元素，并返回移除的元素。

// 队列方法
// shift()、unshift()
// shift() 从数组的开头移除一个元素，并返回移除的元素。
// unshift() 向数组的开头添加一个或更多元素，并返回新的长度。

// 删除方法就输出 被删除的项
// 添加方法就输出 数组的长度
let colors = new Array();
let count = colors.push("red", "green", "blue");
console.log(count); // 3

let item = colors.pop();
console.log(item); // blue

console.log(colors); // red,green

const shiftF = colors.shift();
console.log(shiftF); // red

const unShiftF = colors.unshift("yellow", "pink");
console.log(unShiftF); // 3

/* --------------------------------------------------- */
// 排序方法
// reverse(); sort();
let values = [1, 2, 3, 4, 5, 10];
values.reverse();
console.log(values); // 5,4,3,2,1
// sort()会按照升序重新排列数组元素，即最小的值在前面，最大的值在后面。
let output = values.sort();
console.log(output);

// 比较函数接收两个参数，如果第一个参数(a)应该排在第二个参数(b)前面，就返回负值；如果两个参数相
// 等，就返回 0；如果第一个参数(a)应该排在第二个参数(b)后面，就返回正值。

// 简单来说，根据函数返回的值来确定排序的顺序。返回的值越小，a排序越靠前。
// 如果数组的元素是数值，或者是其 valueOf()方法返回数值的对象（如 Date 对象），这个比较函
// 数还可以写得更简单，因为这时可以直接用第二个值减去第一个值：
output = values.sort((a, b) => a - b);
console.log(output);

// reverse()和 sort()都返回调用它们的数组的引用。

/* --------------------------------------------------- */
// 操作方法
// concat()、slice()、splice()
// concat() 合并数组，并返回新数组。
let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); // ["red", "green","blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]

// slice() 方法返回一个数组的一段，两个参数，第一个参数是开始位置，第二个参数是结束位置。
// 如果第一个参数是负数，那么它表示倒数的位置，
// 如果第一个参数是 0，那么它表示数组的开头，
// 如果第一个参数是正数，那么它表示数组的第几个位置，
// 如果第二个参数是负数，那么它表示倒数的位置，
// 如果第二个参数是 0，那么它表示数组的结尾。
// 根据index来截取， 含头不含尾

let colors = ["red", "green", "blue", "yellow", "black", "brown"];
let output = colors.slice(1, 4);
console.log(output); // green,blue,yellow

// splice() 方法用于替换数组的一部分，并返回被删除的元素。
// 它有三个参数，第一个参数是开始位置，第二个参数是删除的个数，第三个参数是插入的值。
// 如果没有第三个参数，那么就是删除。
// 如果第三个参数是一个数组 || undefined || null || 函数 || 字符串 || 数字，那么就是插入。
let colors = ["red", "green", "blue", "yellow", "black", "brown"];
let output = colors.splice(1, 3, "orange", "purple");
console.log(output); // green,blue,yellow

/* --------------------------------------------------- */
// 搜索和位置方法
// 严格相等
// indexOf()、lastIndexOf()、includes()
// indexOf() 方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。
let colors = ["red", "green", "blue", "yellow", "black", "brown"];
let output = colors.indexOf("green");
console.log(output); // 1

// lastIndexOf() 方法返回在数组中可以找到给定元素的最后一个索引，如果不存在，则返回 -1。
let colors = ["red", "green", "blue", "yellow", "black", "brown"];
let output = colors.lastIndexOf("green");
console.log(output); // 1

// includes() 方法返回一个布尔值，表示数组中是否包含给定的值。
let colors = ["red", "green", "blue", "yellow", "black", "brown"];
let output = colors.includes("green");
console.log(output); // true

// 断言函数
// 断言函数是一个可选的函数，它可以用来检查一个表达式的结果是否为 true。
// 如果表达式的结果不为 true，则会抛出一个错误。
// 如果表达式的结果为 true，则断言函数不会执行。
// 断言函数的第一个参数是表达式，第二个参数是错误信息。
// 断言函数的返回值是一个布尔值，表示表达式的结果是否为 true。
// find()、findIndex()、some()、every()
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。
// findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。
// some() 方法用于检测数组中的元素是否满足提供的测试函数。
// every() 方法用于检测数组中的元素是否都满足提供的测试函数。
let ages = [32, 33, 16, 40];
let checkAdult = function (age) {
  return age >= 18;
};
let output = ages.find(checkAdult);
console.log(output); // 32
let output = ages.findIndex(checkAdult);
console.log(output); // 0
let output = ages.some(checkAdult);
console.log(output); // true
let output = ages.every(checkAdult);
console.log(output); // false

//  迭代方法
// forEach()、map()、filter()、 forEach()、 some()
// forEach() 方法对数组的每个元素执行一次提供的函数。
// forEach() 方法不会对结果有任何影响。
// forEach() 方法返回 undefined。
// map() 方法返回一个新数组，其结果是该数组中的每个元素都调用一次提供的函数后返回的结果。
// map() 方法不会对结果有任何影响。
// map() 方法返回一个新数组。
// filter() 方法返回一个新数组，其结果是通过检查每个元素是否满足提供的测试函数后返回的结果。
// filter() 方法不会对结果有任何影响。
// filter() 方法返回一个新数组。

let ages = [32, 33, 16, 40];
let checkAdult = function (age) {
  return age >= 18;
};
let output = ages.forEach(checkAdult);
console.log(output); // undefined
output = ages.map(checkAdult);
console.log(output); // [ true, true, false, true ]
output = ages.filter(checkAdult);
console.log(output); // [ 32, 33, 40 ]

// every() , some()
Array.prototype.every(function (value, index, array) {
  return value > 2;
});
Array.prototype.some(function (value, index, array) {
  return value > 2;
});

// filter()
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let filterResult = numbers.filter((item, index, array) => item > 2);
console.log(filterResult); // [ 3, 4, 5, 4, 3 ]


// 归并方法
// reduce()、reduceRight()
// reduce() 方法接受一个函数作为累加器（accumulator）和数组中的每个值（从左到右）。
// reduce() 方法返回一个单一的值，该值是数组中所有元素调用一次提供的函数后返回的结果。
// reduce() 方法不会对结果有任何影响。
// reduce() 方法返回一个单一的值。
// reduceRight() 方法接受一个函数作为累加器（accumulator）和数组中的每个值（从右到左）。
// reduceRight() 方法返回一个单一的值，该值是数组中所有元素调用一次提供的函数后返回的结果。
// reduceRight() 方法不会对结果有任何影响。
// reduceRight() 方法返回一个单一的值。
let ages = [32, 33, 16, 40];

output = ages.reduce(function (total, age) {
  return total + age;
});
console.log(output); // 100
output = ages.reduceRight(function (total, age) {
  return total + age;
});
console.log(output); // 100


// 定型数组
// 特殊的包含数值类型的数组
// 为WebGL（Web Graphics Library）提供服务
// Array(低效)-> CanvasFloatArray -> Float32Array(第一个类型)

// ArrayBuffer
// ArrayBuffer()是一个普通的 JavaScript 构造函数，可用于在内存中分配特定数量的字节空间。
const buf = new ArrayBuffer(16); // 在内存种分配16字节
console.log(buf.byteLength);
// ArrayBuffer一经创建就不能再改变大小, 不过可以使用slice()复制其全部或部分到一个新的实例中：
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const buf1 = new ArrayBuffer(16);
const buf2 = buf1.slice(4, 16);
console.log(buf2.byteLength); // 8

// ... 暂时略过


//6.4 Map

// "键/值对"储存机制

// 6.4.1 基本API
// new 关键字和 Map 构造函数可以创建一个空映射
const m = new Map();

// 创建的同时初始化实例
// 数传入一个可迭代对象，需要包含键/值对数组。

// 1
// 使用嵌套数组初始化映射
const m1 = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"]
]);
alert(m1.size); // 3

// 2
//使用自定义迭代器初始化映射
const m2 = new Map({
  [Symbol.iterator]: function* () {
    yield ["key1", "val1"];
    yield ["key2", "val2"];
    yield ["key3", "val3"];
  }
});
alert(m2.size); // 3

//3
// 映射期待的键/值对，无论是否提供
const m3 = new Map([[]]);
alert(m3.has(undefined)); // true 
alert(m3.get(undefined)); // undefined

// function: set(), get(), has(), size, delete(), clear()


// 6.4.2 顺序与迭代
// 与 Object 类型的一个主要差异是，
// Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作。

// 映射实例可以提供一个迭代器（Iterator），能以插入顺序生成[key, value]形式的数组。
// entries() 或 Symbol.iterator属性(引用entries())取得这个迭代器
const m = new Map([["key1", "value1"], ["key2", "value2"], ["key3", "value3"]]);

console.log(m.entries === m[Symbol.iterator]) // true

// for(let pair of m[Symbol.iterator]()) 等同于下一行
for (let pair of m.entries()) {
  console.log(pair);
}
// [key1, value1], [key2, value2]...

// 可使用拓展运算符
console.log([...m]); // [[key1, value1], [key2, value2], [key3, value3]]


// 也可使用回调方式
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"]
]);
m.forEach((val, key) => alert(`${key} -> ${val}`));
// key1 -> val1
// key2 -> val2
// key3 -> val3

// keys(), values()

//键和值在迭代器遍历时是可以修改的，但映射内部的引用则无法修改。
const m1 = new Map([
  ["key1", "val1"]
]);
// 作为键的字符串原始值是不能修改的
for (let key of m1.keys()) {
  // 尝试修改键的原始值
  key = "newKey";
  alert(key); // newKey 
  alert(m1.get("key1")); // val1 
}
const keyObj = { id: 1 };
const m = new Map([
  [keyObj, "val1"]
]);
// 修改了作为键的对象的属性，但对象在映射内部仍然引用相同的值
for (let key of m.keys()) {
  key.id = "newKey";
  alert(key); // {id: "newKey"} 
  alert(m.get(keyObj)); // val1 
}
alert(keyObj); // {id: "newKey"}


// 6.6 Set

// api
const m = new Set();
const s1 = new Set(["val1", "val2", "val3"]);

console.log(s1.size);

// add(), has(), size(), delete(), clear()

// 顺序与迭代
// Set 会维护值插入时的顺序，因此支持按顺序迭代
//集合实例可以提供一个迭代器（Iterator），能以插入顺序生成集合内容。
// 可以通过 values()方法及其别名方法 keys()（或者 Symbol.iterator 属性，它引用 values()）取得这个迭代器：
const s = new Set(["val1", "val2", "val3"]);
alert(s.values === s[Symbol.iterator]); // true 
alert(s.keys === s[Symbol.iterator]); // true 
for (let value of s.values()) {
  alert(value);
}
// val1 
// val2 
// val3 
for (let value of s[Symbol.iterator]()) {
  alert(value);
}
// val1
// val2 
// val3