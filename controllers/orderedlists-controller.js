var db = require('../db');
var orderedlistsModel = require('../models/orderedlist-model');
//main object
var orderedlistsController = {};


orderedlistsController.list = function(req,res){
    db.query("SELECT * FROM orderlist;",function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows);

    });
}

orderedlistsController.get = function(req,res){
    db.query("SELECT * FROM orderlist WHERE olid = ?;",req.params.id,function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows[0]);

    });
}

orderedlistsController.update = function(req,res){
    orderedlistsModel.clear();
    orderedlistsModel.parse(req.body);
    db.query("UPDATE orderlist SET userid=?, totalprice=?, ol_dttm=?, status = ? WHERE olid = ?;",[orderedlistsModel.userid,orderedlistsModel.totalprice,orderedlistsModel.ol_dttm,orderedlistsModel.status,orderedlistsModel.olid],
    function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows);

    });
}

orderedlistsController.add = function(req,res){
    orderedlistsModel.clear();
    orderedlistsModel.parse(req.body);
    db.query("INSERT INTO orderlist  VALUES(?,?,?,?,?);",[null,orderedlistsModel.userid,orderedlistsModel.totalprice,orderedlistsModel.ol_dttm,orderedlistsModel.status],
    function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        orderedlistsModel.clear();
        orderedlistsModel.olid=rows.insertId;
        return res.json({"olid":orderedlistsModel.olid});
    });
}

orderedlistsController.delete = function(req,res){
    db.query("DELETE FROM orderlist WHERE olid = ?;",[req.params.id],
    function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows);

    });
}

module.exports = orderedlistsController;