var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

let result1 = dollarToEuro (137);
let result2 = euroToYen (dollarToEuro (137))




console.log (result2);