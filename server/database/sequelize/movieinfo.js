
const {connection} = require("./index")






module.exports = {

    getall:(callback)=>{
        const sql="SELECT * FROM movieinfo"
        connection.query(sql, function(error, result){
          callback(error,result)
        })
      },


    getone:(id,cb)=>{
    const sql = `select * from movieinfo where idmovieinfo= ?`
        connection.query(sql,id,function (err,result) {
            cb(err,result)
        })
       
      },

      add: function (post,cb) {
        const sql = "INSERT INTO `movieinfo` SET ?"
        connection.query(sql,post ,function (error, results) {
          cb(error, results);
        });
      },

      deletem:function (id,cb) {
        const sql = "DELETE from `movieinfo` where idmovieinfo=?"
        connection.query(sql,id,function(err,res){
          cb(err,res)
        })
      },

      updatem:function (val,id,cb) {
        const sql = "UPDATE movieinfo set ? where `idmovieinfo`=?"
        connection.query(sql,[val,id],function(err,res){
          cb(err,res)
        })
      }


}