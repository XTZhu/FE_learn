/* --------------------------------------------*/

var color = "blue";
function changeColor() {
  if (color === "blue") {
    color = "red";
  } else {
    color = "blue";
  }
  console.log(color);
}
changeColor();
console.log(color);

/* --------------------------------------------*/

var color = "blue";
function changeColor() {
  let anotherColor = "red";
  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    console.log(tempColor, 'tempColor', anotherColor, 'tempColor', color, 'color');
    // 这里可以访问 color、anotherColor 和 tempColor
  }
  // 这里可以访问 color 和 anotherColor，但访问不到 tempColor
  swapColors();
}
// 这里只能访问 color
changeColor();

/*
以上代码涉及 3 个上下文：
  - 全局上下文、
  - changeColor()的局部上下文
  - swapColors()的局部上下文
全局上下文中有一个变量 color 和一个函数 changeColor()。
changeColor()的局部上下文中有一个变量 anotherColor 和一个函数 swapColors()，但在这里可以访问全局上下文中的变量 color。
swapColors()的局部上下文中有一个变量 tempColor，只能在这个上下文中访问到。
全局上下文和changeColor()的局部上下文都无法访问到 tempColor。
而在 swapColors()中则可以访问另外两个上下文中的变量，因为它们都是父上下文。

├── window  全局原型链
    ├── color
    └── changeColor()
        ├── anotherColor
        └── swapColor()
            └── tempColor 这是原型链顶端
*/

/* --------------------------------------------*/
