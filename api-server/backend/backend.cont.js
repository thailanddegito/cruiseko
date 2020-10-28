const {User} = require('../db')


exports.countBackend = async(req,res,next)=>{
  try{
      const [pending] = await Promise.all([
          User.count({where : { approve_status : 0}})
      ])
      res.json({pending})
  }
  catch(err){
      next(err);
  }
}