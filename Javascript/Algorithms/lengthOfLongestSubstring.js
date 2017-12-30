var lengthOfLongestSubstring = function(s) {
    var map = {};
    var res = 0;    
    for(var i=0, j=0; i<s.length ; i++){
        var char = s[i];
        if(map[char] !== undefined){
            j = Math.max(map[char] , j);
            map = {}; // reset;
        }
        res = Math.max(res , i - j + 1);
        map[char] = i + 1;
    }
    return res;
};

console.log("Result::" + lengthOfLongestSubstring("abccdefa"));