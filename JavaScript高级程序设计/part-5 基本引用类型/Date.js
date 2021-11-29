// #1
let someDate = new Date(Date.parse("May 23, 2019"));
// 如果传给 Date.parse()的字符串并不表示日期，则该方法会返回 NaN。
// 支持格式化的日期字符串：
// “月/日/年”，如"5/23/2019"；
// “月名 日, 年”，如"May 23, 2019"；
// “周几 月名 日 年 时:分:秒 时区”，如"Tue May 23 2019 00:00:00 GMT-0700"；
console.log(someDate);
console.log(Date.parse("May 23, 2019")); // 1558880000000

// #2
let now = new Date();
console.log(now);

// #3
let sameAs1 = new Date("May 23, 2019"); // 在后台调用了Date.parse()
console.log(sameAs1);

// #4
// GMT 时间 2000 年 1 月 1 日零点
let y2k = new Date(Date.UTC(2000, 0));
// GMT 时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
console.log(Date.UTC(2000, 0)); // 946684800000
console.log(y2k);
console.log(allFives);

// #5
// 与 Date.parse()一样，Date.UTC()也会被 Date 构造函数隐式调用，但有一个区别：这种情况
// 下创建的是本地日期，不是 GMT 日期。

// 本地时间 2000 年 1 月 1 日零点
let y2k = new Date(2000, 0);
// 本地时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
let allFives = new Date(2005, 4, 5, 17, 55, 55);
// 参数同上

// #6
let start = new Date().now();

// #7
let today = new Date();
console.log(today.toDateString()); // 当前日期，如 "Fri May 23 2019"
console.log(today.toTimeString()); // 当前时间，如 "00:00:00 GMT+0800 (中国标准时间)"
console.log(today.toLocaleDateString()); // 当前日期，如 "2019-05-23"
console.log(today.toLocaleTimeString()); // 当前时间，如 "00:00:00"
console.log(today.toUTCString()); // 当前时间，如 "Fri, 23 May 2019 00:00:00 GMT"
console.log(today.getTime()); // 当前时间的毫秒数
// console.log(today.setTime(milliseconds)); // 设置当前时间的毫秒数
console.log(today.getFullYear()); // 当前年份
console.log(today.getMonth()); // 当前月份，从 0 开始
console.log(today.getDate()); // 当前日期
console.log(today.getDay()); // 当前星期，从 0 开始，0 表示星期天
console.log(today.getHours()); // 当前小时，从 0 开始
console.log(today.getMinutes()); // 当前分钟，从 0 开始
console.log(today.getSeconds()); // 当前秒数，从 0 开始
console.log(today.getMilliseconds()); // 当前毫秒数，从 0 开始
console.log(today.getTimezoneOffset()); // 当前时区偏移量，以分钟为单位
// 类似还有setFullYear、setMonth、setDate、setHours、setMinutes、setSeconds、setMilliseconds、setTimezoneOffset
// 以及getTimezoneOffset、toUTCString、toISOString、toJSON、toGMTString、toDateString、toTimeString、toLocaleDateString、toLocaleTimeString
// 和getUTCFullYear、getUTCMonth、getUTCDate、getUTCDay、getUTCHours、getUTCMinutes、
// getUTCSeconds、getUTCMilliseconds、getUTCSeconds、getUTCMilliseconds、getTimezoneOffset、toUTCString、toISOString、toJSON、toGMTString、toDateString、toTimeString、toLocaleDateString、toLocaleTimeString
// 不同的是，getTimezoneOffset()返回的是当前时区偏移量，而toUTCString()返回的是 GMT 时间。
// 另外，toISOString()返回的是 ISO 格式的日期字符串，而toJSON()返回的是 JSON 格式的日期字符串。
// toGMTString()返回的是 GMT 时间，而toDateString()返回的是当前日期。
// 不一一列举，可以参考 MDN 文档
