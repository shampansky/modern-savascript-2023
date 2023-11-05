function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Name: ${this.name}`);
};

function Rectangle(name, width, height) {
  Shape.call(this, name);

  Object.create();

  this.width = width;
  this.height = height;
}

const rect1 = new Rectangle('rect1', 100, 200);
