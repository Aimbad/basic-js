const CustomError = require("../extensions/custom-error");
  
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var x = {};
  x.turns = Math.pow(2, disksNumber)-1;
  x.seconds = Math.floor((x.turns * 3600) / turnsSpeed);
  return x;
};
