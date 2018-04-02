var orderlistModel = {};

orderlistModel.olid;
orderlistModel.userid;
orderlistModel.totalprice;
orderlistModel.ol_dttm;
orderlistModel.status;

orderlistModel.parse = function(body){
    orderlistModel.olid=body.olid;
    orderlistModel.userid=body.userid;
    orderlistModel.totalprice=body.totalprice;
    orderlistModel.ol_dttm=body.ol_dttm;
    orderlistModel.status=body.status;

}

orderlistModel.clear = function(){
    orderlistModel.olid = null;
    orderlistModel.userid = null;
    orderlistModel.totalprice=null;
    orderlistModel.ol_dttm=null;
    orderlistModel.status=null;
        
}

module.exports = orderlistModel;