const db = require('../db/db');
const { _respQueryMerchantMsg, _respMerchantMsg } = require('../schema/respMsg');

const _resGetAllMerchants = async(parent, args) => {
    let resp_msg = new _respQueryMerchantMsg(), lst_msg = new _respMerchantMsg();
    let status = false, errmsg = '', size = 10, page = 0, list = [],
        offset = 0, data_size = 0, max_page = 0, max_size = 0;

    try{

        if(typeof args.payload_size != 'undefined' && args.payload_size != 0)
            size = args.payload_size
        
        if(typeof args.page_no != 'undefined')
            page = args.page_no

        offset = size * page

        list = await db('tbl_merchants')
                .select('*')
                .limit(size)
                .offset(offset)
                .orderBy('id', 'asc')
                .then((merchants)=>{
                    return merchants.map((merchant)=> 
                        lst_msg.response_message(
                            merchant.id, 
                            merchant.merchant_name, 
                            merchant.phone_no, 
                            merchant.latitude, 
                            merchant.longtitude, 
                            merchant.is_active, 
                            merchant.recorded_datetime.toString()
                        )
                    )
                });

        data_size = list.length;

        max_size = await db('tbl_merchants').count('*').first().then((result)=>result.count);
        
        max_page = Math.ceil(max_size/size) - 1;

        status = true;

    }catch(err){
        errmsg = err.message;
    }

    return resp_msg.response_message(status, errmsg, list, data_size, max_page);
}

module.exports = _resGetAllMerchants;