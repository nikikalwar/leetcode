/**
 * @param {string[]} strs
 * @return {string}
 */

/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/
const strs = ["flower","flow","flight"];
//first method is horizontal scanning;

var longestCommonPrefix = function(strs) {
//cover base condition
if(strs.length===0) return '';

//other scenarios
let prefix = strs[0];
for(let i=1;i<strs.length;i++){
    while(strs[i].indexOf(prefix)!==0){
        prefix = prefix.slice(0,-1);
        if(!prefix) return '';
    }
}
return prefix;
};

//second method is vertical scanning
var longestCommonPrefix = function(strs){
    //cover base case
    if(strs.length === 0) return '';

    //other scenarios
    //vertical scanning method
    for(let i =0; i<strs[0].length;i++){
        const char = strs[0][i];
        for(let j=1;j<strs.length; j++){
            if(strs[j][i] !== char){
                return strs[0].slice(0,i)
            }
        }
    }
    return strs[0]
}

//third method is sort and compare first and last
var longestCommonPrefix = function(strs){
    //cover base scenario
    if(strs.length === 0) return strs;

    strs = strs.sort();
    //console.log(strs, newStrs);
    let first  = strs[0];
    let last  = strs[strs.length-1];
   // console.log(first,last);
    let i =0;
    while(i<first.length && first[i] === last[i] ){
        i++;
    }
    return first.slice(0,i)

}

//fourth method we are going to see using reduce
var longestCommonPrefix = function(strs){
   //cover base condition
   if(strs.length===0) return ''
   //covering other scenarios
   return strs.reduce((prefix,str)=>{
    while(str.indexOf(prefix)!==0){
        prefix = prefix.slice(0,-1)
    }
    return prefix
   },strs[0])
}

var longestCommonPrefix = function(strs){
   //cover base case scenario
   if(strs.length === 0) return '';

   //other scenarios
   //the boundaries for min and max
   let low = 1;
   let minLength = Math.min(...strs.map(item=> item.length));
   console.log(minLength)
    let high = minLength;
    while(low<= high){
        //find the median point
        let mid = Math.floor((low+high)/2);
        let prefix = strs[0].slice(0, mid);
        if(strs.every(str => str.startsWith(prefix))){
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return strs[0].slice(0, (low+high)/2)
}
console.log(longestCommonPrefix(strs))