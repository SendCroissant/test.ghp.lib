// model.js

function revert (str) {
  var reverted = '';

  for (var i = str.length - 1; i >= 0; i--) {
    reverted += str[i];
  }

  return reverted;
}
