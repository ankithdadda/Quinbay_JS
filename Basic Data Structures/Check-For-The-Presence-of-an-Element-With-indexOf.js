function quickCheck(arr, elem) {
    // Only change code below this line
    if(arr.indexOf(elem) != -1){
      return true;
    }
    return false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));