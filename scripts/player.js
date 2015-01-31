define(['keyboard'], function (keyboard) {
  var size = {
    x: 10,
    y: 10
  };
  var center = null;
  return {
    update: function (bounds) {
      if (!center) {
        center = {
          x: bounds.x / 2,
          y: bounds.y - size.y / 2
        }
      }
      if (keyboard.active(keyboard.DIRECTION.LEFT)) {
        center.x -= 1;
      } else if (keyboard.active(keyboard.DIRECTION.RIGHT)) {
        center.x += 1;
      }
    },
    draw: function (screen) {
      screen.fillRect(
        center.x - size.x / 2,
        center.y - size.y / 2,
        size.x, size.y);
    }
  }
});