// 语法 let expression = /pattern/flags;
// 参数 pattern: 正则表达式的模式字符串
// 参数 flags: 正则表达式的标志字符串
// 返回值: 正则表达式对象
// 标志字符串
// i: 忽略大小写 表示在查找匹配时忽略 pattern 和字符串的大小写。
// g: 全局匹配 表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。
// m: 多行匹配 表示查找到一行文本末尾时会继续查找。
// u: Unicode 启用 Unicode 匹配。
// y: 允许y捕获 粘附模式，表示只查找从 lastIndex 开始及之后的字符串。
// s: 允许.匹配\n ;dotAll 模式，表示元字符.匹配任何字符（包括\n 或\r）。
// u: 允许Unicode字符范围
// x: 允许使用u修饰符

// #1
// 匹配字符串中的所有"at"
let pattern1 = /at/g;
// 匹配第一个"bat"或"cat"，忽略大小写
let pattern2 = /[bc]at/i;
// 匹配所有以"at"结尾的三字符组合，忽略大小写
let pattern3 = /.at/gi;

// #2
// 所有元字符在模式中也必须转义
// ( [ { \ ^ $ | ) ] } ? * + .

// 匹配第一个"bat"或"cat"，忽略大小写
let pattern1 = /[bc]at/i;
// 匹配第一个"[bc]at"，忽略大小写
let pattern2 = /\[bc\]at/i;
// 匹配所有以"at"结尾的三字符组合，忽略大小写
let pattern3 = /.at/gi;
// 匹配所有".at"，忽略大小写
let pattern4 = /\.at/gi;
