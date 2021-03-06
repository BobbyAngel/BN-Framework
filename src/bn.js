class List {
  constructor(el) {
    console.log('List created!', el);
    el.innerHTML = 'List';
  }
}

class Table {
  constructor(el) {
    console.log('Table created!', el);
    el.innerHTML = 'Table';
  }
}

const classes = {
    List,
    Table
};

class DynamicClass {
    constructor (className, opts) {
        return new classes[className](opts);
    }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let arr = Array.from(document.body.children);
arr.forEach((element) => {
  if (element.tagName.startsWith('BN')) {
    let e = element.tagName.toLowerCase().replace('bn-', '');
    new DynamicClass(capitalize(e), element);
  }
});
