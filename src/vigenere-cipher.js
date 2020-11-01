const CustomError = require("../extensions/custom-error");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";		
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    let x = '';
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error();
    }
    let y = '';
    while (y.length < message.length) {
      y += key;
    }
    y = y.toUpperCase();
    message = message.toUpperCase();
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) > -1) {
        const messageIndex = alphabet.indexOf(message[i]);
        const yj = alphabet.indexOf(y[j]);
        const ci = (messageIndex + yj ) % 26;
        const c = alphabet[ci];
        x += c;
        j++;
      } else {
        x += message[i];
      }
    }
    if (this.isDirect) 
      return x; 
    else 
      return x.split('').reverse().join('');
  }    
  decrypt(message, key) {
    let x = '';
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error();
    }
    let y = '';
    while (y.length < message.length) {
      y += key;
    }
    y = y.toUpperCase();
    message = message.toUpperCase();
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) > -1) {
        const messageIndex = alphabet.indexOf(message[i]);
        const yj = alphabet.indexOf(y[j]);
        const ci = (26 + (messageIndex - yj )) % 26;
        const c = alphabet[ci];
        x += c;
        j++;
      } else {
        x += message[i];
      }
    }
    if (this.isDirect) 
    return x; 
  else 
    return x.split('').reverse().join('');
  }
}
module.exports = VigenereCipheringMachine;