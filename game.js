;(function () {
  var Game = function () {
    var self = this;
    var canvas = document.getElementById('game');
    var screen = canvas.getContext('2d');
    var size = {
      x: canvas.width,
      y: canvas.height
    };
    var update = function () {
    };
    var draw = function (screen, size) {
      screen.clearRect(0, 0, size.x, size.y);
    };
    var tick = function () {
      update();
      draw(screen, size);
      requestAnimationFrame(tick);
    };
    tick();
  };
  window.addEventListener('load', function () {
    var game = new Game();
  });
})();
