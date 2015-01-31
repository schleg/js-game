define(['keyboard'], function (control) {
  var size = {
    x: 30,
    y: 30
  };
  var center = null;
  return {
    update: function (bounds) {
      if (!center) {
        center = {
          x: (bounds.x / 2) - size.x / 2,
          y: (bounds.y / 2) - size.y / 2
        }
      }
      if (control.active(control.DIRECTION.LEFT)) {
        center.x -= 1;
      } else if (control.active(control.DIRECTION.UP)) {
        center.y -= 1;
      } else if (control.active(control.DIRECTION.RIGHT)) {
        center.x += 1;
      } else if (control.active(control.DIRECTION.DOWN)) {
        center.y += 1;
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
