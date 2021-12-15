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
