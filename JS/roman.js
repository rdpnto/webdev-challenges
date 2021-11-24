function convertToRoman(num) {

    const romans = [
        {
            1: 'I',
            5: 'V'
        },
        {
            10: 'X',
            50: 'L'
        },
        {
            100: 'C',
            500: 'D'
        },
        {
            1000: 'M'
        }
    ]
    
    var sNum = num.toString().split('').reverse(),
        size = sNum.length,
        roman = '';

    for (let i = 0; i < size; i++) {
        var n = sNum[i],
            rAlg = Object.values(romans[i]);

        switch(true) {
            case n < 4:
                 roman = rAlg[0].repeat(n%5) + roman;
                 break;
            case n == 4:
                 roman = rAlg[0]+rAlg[1] + roman;
                 break;
            case n < 9:
                 roman = rAlg[1]+rAlg[0].repeat(n%5) + roman;
                 break;
            case n == 9:
                 roman = rAlg[0]+Object.values(romans[i+1])[0] + roman;
                 break;
        }
    }

    return roman
}
