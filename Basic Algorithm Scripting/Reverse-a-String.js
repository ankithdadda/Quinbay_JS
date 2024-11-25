function reverseString(str) {
    var s = '';
    for(let i=str.length-1; i>=0; i--){
      s += str[i];
    }
    return s;
  }
  
  reverseString("hello");