//create a module to be used in different apps approach 1
/*var counter=function(arr){
 return ("This array has "+arr.length+ " elements");
};
var adder=function(a,b){
 return `The result of sum is ${a+b}`;
};
module.exports.count =counter;
module.exports.add =adder;
*/
//create a module to be used in different apps approach 2
module.exports.count=function(arr){
 return ("This array has "+arr.length+ " elements");
};
module.exports.add=function(a,b){
 return `The result of sum is ${a+b}`;
};


//create a module to be used in different apps approach 3
/*var sub=function(a,b){
 return `The result of sub is ${a-b}`;
};
var mul=function(a,b){
 return `The result of sub is ${a*b}`;
};
module.exports={
  sub:sub,
  mul: mul
};
*/
