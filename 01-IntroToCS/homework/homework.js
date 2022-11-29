'use strict';


function BinarioADecimal(num) {
   let result = 0;
   let pos = num.length - 1;
   for (let i = 0; i < num.length; i++) {
      result += (num[i]*1) * (2 ** (pos));
      pos--;
   }
   return result;
}

function DecimalABinario(num) {
   let binaryNumber = '';
   let rest;
   while (num !== 0) {
      rest = num % 2;
      num = Math.floor(num/2);
      rest === 1 ? binaryNumber = '1' + binaryNumber : binaryNumber = '0' + binaryNumber;
   }
   return binaryNumber;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
