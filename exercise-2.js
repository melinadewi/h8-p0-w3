function balikString(str){
  var strRev = '';
  for (var i = str.length-1; i >= 0; i--) {
    strRev += str[i];
  }
  return strRev;
}
console.log(balikString('"hello world!"'));