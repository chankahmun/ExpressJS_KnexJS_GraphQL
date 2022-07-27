const db = require('../db/db');
const { _respCommonMsg } = require('../schema/respMsg');

const _resInsertMerchant = async(parent, args) => {
    let resp_msg = new _respCommonMsg();
    let status =  false, errmsg = '', active = false;

    try{

        if(typeof args.is_active != 'undefined')
            active = args.is_active;

        status = await db('tbl_merchants').insert({
                merchant_name: args.merchant_name,
                phone_no: args.phone_no,
                latitude: args.latitude,
                longtitude: args.longtitude,
                is_active: active,
                recorded_datetime: new Date().toISOString()

        }).then(function(result){

            if(result.rowCount > 0)
                return true;
            
            return false;
        })

    }catch(err){
        errmsg = err.message;
    }

    return resp_msg.response_message(status, errmsg);
}

module.exports = _resInsertMerchant;