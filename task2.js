// Data manipulation write a function in Nodejs that takes an array
// of integers as input and returns the sum of all the numbers

const sumNums = (arrayOfNums) => {
  let check = arrayOfNums.every((i) => typeof i === "number");

  if (!check) {
    return console.log("Please pass number value only");
  }

  const sum = arrayOfNums.reduce((acc, currvalue) => acc + currvalue);

  console.log(`Sum of Array is ${sum}`);

  return sum;
};

let nums = [1, 2, 34, 5, 22, 10];

sumNums(nums);
