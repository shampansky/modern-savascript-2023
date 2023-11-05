function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (points) {
  this.points = this.points + points;
  if (this.points > 10) {
    this.lvl++;
    this.points = this.points - 10;
  }
};

Player.prototype.describe = function () {
  return {
    name: this.name,
    level: this.lvl,
    points: this.points,
  };
};

const player1 = new Player('Ivan');

player1.gainXp(5);
player1.gainXp(9);
player1.gainXp(8);

player1;

console.log(player1.describe());
