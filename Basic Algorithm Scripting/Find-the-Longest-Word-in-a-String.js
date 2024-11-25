function findLongestWordLength(str) {
    str = str.split(" ");
    var max = 0;
    for(let i=0;i<str.length;i++){
      if (str[i].length > max){
        max = str[i].length;
      }
    }
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");