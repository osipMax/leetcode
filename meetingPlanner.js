/*
  input:  slotsA = [[10, 50], [60, 120], [140, 210]]
          slotsB = [[0, 15], [65, 90]]
          dur = 8
  output: [65, 73]
*/

function meetingPlanner(slotsA, slotsB, dur) {
  let i = 0;
  let j = 0;
  
  let ans = [];
  
  while (i < slotsA.length && j < slotsB.length) {
    
    const startA = slotsA[i][0];
    const endA = slotsA[i][1];
    
    const startB = slotsB[j][0];
    const endB = slotsB[j][1];
    
    const calculatedStartTime = startA < startB ? startB : startA;
    const calculatedEndTime = calculatedStartTime + dur;
    
    if (endA < calculatedEndTime) {
      i++;
      continue;
    }
    
    if (endB < calculatedEndTime) {
      j++;
      continue;
    }
      
    if (endA >= calculatedEndTime && endB >= calculatedEndTime) {
      ans = [calculatedStartTime, calculatedEndTime];
      return ans;
    }
  }
  
  return ans;
}

// Better solution

function meetingPlanner(slotsA, slotsB, dur) {
  let i = 0;
  let j = 0;
  
  while (i < slotsA.length && j < slotsB.length) {
    const start = slotsA[i][0] < slotsB[j][0] ? slotsB[j][0] : slotsA[i][0];
    const end = slotsA[i][1] < slotsB[j][1] ? slotsA[i][1] : slotsB[j][1];
    
    if (start + dur <= end) {
      return [start, start + dur];
    }
    
    if (slotsA[i][1] < slotsB[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  
  return [];
}


