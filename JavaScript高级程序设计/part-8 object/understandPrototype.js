/**
 * 构造函数也可以是函数表达式
 * 也可以是函数声明
 * 1. function Person(){}
 * 2. let Person = function(){}
 */

function Person() {}

/**
 * 声明之后，构造函数就有了一个与之关联的原型对象
 */

console.log(
  "%c [ typeof Person.prototype ]-15",
  "font-size:13px; background:pink; color:#bf2c9f;",
  typeof Person.prototype
);
console.log(
  "%c [ Person.prototype ]-21",
  "font-size:13px; background:pink; color:#bf2c9f;",
  Person.prototype
);
console.log(
  "%c [ Person.prototype.__proto__ ]-21",
  "font-size:13px; background:pink; color:#bf2c9f;",
  Person.prototype.__proto__ // Object
);

// console.log(Person.__proto__)

/**
 * 综前所述， 构造函数有一个prototype属性
 * 引用其原型对象，而这个原型对象也有一个
 * constructor 属性，引用这个构造函数
 * 换句话说，两者循环引用
 */

console.log(Person.prototype.constructor === Person);
console.log(
  "%c [ Person.prototype.construction === Person ]-35",
  "font-size:13px; background:pink; color:#bf2c9f;",
  Person.prototype.constructor === Person
);
/**
 * 获取 构造函数的原型对象
 * 每次调用构造函数创建一个新实例，这个实例的内部 [[Prototyp]] 指针就会被赋值为 构造函数的原型对象
 * 脚本中没有访问这个 [[Prototyp]] 特性的标准方式，但FF,chrome,  Safari会在每个对象上暴露 __proto__ 属性
 * 通过这个属性可以访问对象的原型
 */

/**
 * 正常的原型链都会终止于Object的原型对象
 * Object原型的原型是null
 */

console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Person.prototype.__proto__.constructor === Object); // Object.prototype.constructor === Object
console.log(Person.prototype.__proto__.__proto__ === null); // Objcet.prototype.__proto__ === null

/**
 * 构造函数、原型对象和实例
 * 是3个完全不同的对象
 */

let person1 = new Person(),
  person2 = new Person();

console.log(person1 !== Person);
console.log(person1 !== Person.prototype);
console.log(Person.prototype !== Person);
console.log(Person);

console.log("-----------------break--------------------");
/**
 * 实例通过__proto__链接到原型对象，
 * 它实际上指向隐藏特性[[Prototype]]
 *
 * 构造函数通过prototype属性连接到原型对象
 *
 * 实例与构造函数没有直接关系，与原型对象有直接关系
 */
console.log(person1); // Person(){}
console.log(person1.prototype); // undefined
console.log(Person.prototype); // {constructor: ...}
console.log(person1.__proto__ === Person.prototype); // true
console.log(person1.__proto__.constructor === Person); // true

/**
 * 同一个构造函数创建的两个实例
 * 共享同一个原型对象
 */
console.log(person1.__proto__ === person2.__proto__); // true

/**
 * instanceof 检查实例的原型链中
 * 是否包含指定构造函数的原型
 */

console.log(person1 instanceof Person); // true
console.log(person1 instanceof Object); // true
console.log(person1.__proto__ instanceof Object); // true

//  两个和原型链有关的方法

console.log(Object.getPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person1));

// 重写对象的原型继承关系
let biped = {
  numLegs: 2,
};

let person = {
  name: "Matt",
};

Object.setPrototypeOf(person, biped);
console.log(person.name);
console.log(person.numLegs);
console.log(Object.getPrototypeOf(person) === biped);
