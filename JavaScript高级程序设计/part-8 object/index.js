let obj = {
  a: 120,
};

function changeObjProperty() {
  console.log("调用changeObjProperty");
  console.log(obj);
  let person = {};
  console.log(person);
  Object.defineProperty(person, "name", {
    writeable: false,
    value: "Nick",
  });
  console.log(person.name);
  person.name = "jack";
  console.log(person.name);
}

function testDefineProperties() {
  let book = {};
  Object.defineProperties(book, {
    year_: {
      value: 2017,
    },
    edition: {
      value: 1,
    },
    year: {
      get: function () {
        return this.year_;
      },
      set: function (newValue) {
        if (newValue > 2017) {
          this.year_ = newValue;
          this.edition += newValue - 2017;
        }
      },
    },
  });

  console.log(book);

  let descriptor = Object.getOwnPropertyDescriptor(book, "year_");
  console.log(
    "%c [ year_ ]-42",
    "font-size:13px; background:pink; color:#bf2c9f;"
  );
  console.table(descriptor);

  descriptor = Object.getOwnPropertyDescriptor(book, "year");
  console.log(
    "%c [ year ]-46",
    "font-size:13px; background:pink; color:#bf2c9f;"
  );
  console.table(descriptor);

  console.log(Object.getOwnPropertyDescriptors(book), "books");
}

function testAssgin() {
  let dest, src, result;
  console.log("dest", dest, "src", src, "result", result);
  dest = {};
  src = { id: "src" };

  result = Object.assign(dest, src);
  console.log("dest", dest, "src", src, "result", result);
  console.log("dest === result", dest === result);
  console.log("dest === src", dest === src); // '===' 如果两个操作数都是对象，只有当它们指向同一个对象时才返回 true。
  console.log(
    "%c [ Object.getOwnPropertyDescriptors(dest) ]-71",
    "font-size:13px; background:pink; color:#bf2c9f;",
    Object.getOwnPropertyDescriptors(dest)
  );
  console.log(
    "%c [ Object.getOwnPropertyDescriptors(src) ]-71",
    "font-size:13px; background:pink; color:#bf2c9f;",
    Object.getOwnPropertyDescriptors(src)
  );
  console.log(
    "%c [ Object.getOwnPropertyDescriptors(result) ]-71",
    "font-size:13px; background:pink; color:#bf2c9f;",
    Object.getOwnPropertyDescriptors(result)
  );
}

function testAssgin2() {
  let dest, src, result;
  dest = {
    set a(val) {
      console.log(`Invoked dest setter with param ${val}`);
      // WARNING: death loop
      // this.a = val
      this.b = val;
    },
  };

  src = {
    get a() {
      console.log("Invoked src getter");
      return "foo";
    },
  };

  Object.assign(dest, src);
  console.log(
    "%c [ dest ]-103",
    "font-size:13px; background:pink; color:#bf2c9f;",
    dest
  );
}

// 对象标识及相等判定
function testIs() {
  console.log(Object.is(true, 1)); // false
  console.log(Object.is({}, {})); // false
  console.log(Object.is("2", 2)); // false

  // 正确的 0、-0、+0 相等/不等判定
  console.log(Object.is(+0, -0)); // false
  console.log(Object.is(+0, 0)); // true
  console.log(Object.is(-0, 0)); // false

  // 正确的 NaN 相等判定
  console.log(Object.is(NaN, NaN)); // true

  function recursivelyCheckEqual(x, ...rest) {
    console.log(rest, "rest");
    return (
      Object.is(x, rest[0]) &&
      (rest.length < 2 || recursivelyCheckEqual(...rest))
    );
  }

  console.log(
    recursivelyCheckEqual(true, true, true, "a"),
    'recursivelyCheckEqual(true, true, true, "a", -0, +0, 0)'
  );
}

// 工厂模式
function createPerson(name, age, job) {
  let o = new Object();

  o.name = name;
  o.age = age;
  o.job = job;
  // 等价于 o.sayName = new Function("console.log(this.name)")
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}

// 构造函数模式
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = () => {
    console.log(this.name);
  };
}

// 原型模式
function People() {}

People.prototype.name = "zwz";
People.prototype.age = 25;
People.prototype.job = "FE";
People.prototype.sayName = function () {
  console.log("cool");
};

function main() {
  // changeObjProperty();
  // testDefineProperties();
  // testAssgin();
  // testAssgin2();
  // testIs();
  // let person1 = createPerson("张三", 21, "恶人");
  // let person2 = createPerson("李四", 21, "警察");
  // let person3 = new Person("王五", 21, "恶人");
  // let person4 = new Person("赵六", 21, "警察");
  // console.log(
  //   "person1.sayName == person2.sayName",
  //   person1.sayName == person2.sayName // false
  // );
  // const allPerson = [person1, person2, person3, person4];
  // allPerson.map((person) => person.sayName());
  // try {
  //   let test = createPerson("a", "b", "c");
  //   console.log(test);
  //   console.log(test instanceof Object);
  // } catch (error) {
  //   console.log(error);
  // }

  let people1 = new People();
  let people2 = new People();
  people1.sayName();
  people2.sayName();
  console.log('%c [ people1.sayName === people2.sayName ]-204', 'font-size:13px; background:pink; color:#bf2c9f;', people1.sayName === people2.sayName)
}

main();
