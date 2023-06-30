function sortedSquares(nums) {
    const squaredArray = [];
  
    for (let i = 0; i < nums.length; i++) {
      squaredArray.push(nums[i] * nums[i]);
    }
  
    squaredArray.sort((a, b) => a - b);
  
    return squaredArray;
  }
  
  // Example usage:
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result);
  