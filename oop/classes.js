function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect = new Rectangle('Rect', 10, 20);
const rect2 = new Rectangle('Rect 2', 30, 40);

class RectangleClass {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  changeName(newName) {
    return (this.name = newName);
  }

  static getClass() {
    console.log('🟢 rectangle', new this('rect inner', 4, 5).area());
  }
}

const rect3 = new RectangleClass('rectClass', 10, 20);

class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(`The shape is ${this.name}`);
  }
}

class RectangleExt extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shape1 = new Shape('shape1');

const rect4 = new RectangleExt('rect extended', 50, 80);

class App {
  static server = 'local';

  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this.serverName);
  }
}

const app = new App();

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('one', 'two');

console.log(person1.name);
