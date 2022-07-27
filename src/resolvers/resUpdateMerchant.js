const db = require('../db/db');
const { _respCommonMsg } = require('../schema/respMsg');

const _resUpdateMerchant =  async(parent, args) => {
    let resp_msg = new _respCommonMsg();
    let status =  false, errmsg = '';

    try{

        status = await db('tbl_merchants')
                .where({ id: args.id})
                .update({
                    merchant_name: args.merchant_name,
                    phone_no: args.phone_no,
                    latitude: args.latitude,
                    longtitude: args.longtitude,
                    is_active: args.is_active, 
                }).then(function(result){

                    if(result > 0)
                        return true;
                    
                    return false;
                })

    }catch(err){
        errmsg = err.message;
    }

    return resp_msg.response_message(status, errmsg);
}

module.exports = _resUpdateMerchant;