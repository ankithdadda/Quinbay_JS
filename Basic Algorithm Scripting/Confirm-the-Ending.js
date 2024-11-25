function confirmEnding(str, target) {
    return str.match(target + '$') !== null;
  }
  
  confirmEnding("Bastian", "n");