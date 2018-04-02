
var itemModel ={};

itemModel.itemid;
itemModel.supid;
itemModel.name;
itemModel.description;
itemModel.qty;
itemModel.url;
itemModel.price;
itemModel.type;

itemModel.parse = function(body){
    itemModel.itemid=body.itemid;
    itemModel.supid=body.supid;
    itemModel.name=body.name;
    itemModel.description=body.description;
    itemModel.qty=body.qty;
    itemModel.url=body.url;
    itemModel.price=body.price;
    itemModel.type=body.type;
}


itemModel.clear = function(){
    itemModel.itemid=null;
    itemModel.firstName=null;
    itemModel.lastName=null;
    itemModel.email=null; 
    itemModel.password=null;
    itemModel.credit=null;
}

module.exports = itemModel;
