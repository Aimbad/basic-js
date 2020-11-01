const CustomError = require("../extensions/custom-error");

const chainMaker = {
  x: [],
  getLength() {
    return this.x.length;
  },
  addLink(value = '( )') {
    this.x.push(value);
    return this;
  },
  removeLink(pos) {
    if (!isNaN(pos) && pos > 0 && pos <= this.x.length) {
      this.x.splice(pos-1, 1);
      return this;
  } else {
      this.x = [];
      throw new Error();
  }
  },
  reverseChain() {
    this.x = this.x.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    for (let link of this.x) {
      result += `( ${link} )~~`;
    }
    this.x = [];
    return result.slice(0, -2);
  },
};
module.exports = chainMaker;