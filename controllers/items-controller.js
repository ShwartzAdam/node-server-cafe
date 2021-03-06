var db = require('../db');
var itemModel = require('../models/item-model');
//main object
var itemController = {};

//GET ALL
itemController.list = function(req, res){
    db.query("SELECT * FROM item;",function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows);
    });
}

//GET one by ID
itemController.get = function(req, res){
    db.query("SELECT * FROM item WHERE itemID = ?;",[req.params.id],function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows[0]);
    });
}

//POST
itemController.add = function(req, res){
    itemModel.clear();
    itemModel.parse(req.body);
    db.query("INSERT INTO item VALUES(?,?,?,?,?,?,?,?);",[null,itemModel.supid,itemModel.name,itemModel.description,itemModel.qty,itemModel.url,itemModel.price,itemModel.type],
    function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        itemModel.clear();
        itemModel.itemid=rows.insertId;
        return res.json({"itemid":itemModel.itemid});
    });
}

//PUT by ID - update the item
itemController.update = function(req, res){
    itemModel.clear();
    itemModel = req.body;
    db.query("UPDATE item SET supid = ?, name = ?, description = ?, qty = ?, url = ?, price = ?, type = ?  WHERE itemid = ?;",[itemModel.supid,itemModel.name,itemModel.description,itemModel.qty,itemModel.url,itemModel.price,itemModel.type,itemModel.itemid],
    function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows);
    });
}

//DELETE by ID
itemController.delete = function(req, res){
    db.query("DELETE FROM item WHERE itemid = ?;",[req.params.id],function(err,rows){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json(rows);
    });
}


module.exports = itemController;