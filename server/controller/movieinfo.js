const {getall,getone,add,deletem,updatem} = require("../database/sequelize/movieinfo")


module.exports={


    getmovies: function(req, res) {
        getall(function(err, results) {
            if(err) res.status(500).send(err);
            else res.send(results)
        })
    },

    getonemovie:function (req,res) {
        const id = req.params.id
        getone(id,function (err,result) {
            if(err) res.status(500).send(err);
            else res.send(result)
        })
    },


    addmovie:function (req,res) {
        const post = req.body
        add(post,function (err,result) {
            if(err) res.status(500).send(err);
            else res.send(result)
        })
    },

    deletemovie:function (req,res) {
        const id= req.params.id
        deletem(id,function (err,result) {
            if(err) res.status(500).send(err);
            else res.send(result)
        })
    },

    updatemovie:function (req,res) {
        const id = req.params.id
        const val=req.body
        updatem(val,id,function (err,result) {
            if(err) res.status(500).send(err);
            else res.send(result)
        })
    }


}

