/*Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const s  = "([]{}[])";
//one algorithm would be to keep count of the parentheses and then print

var isValid = function(s) {
    //create a stack
    const stack = [];
    //create a map
    const map = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    for(let char of s){
       if(char in map){ //closing bracket found
        const top = stack.pop();
        if(top!==map[char]){
            return false;
        }
       }
       else {
        stack.push(char)
       }
    }
    return stack.length === 0
}

console.log(isValid(s));