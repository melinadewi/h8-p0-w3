function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    return kalimat.split(' ').length;
    /*
    var arrayKata = kalimat.split(' ');
    for(var i = arrayKata.length-1; i--;){
      if (arrayKata[i] === ''){
        arrayKata.splice(i, 1);
      }
    }
    return arrayKata.length;
    */
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5