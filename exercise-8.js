function pasanganTerbesar(num) {
  // you can only write your code here!
  var strNum = String(num);
  var arrNum = [];
  for (var i=0; i<strNum.length-1;i++){
    var angka = strNum[i]+strNum[i+1];
    arrNum.push(Number(angka));
  }
  return Math.max(...arrNum);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99