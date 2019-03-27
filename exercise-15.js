function groupAnimals(animals) {
  // you can only write your code here!
  var firstLetter = [];
  for (var i=0; i<animals.length;i++){
    firstLetter.push(animals[i].charAt(0));
  }
  var unique = [...new Set(firstLetter)].sort();
  var hasil = [];
  for (var j=0; j<unique.length;j++){
    var newArr = [];
    for (var k=0; k<animals.length;k++){
      if (unique[j]===animals[k].charAt(0)){
        newArr.push(animals[k]);
      }
    }
    hasil.push(newArr);
  }
  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]