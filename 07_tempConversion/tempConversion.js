const ftoc = function(deg) {
  let totalVal =  ((deg - 32) * 5) / 9 ;
  if (Number.isInteger(totalVal) === false){
    return parseFloat(totalVal.toFixed(1));
  } else return parseFloat(totalVal.toFixed(1));;
};

const ctof = function(deg) {
  let totalVal = (deg * 9 / 5) + 32;
  if (Number.isInteger(totalVal) === false){
    return parseFloat(totalVal.toFixed(1));
  } else return parseFloat(totalVal.toFixed(1));;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
