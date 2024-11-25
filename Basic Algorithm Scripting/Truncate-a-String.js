function truncateString(str, num) {   
    var s = "";
    for (let i = 0; i < str.length; i++){
      if (i + 1 <= num){
        s += str[i];
      }
    }
    if (str.length > num){
      s += "...";
    }
  
    return s;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);