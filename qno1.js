function convertTo2DArray(original, m, n) {
  if (original.length !== m * n) {
    return [];
  }

  const result = Array(m).fill().map(() => Array(n).fill(0));
  let row = 0;
  let col = 0;

  for (let i = 0; i < original.length; i++) {
    result[row][col] = original[i];
    col++;

    if (col === n) {
      col = 0;
      row++;
    }
  }

  return result;
}

const original = [1, 2, 3, 4, 5, 6];
const m = 2;
const n = 3;
const result = convertTo2DArray(original, m, n);
console.log(result);
