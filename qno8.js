function findOriginalArray(changed) {
    const countMap = new Map();
    const original = [];
  
    // Count the occurrences of each element in the changed array
    for (const num of changed) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    // Iterate through each element in the changed array
    for (const num of changed) {
      if (countMap.get(num) > 0) {
        if (num % 2 === 0 && countMap.get(num / 2) > 0) {
          original.push(num / 2); // Add num/2 to the original array
          countMap.set(num, countMap.get(num) - 1); // Decrement the count of num
          countMap.set(num / 2, countMap.get(num / 2) - 1); // Decrement the count of num/2
        } else {
          return []; // Invalid array, return empty array
        }
      }
    }
  
    return original;
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  const result = findOriginalArray(changed);
  console.log(result);
  