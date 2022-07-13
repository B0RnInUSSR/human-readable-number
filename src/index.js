module.exports = function toReadable (number) {
    const fromZeroToTen = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten'
    }
    const fromElToTwenty = {
      1: 'eleven',
      2: 'twelve',
      3: 'thirteen',
      4: 'fourteen',
      5: 'fifteen',
      6: 'sixteen',
      7: 'seventeen',
      8: 'eighteen',
      9: 'nineteen',
      0: 'twenty',
    }
    const formTenToHundred = {
      1: 'ten',
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety',
    }
  
    if(number >= 0 && number <= 10) {
        return fromZeroToTen[number];
    }
    if(number > 10 && number < 21){
        return fromElToTwenty[number.toString()[1]];
    }
    if(number > 20 && number < 100){
        if(number.toString()[1] == '0'){
        return formTenToHundred[number.toString()[0]];
        } else {
            return formTenToHundred[number.toString()[0]] + ' ' + fromZeroToTen[number.toString()[1]];
        }
    }

    if(number > 99 && number < 1000){
    if(number.toString()[1] == '0' && number.toString()[2] == '0'){
        return fromZeroToTen[number.toString()[0]] + ' hundred';
        } else if(number.toString()[1] == '0'){
            return fromZeroToTen[number.toString()[0]] + ' hundred ' + fromZeroToTen[number.toString()[2]];
        } else if(number.toString()[2] == '0'){
            return fromZeroToTen[number.toString()[0]] + ' hundred ' + formTenToHundred[number.toString()[1]];
        } else if (number.toString()[1] == "1" && number.toString()[2] == 0){
        return fromZeroToTen[number.toString()[0]] + ' hundred ten ';
        } else if(number.toString()[1] == '1'){
            return fromZeroToTen[number.toString()[0]] + ' hundred ' + fromElToTwenty[number.toString()[2]];
        }   else if(number.toString()[1] == '1'){
            return fromZeroToTen[number.toString()[0]] + ' hundred ' + fromElToTwenty[number.toString()[2]];
        } else {
            return fromZeroToTen[number.toString()[0]] + ' hundred ' + formTenToHundred[number.toString()[1]] + ' ' + fromZeroToTen[number.toString()[2]];
        }
    }
  }
  
  
  