
const numWords = new Map([[0, ""], [1, "one"], [2, "two"], [3, "three"], [4, "four"],
[5, "five"], [6, "six"], [7, "seven"], [8, "eight"], [9, "nine"], [10, "ten"],
[11, "eleven"], [12, "twelve"], [13, "thirteen"], [14, "fourteen"], [15, "fifteen"],
[16, "sixteen"], [17, "seventeen"], [18, "eighteen"], [19, "nineteen"], [20, "twenty"], [30, "thirty"], [40, "forty"], [50, "fifty"]]);

module.exports = function toReadable (number) {
      
      if (number == 0) return "zero";
      if (number <= 20) return numWords.get(number);
      else if (number < 60) return (numWords.get(+((number + "")[0] + "0")) + " " + numWords.get(+((number + "")[1]))).trim();
      else if (number >= 80 && number < 90) return ("eighty" + " " + numWords.get(+((number + "")[1]))).trim();
      else if (number < 100) return (numWords.get(+((number + "")[0])) + "ty " + numWords.get(+((number + "")[1]))).trim();
      else {
          const result = toReadable(+((number + "")[1] + 0) + +((number + "")[2]));
          return (numWords.get(+((number + "")[0])) + " hundred " + (result == "zero" ? "" : result)).trim();
      }
    }