# 迭代器与生成器

> 要点

* 理解迭代
* 迭代器模式
* 生成器

## 理解迭代

计数循环就是一种最简单的迭代。比如for循环，我们可以把for循环看成是一种迭代，它的每一次循环都会调用一次next方法，直到迭代完成。
循环是迭代机制的基础，因为它可以**指定迭代的次数**，以及**每次迭代要执行什么操作**。
每次循环都会在下一次迭代开始之前完成，而每次迭代的顺序都是事先定义好的。
迭代会在一个有序集合上进行。数组就是有序集合最典型的例子。

要点
 1. 迭代之前需要事先知道如何使用数据结构。
 2. 遍历顺序并不是数据结构固有的

## 迭代器模式

 可把有些结构称为"可迭代对象"。实现了Iterable接口的对象就是可迭代对象。
  可迭代对象可以通过迭代器进行遍历。
  可通过迭代器Iterator进行遍历。
  迭代器可以指定迭代的次数。
  迭代器可以指定迭代的顺序。
  可以把可迭代对象理解成数组或集合这样的集合类型的对象：他们包含的元素都是有限的，而且都具有无歧义的遍历顺序。

任何实现 Iterable 接口的数据结构都可以被实现 Iterator 接口的结构“消费”（consume）。
迭代器（iterator）是按需创建的一次性对象。
每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代其关联可迭代对象的 API。
迭代器无须了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。
这种概念上的分离正是 Iterable 和 Iterator 的强大之处。

### 可迭代协议

实现 Iterable 接口（可迭代协议）要求同时具备两种能力：
 1. 支持迭代的自我识别能力
 2. 创建实现Iterator 接口的对象的能力。

这意味着必须暴露一个属性作为“默认迭代器”，而
且这个属性必须使用特殊的 Symbol.iterator 作为键。这个默认迭代器属性必须引用一个迭代器工厂
函数，调用这个工厂函数必须返回一个新迭代器。

检查是否有这个工厂函数： 

```js
let num = 1;
let obj = {};
// 这两种类型没有实现迭代器工厂函数
console.log(num[Symbol.iterator]); // undefined 
console.log(obj[Symbol.iterator]); // undefined
```

```javascript
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

实际写代码过程中，不需要显式调用这个工厂函数来生成迭代器。实现可迭代协议的所有类型都会
自动兼容接收可迭代对象的任何语言特性。接收可迭代对象的原生语言特性包括：
1. for-of 循环
1. 数组解构
1. 扩展操作符
1. Array.from()
1. 创建集合
1. 创建映射
1. Promise.all()接收由期约组成的可迭代对象
1. Promise.race()接收由期约组成的可迭代对象
1. yield*操作符，在生成器中使用

### 迭代器协议

迭代器是一种一次性使用的对象，用于迭代与其关联的可迭代对象。
迭代器 API 使用 next()方法在可迭代对象中遍历数据。
每次成功调用 next()，都会返回一个 IteratorResult 对象，其中包含迭代器返回的下一个值。
若不调用 next()，则无法知道迭代器的当前位置。
next()方法返回的迭代器对象 IteratorResult 包含两个属性：done 和 value。
done: boolean 值，表示迭代是否结束。
value: IteratorResult | undefined 包含可迭代对象的下一个值
done: true 状态称为“耗尽”。

```js
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

迭代器只用执行next()方法就够了， 不用知道怎么取得下一个值，不知道可迭代的对象有多大，只要迭代器到达done： true状态就结束了。

```JavaScript
let arr = ['foo'];
let iter = arr[Symbol.iterator]();
console.log(iter.next()); // { done: false, value: 'foo' } 
console.log(iter.next()); // { done: true, value: undefined } 
console.log(iter.next()); // { done: true, value: undefined } 
console.log(iter.next()); // { done: true, value: undefined }
```

每个迭代器都表示对可迭代对象的一次性有序遍历。不同迭代器的实例相互之间没有联系，只会独
立地遍历可迭代对象：

``` JavaScript 

let arr = ['foo', 'bar']; 
let iter1 = arr[Symbol.iterator](); 、// 工厂函数
let iter2 = arr[Symbol.iterator](); 
console.log(iter1.next()); // { done: false, value: 'foo' } 
console.log(iter2.next()); // { done: false, value: 'foo' } 
console.log(iter2.next()); // { done: false, value: 'bar' } 
console.log(iter1.next()); // { done: false, value: 'bar' }

```

迭代器并不与可迭代对象某个时刻的快照绑定，而仅仅是使用游标来记录遍历可迭代对象的历程。
如果可迭代对象在迭代期间被修改了，那么迭代器也会反映相应的变化：

``` JavaScript
let arr = ['foo', 'baz']; 
let iter = arr[Symbol.iterator](); 
console.log(iter.next()); // { done: false, value: 'foo' } 
// 在数组中间插入值
arr.splice(1, 0, 'bar'); 
console.log(iter.next()); // { done: false, value: 'bar' } 
console.log(iter.next()); // { done: false, value: 'baz' } 
console.log(iter.next()); // { done: true, value: undefined }
```

##### POINT TO

```JavaScript
// 这个类实现了可迭代接口（Iterable） 
// 调用默认的迭代器工厂函数会返回
// 一个实现迭代器接口（Iterator）的迭代器对象
class Foo {
    [Symbol.iterator]() {
        return {
            next() {
                return {
                    done: false,
                    value: 'foo'
                };
            }
        }
    }
}
let f = new Foo();
// 打印出实现了迭代器接口的对象
console.log(f[Symbol.iterator]()); // { next: f() {} } 
// Array 类型实现了可迭代接口（Iterable）
// 调用 Array 类型的默认迭代器工厂函数
// 会创建一个 ArrayIterator 的实例
let a = new Array();
// 打印出 ArrayIterator 的实例
console.log(a[Symbol.iterator]()); // Array Iterator {}
```
