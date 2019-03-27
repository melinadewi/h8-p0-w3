function angkaPalindrome(num) {
    // you can only write your code here!
    var searchPalindrome = true;
    var stringNum = '';
    var reverse = '';
    while (searchPalindrome){
        num++;
        stringNum = String(num);
        reverse = '';
        for (var i = stringNum.length - 1; i >= 0; i--){     
        reverse += stringNum[i];
        }
        if (stringNum===reverse){
        return num;
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
