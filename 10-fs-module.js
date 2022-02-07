const {readFileSync,writeFileSync, readFile} =require('fs');
//const fd=require('fs');
//same

const first =readFileSync('./content/first.txt','utf8');
const second= readFileSync('./content/second.txt','utf8');

//console.log(first,second);
writeFileSync('./content/result-sync.txt',`here is the result : ${first},{second}`,{flag: 'a'});

readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
console.log(result)
    
})