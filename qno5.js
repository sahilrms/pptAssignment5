function distanceValue(arr1, arr2, d) {
    let distance = 0;
  
    for (const num1 of arr1) {
      let close = false;
  
      for (const num2 of arr2) {
        if (Math.abs(num1 - num2) <= d) {
          close = true;
          break;
        }
      }
  
      if (!close) {
        distance++;
      }
    }
  
    return distance;
  }
  
  // Example usage:
  const arr1 = [4, 5, 8];
  const arr2 = [10, 9, 1, 8];
  const d = 2;
  const result = distanceValue(arr1, arr2, d);
  console.log(result);
  