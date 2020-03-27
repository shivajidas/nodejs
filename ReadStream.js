var fs =require('fs');
var myStream=fs.createReadStream(__dirname+'/fileOperation.txt','utf8');
myStream.on('data',function(chunk){
  console.log("Reading file stream")
  console.log(chunk);
});
