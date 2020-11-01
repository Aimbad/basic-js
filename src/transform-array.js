const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let res = [];
  if (!Array.isArray(array)) {
    throw new Error();
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '--discard-next') {
      i++;
    } else if (array[i] == '--discard-prev') {
      if (res.length !== 0 && array[i-2] !== "--discard-next") {
        res.pop();
      }
    } else if (array[i] == '--double-next') {
      if (i < array.length-1) {
        res.push(array[i+1]);
      }
    } else if (array[i] == '--double-prev') {
      if (i !== 0 && array[i-2] !== '--discard-next') {
        res.push(array[i-1]);
      }
    } else {
      res.push(array[i]);
    }
}
return res;
};