const {getusers,getoneuser,adduser,deleteuser,updateuser} = require("../database/sequelize/user")


module.exports={


    getallusers: function(req, res) {
        getusers(function(err, results) {
            if(err) res.status(500).send(err);
            else res.send(results)
        })
    },

    getonesers:function (req,res) {
        const id = req.params.id
        getoneuser(id,function (err,result) {
            if(err) res.status(500).send(err);
            else res.send(result)
        })
    },


    addusers:function (req,res) {
        const post = req.body
        adduser(post,function (err,result) {
            if(err) res.status(500).send(err);
            else res.send(result)
        })
    },

    deleteusers:function (req,res) {
        const id= req.params.id
        deleteuser(id,function (err,result) {
            if(err) res.status(500).send(err);
            else res.send(result)
        })
    },

    updateusers:function (req,res) {
        const id = req.params.id
        const val=req.body
        updateuser(val,id,function (err,result) {
            if(err) res.status(500).send(err);
            else res.send(result)
        })
    }


}