var fs= require('fs');
var readFile=fs.readFileSync('fileOperation.txt','utf8');//read file and store in variable
console.log(readFile);
fs.writeFileSync('fileWrite.txt',readFile);//write file
//read and write file asynchronously
fs.readFile('fileOperation.txt','utf8',function(err,data){
  fs.writeFile('fileOperationAsyn.txt',data,function(err){
    if(err){
      console.log('Error occured');
    }
  });
});
