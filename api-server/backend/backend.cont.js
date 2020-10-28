const {User} = require('../db')


exports.countBackend = async(req,res,next)=>{
  try{
      const [partner_pending] = await Promise.all([
          User.count({where : { approve_status : 0,user_type : 'partner'}})
      ])
      res.json({partner_pending})
  }
  catch(err){
      next(err);
  }
}