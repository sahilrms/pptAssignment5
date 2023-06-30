function buildStaircase(n) {
    let k = 0;
    
    while (n >= k + 1) {
      k++;
      n -= k;
    }
    
    return k;
  }
  
  // Example usage:
  const n = 9;
  const staircaseRows = buildStaircase(n);
  console.log(staircaseRows);
  