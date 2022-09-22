// 模板字面量标签函数

function main() {
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

  let a1 = 6;
  let b1 = 9;

  // 标签函数
  function simpleTag(strings, ...expressions) {
    console.log(strings);
    for (const expression of expressions) {
      console.log(expression);
    }

    return "foobar";
  }

  let untaggedResult1 = `${a1} + ${b1} = ${a1 + b1}`;
  let taggedResult1 = simpleTag`${a1} + ${b1} = ${a1 + b1}`;
  // 排除插值 ${a} ${b} ${a + b}
  // 剩下的 "" + " + " + " = " + ""
  // 对于有 n 个插值的模板字面量，传给标签函数的表达式参数的个数始终是 n，而传给
  // 标签函数的第一个参数所包含的字符串个数则始终是 n+1。

  // ["", " + ", " = ", ""]
  // 6
  // 9
  // 15

  console.log(untaggedResult1); // "6 + 9 = 15"
  console.log(taggedResult1); // "foobar"

  //  ------------------------------------------------ //

  //
  console.log(
    "如果你想把这些字符串和对表达式求值的结果拼接起来作为默认返回的字符串，可以这样做："
  );
  let a2 = 6;
  let b2 = 9;

  function zipTag(strings, ...expressions) {
    console.log(
      "%c [ expressions ]-65",
      "font-size:13px; background:pink; color:#bf2c9f;",
      expressions
    );
    return strings[0] + expressions.map((e, i) => e + strings[i + 1]).join("");
  }

  let untaggedResult2 = `${a2} + ${b2} = ${a2 + b2}`;
  let taggedResult2 = zipTag`${a2} + ${b2} = ${a2 + b2}`;
  console.log("[ untaggedResult2 ] >", untaggedResult2); // "6 + 9 = 15"
  console.log("[ taggedResult2 ] >", taggedResult2); // "6 + 9 = 15"
}

main();
