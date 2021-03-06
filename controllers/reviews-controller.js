
var db = require('../db');
var reviewModel = require('../models/review-model');
//main object
var reviewController = {};

reviewController.list = function(req,res){
    db.query("SELECT * FROM review;",function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows);

    });
}

reviewController.get = function(req,res){
    db.query("SELECT * FROM review WHERE revid = ?;",req.params.id,function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows[0]);

    });
}

reviewController.update = function(req,res){
    reviewModel.clear();
    reviewModel.parse(req.body);
    db.query("UPDATE review SET userid=?, rlid=?, stars=?, comment = ? WHERE revid = ?;",[reviewModel.userid,reviewModel.rlid,reviewModel.stars,reviewModel.comment,reviewModel.revid],
    function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows);

    });
}

reviewController.add = function(req,res){
    reviewModel.clear();
    reviewModel.parse(req.body);
    db.query("INSERT INTO review VALUES(?,?,?,?,?);",[null,reviewModel.userid,reviewModel.rlid,reviewModel.stars,reviewModel.comment],
    function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        reviewModel.clear();
        reviewModel.revid=rows.insertId;
        return res.json({"revid":reviewModel.revid});
    });
}

reviewController.delete = function(req,res){
    db.query("DELETE FROM review WHERE revid = ?",[req.params.id],
    function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows);

    });
}



module.exports = reviewController;
