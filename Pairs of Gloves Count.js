function numberOfPairs(gloves)
{
  let count = 0;
  const set = new Set();
  
  for (let i = 0; i < gloves.length; i ++){
    if (set.delete(gloves[i])) {
      count ++;
      }else{
        set.add(gloves[i])
      }
    }
    return count;
  }
