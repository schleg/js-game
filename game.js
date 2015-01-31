;(function () {
  var Game = function () {
    var self = this;
    var canvas = document.getElementById('game');
    var screen = canvas.getContext('2d');
    var size = {
      x: canvas.width,
      y: canvas.height
    };
    var entities = [];
    var update = function () {
      entities.forEach(function (entity) {
        entity.update(size);
      });
    };
    var draw = function (screen, size) {
      screen.clearRect(0, 0, size.x, size.y);
      entities.forEach(function (entity) {
        entity.draw(screen);
      });
    };
    var tick = function () {
      update();
      draw(screen, size);
      requestAnimationFrame(tick);
    };
    tick();
    this.createEntity = function (type) {
      entities.push(new type(self));
    };
  };
  var Player = function (game) {
    this.game = game;
    this.size = { x: 10, y: 10 };
    var center = { x: 0, y: 0 };
    this.update = function (bounds) {
      center = { x: bounds.x / 2, y: bounds.y - this.size.y * 2 }
    };
    this.draw = function (screen) {
      screen.fillRect(
        center.x - this.size.x / 2,
        center.y - this.size.y / 2,
        this.size.x, this.size.y);
    };
  };
  window.addEventListener('load', function () {
    var game = new Game();
    game.createEntity(Player);
  });
})();
