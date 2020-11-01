const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  let x = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      arr[i][j] === "^^" ? (x += 1) : x;
    }
  }

  return x;
  };