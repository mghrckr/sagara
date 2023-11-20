const data = [1, 4, 9, 2, 5, 6, 3, 7, 8];


const array2D = [];
let index = 0;

for (let i = 0; i < 3; i++) {
  const innerArray = [];
  for (let j = 0; j < 3; j++) {
    innerArray.push(data[index]);
    index++;
  }
  array2D.push(innerArray);
}

console.log(array2D);
