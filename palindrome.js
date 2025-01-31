/**
 * @param {number} x
 * @return {boolean}
 */

/*Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

var isPalindrome = function(x) {
    const strArr = x.toString().split('');
   // console.log(strArr);
   const reversed = strArr.reverse().join('');
   const reversedNumber = parseInt(reversed)
   if(reversedNumber ===  x) return true;
   else return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(221))