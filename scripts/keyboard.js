define(function () {
  var keyState = {};
  window.addEventListener('keydown', function (e) {
    keyState[e.keyCode] = true;
  });
  window.addEventListener('keyup', function (e) {
    keyState[e.keyCode] = false;
  });
  return {
    active: function (keyCode) {
      return keyState[keyCode] === true;
    },
    DIRECTION: {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    }
  }
});
