const path =require('path');
console.log(path.sep);
//file path
const filepath =path.join('/content','subfolder','test.txt');
console.log(filepath);


//base file
const base=path.basename(filepath);
console.log(base);

//using __dirname
const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);