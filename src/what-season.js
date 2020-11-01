const CustomError = require("../extensions/custom-error");
 
module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
    if (Object.prototype.toString.call(date) === "[object Date]") {
      if (isNaN(date.getTime())) {
        throw new Error('Error');
      } else {
        month = date.getMonth();
          if (month == 0 || month == 1 || month == 11){
            return 'winter';
          } else if (month == 2 || month == 3 || month == 4){
            return 'spring';
          } else if (month == 5 || month == 6 || month == 7){
            return 'summer';
          } else {
            return 'autumn';
          }
      }
    } else {
      throw new Error('Error');
    }
};