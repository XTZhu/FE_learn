let obj = {
  a: 120,
};

try {
  console.log(obj);
  console.log(obj.a.valueOf());
  console.log(1);
} catch (error) {
  console.error(error);
}

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

changeObjProperty();
