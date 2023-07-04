function distanceFromHqInBlocks(block) {
    if (block >= 42) {
      return block - 42;
    } else {
      return 42 - block;
    }
  }
  function distanceFromHqInBlocks(block) {
    if (block >= 42) {
      return block - 42;
    } else {
      return 42 - block;
    }
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; // 1 block is equal to 264 feet
    const distanceInBlocks = Math.abs(endBlock - startBlock);
  
    return distanceInBlocks * blockInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start); // Distance in blocks
    const distanceInFeet = distance * 264; // Distance in feet
  
    if (distanceInFeet <= 400) {
      return 0; // Free sample for distances up to 400 feet
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const fare = (distanceInFeet - 400) * 0.02; // 2 cents per foot beyond the first 400 feet
      return fare.toFixed(2);
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare of $25 for distances over 2000 feet up to 2500 feet
    } else {
      return 'Cannot travel beyond 2500 feet'; // Not allowed to ride over 2500 feet
    }
  }