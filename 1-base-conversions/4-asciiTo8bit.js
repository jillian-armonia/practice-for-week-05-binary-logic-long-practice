const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  let decimal = [];
  //1. Get the decimal value of each character using charCodeAt(index)
  for (let i = 0; i < str.length; i++){
    decimal.push(str.charCodeAt(i));
  }

  //2. Convert decimal to binary
  const binary = decimal.map(n => n.toString(2))

  //3. Use addZeros() to make 8-bit binary strings
    //3a. Make sure that they have to be 8 or divisible by 8...?
  const converted = binary.map(num => addZeros(num, 8))

  return converted.join('')
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
