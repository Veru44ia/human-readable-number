module.exports = function toReadable(number) {
  const arr = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen ','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

if (number === 0) {
    return ('zero');

}  else if (1 <= number && number < 20) {
    return (arr[number]);

} else if (20 <= number && number < 100 && number.toString()[1] == 0) {
    const dozen = number.toString()[0];
    return (arrDozens[dozen]);

} else if (20 <= number && number < 100 && number.toString()[1] !== 0) {
    const dozen = number.toString()[0];
    const unit = number.toString()[1];
    return (arrDozens[dozen] + ' ' + arr[unit]);

} else if (100 <= number && number < 1000 && number.toString()[1] == 0 && number.toString()[2] == 0) {
    const hundred = number.toString()[0];
    return (arr[hundred] + ' ' + 'hundred');

} else if (100 <= number && number < 1000 && number.toString()[1] == 0 && number.toString()[2] != 0) {
    const hundred = number.toString()[0];
    const unit = number.toString()[2];
    return (arr[hundred] + ' ' + 'hundred' + ' ' + arr[unit]);

} else if (100 <= number && number < 1000 && number.toString()[1] == 1) {
    const hundred = number.toString()[0];
    const dozen = number.toString()[1] + number.toString()[2];
    return (arr[hundred] + ' ' + 'hundred' + ' ' + arr[dozen]);

} else if (100 <= number && number < 1000 && number.toString()[1] != 1 && number.toString()[2] == 0) {
    const hundred = number.toString()[0];
    const dozen = number.toString()[1];
    return (arr[hundred] + ' ' + 'hundred' + ' ' + arrDozens[dozen]);

} else if (100 <= number && number < 1000 && number.toString()[1] != 1 && number.toString()[2] != 0) {
    const hundred = number.toString()[0];
    const dozen = number.toString()[1];
    const unit = number.toString()[2];
    return (arr[hundred] + ' ' + 'hundred' + ' ' + arrDozens[dozen] + ' ' + arr[unit]);
}   
}; 
