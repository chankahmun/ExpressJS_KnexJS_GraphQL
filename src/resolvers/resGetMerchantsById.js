const db = require('../db/db');
const { _respQueryMerchantMsg, _respMerchantMsg } = require('../schema/respMsg');

const _resGetMerchantsById = async(parent, args) => {
    let resp_msg = new _respQueryMerchantMsg(), lst_msg = new _respMerchantMsg();
    let errmsg = '', status = false, list = [], data_size = 0, max_page = 0;

    try{

        status = await db('tbl_merchants')
                .select('*')
                .where('id', args.id)
                .then((result)=>{

                    if(result.length > 0){
                        let merchant = result[0];
                        list.push(
                            lst_msg.response_message(
                                merchant.id,
                                merchant.merchant_name, 
                                merchant.phone_no, 
                                merchant.latitude, 
                                merchant.longtitude, 
                                merchant.is_active, 
                                merchant.recorded_datetime.toString()
                            )
                        );
                    }

                    return true;
                    
                });

        data_size = list.length;

    }catch(err){
        errmsg = err.message;
    }

    return resp_msg.response_message(status, errmsg, list, data_size, max_page);
}

module.exports = _resGetMerchantsById;