const fs = require('fs')
const DB = require('../db')
const { Op ,QueryTypes} = require('sequelize');
const base_domain = process.env.HOST


module.exports = {
    pad : (num,size) => num.toString().padStart(size,'0'),

    genUserId : async (type,company_name) => {
        var start_agent = 'AGTHX001'
        var start_hotel = 'HTTHX001'
        var start_fit = 'FIT00001'

        const now = new Date();
        const date_prefix = `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2,'0') }`

        if(type !== 'fit'){
            const company_type = await DB.CompanyType.findOne({where : {id : type },attributes : ['prefix'],raw:true})
            const comp_prefix =  company_type.prefix
            const prefix = comp_prefix + 'TH' + company_name.trim().substring(0,1) + date_prefix
            const max_result = await DB.sequelize.query(`SELECT MAX(SUBSTRING(id,-3,3) ) as max_id from users where id like '${comp_prefix}%' `, { type: QueryTypes.SELECT });
            var max;
            if(!max_result[0] ) max = '000'
            else max = max_result[0].max_id || '000'
            // var max = await DB.User.max('id', {where : {id : {[Op.startsWith] :first_prefix } },logging:console.log})
            // if(!max) return prefix+'001'

            max = max.toString()
            // let prefix = max.substring(0,4)
            let num = parseInt(max) +1

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