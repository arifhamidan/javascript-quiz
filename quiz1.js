let result = "";
for (let num = 1; num <= 20; num++) {
  if (num % 3 === 0) {
    result += "Fizz";
  }
  if (num % 5 === 0) {
    result += "Buzz ";
  } else {
    result += num + " ";
  }
}
console.log(result);

function fizzBuzz(number) {
  let result = "";
  for (let num = 1; num <= number; num++) {
    if (num % 3 === 0) {
      result += "Fizz";
    }
    if (num % 5 === 0) {
      result += "Buzz ";
    } else {
      result += num + " ";
    }
  }
  return result;
}

console.log(fizzBuzz(20));
