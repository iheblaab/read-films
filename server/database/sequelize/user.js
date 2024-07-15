const {connection} = require("./index")


module.exports = {


    getusers:(callback)=>{
        const sql="SELECT * FROM users"
        connection.query(sql, function(error, result){
          callback(error,result)
        })
      },


    getoneuser:(idusers,cb)=>{
    const sql = `select * from users where idusers= ?`
        connection.query(sql,idusers,function (err,result) {
            cb(err,result)
        })
       
      },

      adduser: function (post,cb) {
        const sql = "INSERT INTO `users` SET ?"
        connection.query(sql,post ,function (error, results) {
          cb(error, results);
        });
      },

      deleteuser:function (idusers,cb) {
        const sql = "delete from `users` where idusers=?"
        connection.query(sql,idusers,function(err,res){
          cb(err,res)
        })
      },

      updateuser:function (val,id,cb) {
        const sql = "UPDATE `users` set ? where idusers=?"
        connection.query(sql,[val,id],function(err,res){
          cb(err,res)
        })
      }

}