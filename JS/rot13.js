function rot13(str) {

  const alpha = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
  ]
  function newIndex(i) {
    return i + 13 >= alpha.length
    ? i + 13 - alpha.length
    : i + 13
  }

  return str
      .split(' ')
      .map( w => {
    var rot13 = '';

    for (let key in w) {
      let index = alpha.indexOf(w[key]); 
      let rotIndex = newIndex(index);
      index !== -1
      ? rot13+= alpha[rotIndex]
      : rot13+= w[key]
    }
    
    return rot13
  } ).join(' ')
}
