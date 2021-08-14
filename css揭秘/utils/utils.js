function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}

function testProperty(property) {
  const root = document.documentElement;

  if (property in root.style) {
    root.classList.add(property.toLowerCase());
    return true;
  }

  root.classList.add("no-" + property.toLowerCase());
  return false;
}

function testVaue(id, value, property) {
  const dummy = document.createElement("p");
  dummy.style[property] = value;

  if (dummy.style[property]) {
    root.classList.add(id.toLowerCase());
    return true;
  }
  root.classList.add("no-" + id);
  return false;
}

export { $$, testProperty, testVaue };
