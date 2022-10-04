/**
 * 简单的代理
 */
const target = {
  id: "target",
};

const handler = {};

const proxy = new Proxy(target, handler);

console.log(target.id);
console.log(proxy.id);

target.id = "foo";
console.log(target.id);
console.log(proxy.id);

/**
 * trap 捕获器
 */

const target2 = {
  foo: "bar",
};

const handler2 = {
  get() {
    return "handler override";
  },
};

const proxy2 = new Proxy(target2, handler2);

console.log(proxy2.foo);
console.log(target2.foo);
