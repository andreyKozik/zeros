module.exports = function zeros(str) {
  result = 0;
  arrayOne = [];
  arrayTwo = [];
  oneAll = 0;
  twoEval = 0;
  twoOdd = 0;
  str = str.split("*");
  for (var i = 0; i < str.length; i++) {
    var underStr = str[i];
    if (underStr[underStr.length - 2] === "!") {
      var number = underStr.slice(0, -1).slice(0, -1);
      arrayTwo.push(+number);
    } else if (underStr[underStr.length - 2] !== "!") {
      var number = underStr.slice(0, -1);
      arrayOne.push(+number);
    }
  }
  if (arrayTwo.some(function (element) { return element % 2 === 0 }) === false && arrayOne[0] === undefined) {
    result = 0;
  } else {
    arrayOne.map(function (element) {
      var x = 5;
      while (element >= x) {
        oneAll = oneAll + Math.floor(element / x);
        x = x * 5;
      }
    });

    arrayTwo.map(function (element) {
      if (element % 2 === 0) {
        var x = 5;
        element = element / 2;
        while (element >= x) {
          twoEval = twoEval + Math.floor(element / x);
          x = x * 5;
        }
      } else {
        var x1 = 5;
        var x2 = 5;
        var a = 0;
        var b = 0;
        var element2 = element;
        element = element + 1;
        while (element >= x1) {
          a = a + Math.floor(element / x1);
          x1 = x1 * 5;
        }
        element2 = (element2 + 1) / 2;
        while (element2 >= x2) {
          b = b + Math.floor(element2 / x2);
          x2 = x2 * 5;
        }
        twoOdd = twoOdd + (a - b);
      }
    });

  }
  // console.log(oneAll);
  // console.log(twoEval);
  // console.log(twoOdd);

  result = oneAll + twoEval + twoOdd;
  return result;
};
