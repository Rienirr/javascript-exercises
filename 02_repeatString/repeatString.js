const repeatString = function(string, times) {
    let stringRepeated="";
    for(let i=0; i<times;i++){
stringRepeated+= string; 
    }
    if (times<0) return "ERROR";
    return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
