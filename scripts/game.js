define(function () {
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
  return {
    createEntity: function (type) {
      entities.push(type);
    }
  }
});
