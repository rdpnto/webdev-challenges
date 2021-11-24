const palindrome = str => {
  
  var cleanStr = str.replace(/[^a-z0-9]+/gi,'').toLowerCase()
  var revStr = new String();
  
  for (let lt = cleanStr.length-1; lt >= 0; lt--) {
    revStr += cleanStr[lt]
  }

  return cleanStr === revStr ? true : false

}
