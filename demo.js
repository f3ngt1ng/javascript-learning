function normalizer(arr){
var results = [];
results = arr.map(
function(v){
var result = [];
if (v[0].charCodeAt() >= 97){
result[0] = String.fromCharCode(v[0].charCodeAt() - 22);
}else{
result[0] = v[0];
} 
for ( var i = 1; i < v.length; i++){    
if (v[i].charCodeAt() >= 97){
        result[i] = v[i];
   }else {
        result[i] = String.fromCharCode(v[i].charCodeAt() + 22);
}
}
return result.join('');
}
);
return results;
}





// 1 * 10^2 + 2 * 10 ^ 1 + 3 * 10 ^ 0

function string2int(s){

var result = [];
var ori = [];
var r = 0,index = -1;
for (var i = 0; i < s.length; i++)
    ori.push(s[i]);
     
 result = ori.map(function(x){
          return x.charCodeAt()-48;
});
for (var j = 0; j < result.length; j++){
 
	r += result[j] * Math.pow(10, result.length -1 -j);
}

return r;

}


