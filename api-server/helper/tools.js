const fs = require('fs')
const DB = require('../db')
const { Op } = require('sequelize');
const base_domain = process.env.HOST


module.exports = {

    genUserId : async (type,company_name) => {
        var start_agent = 'AGTHX001'
        var start_hotel = 'HTTHX001'
        var start_fit = 'FIT00001'

        if(type === 'agent' || type === 'hotel'){
            const company_type = await DB.CompanyType.findOne({where : {id : type },attributes : ['prefix'],raw:true})
            var first_prefix =  company_type.prefix
            var prefix = first_prefix + company_type.substring(0,1)
            var max = await DB.User.max('id', {where : {id : {[Op.startsWith] :first_prefix } },logging:console.log})
            if(!max) return prefix+'001'

            max = max.toString()
            // let prefix = max.substring(0,4)
            let num = parseInt(max.substring(5)) +1

            return prefix+num.toString().padStart(3,'0')
            
        }
        else{
            var max = await DB.User.max('id',{where : {user_type : type }})
            if(!max) return start_fit
            
            max = max+''
            let prefix = max.substring(0,3)
            let num = parseInt(max.substring(3)) + 1

            return prefix+num.toString().padStart(5,'0')
        }
    },

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
    genFileUrl : (fileName,path)=>{
        return fileName ? `/storage/${path}/${fileName}` : null
    },
}