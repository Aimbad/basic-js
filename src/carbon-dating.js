const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activ) {
  if(typeof activ == 'string'){
    activ = parseFloat(activ);
    if(MODERN_ACTIVITY > activ && activ > 0){
      return Math.ceil(Math.log(MODERN_ACTIVITY / activ)/0.693/HALF_LIFE_PERIOD);
    }
  }
  return false;
};