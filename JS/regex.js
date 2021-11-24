function telephoneCheck(str) {

  return !/[^\d\s-]/.test(str)
      ? /^[1-9]\d{9}$|^[1]?\d{10}$/g.test(str
      .split('')
      .filter( w => Number(w) )
      .join('')
        )
      : false
}
