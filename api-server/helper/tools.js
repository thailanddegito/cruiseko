const fs = require('fs')

module.exports = {
    moveFileWithPath : (file,path)=>{
        return new Promise((resolve,reject)=>{
            const dir = __dirname + `/../../static-server/${path}/`;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir, { recursive: true });
            }
            var names = file.name.split('.')
            if(names.length < 2){
                console.log(file.name)
                reject(new Error('Invalid file extension'));
            }
            var fileName = `${Date.now()}.${names[names.length-1]}`;
            
            file.mv(dir + fileName  , function(err) {
                if(err){
                  reject(err);
                }else{
                  resolve(fileName);
              }
            })
        })
    },
}