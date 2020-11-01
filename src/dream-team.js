const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var team = '';
  if (Array.isArray(members)) {
    for (let x = 0; x < members.length; x++) {
      if (typeof(members[x]) == 'string') {
        team += members[x].trim().split('')[0].toUpperCase();
      }
    }
    return team.split('').sort().join('');
  } else return false;
};