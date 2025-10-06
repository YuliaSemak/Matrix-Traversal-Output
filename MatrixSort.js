const numbers = [
  [45,16,57],
  [43,55,56],
  [74,18,91],
];

for (let julia = 0; julia < numbers.length; julia++) {
  for (let start = 0; start < numbers[julia].length; start++) {


    console.log(`${julia + 1} ${start + 1} = ${numbers[julia][start]}`);
  }
}
