# 迭代器与生成器

## 本章内容
 + 理解迭代
 + 迭代器模式
 + 生成器

迭代, iteration(en), itero(latin), 意思是重复。  
软件领域指**按照顺序** **反复多次** **执行一段程序**，通常会有明确的**终止条件**。


## 理解迭代
js中，计数循环就是一种简单的迭代：
``` js
for( let i=0; i <= 10; ++i ){
    console.log(i);
}
```
1. 循环是迭代机制的基础，这是因为它可以指定迭代的次数，以及每次迭代要执行什么操作。
2. 每次循环都会在下一次迭代开始之前完成，而每次迭代的顺序都是事先定义好的。
3. 迭代会在一个有序集合上进行。
> （“有序”可以理解为集合中所有项都可以按照既定的顺序被遍历到，特别是开始和结束项有明确的定义。）
> 数组是 JavaScript 中有序集合的最典型例子。

``` js
let collection = ['foo', 'bar', 'baz']; 
for (let index = 0; index < collection.length; ++index) { 
 console.log(collection[index]); 
}
```
可以迭代的条件：
1. 迭代之前需要事先知道如何使用数据结构。
2. 遍历顺序并不是所有数据结构都有。

需要了解的设计模式：**迭代器模式**

## 迭代器模式
“可迭代对象”(iterable):  
like:类似数组或集合这样的集合类型的对象。  
what:实现了正式的Iterable接口，而且可以通过迭代器Iterator消费。  
>包含的元素都是有限的，而且都具有无歧义的遍历顺序。

任何实现Iterable接口的数据结构(称之为**可迭代对象**)都可以被实现Iterator接口的结构(称之为**迭代器**)“消费”(consume).  
**迭代器**(iterator)是按需创建的一次性对象。每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代
其关联可迭代对象的 API。迭代器无须了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。

### 可迭代协议
实现Iterable接口(可迭代协议)要求同时具备两种能力：
1. 支持迭代的自我识别能力
2. 创建实现Iterator接口的对象的能力

在ECMAScript种，这意味着**必须暴露一个属性作为“默认迭代器”**，而这个属性必须使用特殊的**Symbol.iterator作为键**。这个默认迭代器属性必须引用一个迭代器工厂函数，调用这个工厂函数必须返回一个新迭代器。

很多内置类型都实现了Iterable接口：
- 字符串
- 数组
- 映射
- 集合
- arguments对象
- NodeList 等DOM集合类型


```js
let num = 1; 
let obj = {}; 
// 这两种类型没有实现迭代器工厂函数
console.log(num[Symbol.iterator]); // undefined 
console.log(obj[Symbol.iterator]); // undefined 

let str = 'abc'; 
let arr = ['a', 'b', 'c']; 
let map = new Map().set('a', 1).set('b', 2).set('c', 3); 
let set = new Set().add('a').add('b').add('c'); 
let els = document.querySelectorAll('div'); 
// 这些类型都实现了迭代器工厂函数
console.log(str[Symbol.iterator]); // f values() { [native code] } 
console.log(arr[Symbol.iterator]); // f values() { [native code] } 
console.log(map[Symbol.iterator]); // f values() { [native code] } 
console.log(set[Symbol.iterator]); // f values() { [native code] } 
console.log(els[Symbol.iterator]); // f values() { [native code] } 
// 调用这个工厂函数会生成一个迭代器
console.log(str[Symbol.iterator]()); // StringIterator {} 
console.log(arr[Symbol.iterator]()); // ArrayIterator {} 
console.log(map[Symbol.iterator]()); // MapIterator {} 
console.log(set[Symbol.iterator]()); // SetIterator {} 
console.log(els[Symbol.iterator]()); // ArrayIterator {}
```

接收可迭代对象的原生语言特性包括：
- for-of循环
- 数组解构
- 拓展操作符
- Array.from()
- 创建集合
- 创建映射
- Promise.all()接受由Promise组成的可迭代对象
- Promise.race()接受由Promise组成的可迭代对象
- yield*操作符， 在生成器中使用

这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器

``` js
let arr = ['foo', 'bar', 'baz']; 
// for-of 循环
for (let el of arr) { 
 console.log(el); 
} 
// foo 
// bar 
// baz 
// 数组解构
let [a, b, c] = arr; 
console.log(a, b, c); // foo, bar, baz 
// 扩展操作符
let arr2 = [...arr]; 
console.log(arr2); // ['foo', 'bar', 'baz'] 
// Array.from() 
let arr3 = Array.from(arr); 
console.log(arr3); // ['foo', 'bar', 'baz'] 
// Set 构造函数
let set = new Set(arr); 
console.log(set); // Set(3) {'foo', 'bar', 'baz'} 
// Map 构造函数
let pairs = arr.map((x, i) => [x, i]); 
console.log(pairs); // [['foo', 0], ['bar', 1], ['baz', 2]] 
let map = new Map(pairs); 
console.log(map); // Map(3) { 'foo'=>0, 'bar'=>1, 'baz'=>2 } 
```
如果对象原型链上的父类实现了 Iterable 接口，那这个对象也就实现了这个接口：
```js
class FooArray extends Array {} 
let fooArr = new FooArray('foo', 'bar', 'baz'); 
for (let el of fooArr) { 
 console.log(el); 
} 
// foo 
// bar 
// baz
```

### 迭代器协议
迭代器是一种一次性使用的对象，用于迭代与其关联的可迭代对象。  
迭代器API使用next()方法在可迭代对象中遍历数据。  
每次成功调用next()，都会返回一个IteratorResult对象，其中包含迭代器返回的下一个值。  
若不调用 next()，则无法知道迭代器的当前位置。

IteratorResult包含两个属性：
- done:bool, 表示是否还可以再次调用next()取得下一个值；
- value:any, 包含可迭代对象的下一个值（done为false）,或者undefined(done为true)。
> done: true的状态称为:"耗尽".
``` js
// 可迭代对象
let arr = ['foo', 'bar']; 
// 迭代器工厂函数
console.log(arr[Symbol.iterator]); // f values() { [native code] } 
// 迭代器
let iter = arr[Symbol.iterator](); 
console.log(iter); // ArrayIterator {} 
// 执行迭代
console.log(iter.next()); // { done: false, value: 'foo' } 
console.log(iter.next()); // { done: false, value: 'bar' } 
console.log(iter.next()); // { done: true, value: undefined }
```

#### 要点
- 调用next()方法按顺序迭代数组，直到不再产生新值。
- 迭代器不知道怎么从可迭代对象中取下一个值，也不知道可迭代对象有多大
- 每个迭代器都表示对可迭代对象的一次性有序遍历
- 不同迭代器的实例相互之前没有联系，只会独立的遍历可迭代对象
    ``` js
    let arr = ['foo', 'bar']; 
    let iter1 = arr[Symbol.iterator](); 
    let iter2 = arr[Symbol.iterator](); 
    console.log(iter1.next()); // { done: false, value: 'foo' } 
    console.log(iter2.next()); // { done: false, value: 'foo' } 
    console.log(iter2.next()); // { done: false, value: 'bar' } 
    console.log(iter1.next()); // { done: false, value: 'bar' }
    ```
- 迭代器并不与可迭代对象某个时刻的快照绑定，而是使用游标来记录可迭代对象的历程。如果可迭代对象在
迭代期间被修改了，那么迭代器也会反映相应的变化：

    ``` js
    let arr = ['foo', 'baz']; 
    let iter = arr[Symbol.iterator](); 
    console.log(iter.next()); // { done: false, value: 'foo' } 
    // 在数组中间插入值
    arr.splice(1, 0, 'bar'); 
    console.log(iter.next()); // { done: false, value: 'bar' } 
    console.log(iter.next()); // { done: false, value: 'baz' } 
    console.log(iter.next()); // { done: true, value: undefined }
    ```


#### 自定义迭代器
任何实现Iterator接口的对象都可以作为迭代器使用。
``` js
class Counter{
    constructor(limit){
        this.count = 1;
        this.limit = limit;
    }

    next(){
        if(this.count <= this.limit){
            return {done: false, value: this.count++}
        }else {
            return {done: true, value: undefined};
        }
    }
    [Symbol.iterator](){
        return this;
    }
}

let counter = new Counter(3);

for(let i of counter){
    console.log(counter);
}
```
这个类实现了 Iterator 接口，但不理想。这是因为它的每个实例只能被迭代一次
``` js
for(let i of counter){
    console.log(counter); // 1, 2, 3
}

for(let i of counter){
    console.log(counter); //nothing logged
}
```

使用闭包来让计数器变量独立计数
``` js
class Counter {
    constructor(limit){
        this.limit = limit;
    }
    [Symbol.iterator](){
        let count = 1,
        limit = this.limit;
        return {
            next(){
                if(count <= limit){
                    return { done: fale, value: count++};
                } else {
                    return {done: true, value: undefined};
                }
            }
        };
    }
}
