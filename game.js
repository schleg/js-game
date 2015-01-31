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
    this.createEntity = function (type, control) {
      entities.push(new type(self, new control()));
    };
  };
  var Player = function (game, control) {
    var control = control;
    this.size = {
      x: 10,
      y: 10
    };
    var center = null;
    this.update = function (bounds) {
      if (!center) {
        center = {
          x: bounds.x / 2,
          y: bounds.y - this.size.y / 2
        }
      }
      if (control.active(control.DIRECTION.LEFT)) {
        center.x -= 1;
      } else if (control.active(control.DIRECTION.RIGHT)) {
        center.x += 1;
      }
    };
    this.draw = function (screen) {
      screen.fillRect(
        center.x - this.size.x / 2,
        center.y - this.size.y / 2,
        this.size.x, this.size.y);
    };
  };
  var Keyboard = function () {
    var keyState = {};
    window.addEventListener('keydown', function (e) {
      keyState[e.keyCode] = true;
    });
    window.addEventListener('keyup', function (e) {
      keyState[e.keyCode] = false;
    });
    this.active = function (keyCode) {
      return keyState[keyCode] === true;
    };
    this.DIRECTION = {
      LEFT: 37,
      RIGHT: 39
    };
  };
  window.addEventListener('load', function () {
    var game = new Game();
    game.createEntity(Player, Keyboard);
  });
})();
