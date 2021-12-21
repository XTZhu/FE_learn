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
let colors = new Array();
let count = colors.push("red", "green", "blue");
alert(count); // 3

let item = colors.pop();
alert(item); // blue
