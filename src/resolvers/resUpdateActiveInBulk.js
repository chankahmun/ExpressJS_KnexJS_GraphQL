const db = require('../db/db');
const { _respRstMsg, _respUpdateActiveMsg } = require('../schema/respMsg');

const _resUpdateActiveInBulk = async(parent, args) =>{
    let resp_msg = new _respRstMsg(), lst_msg = new _respUpdateActiveMsg();
    let status =  false, errmsg = "", list = [];
    
    try{

        for(let cnt = 0; cnt < args.ids.length; cnt++){

            let id = args.ids[cnt];
            let udpstatus = false;
            let res = await db('tbl_merchants').select('is_active').where('id', id).then((result)=>result);

            if(res.length > 0){
                let active = res[0]['is_active'];
                udpstatus = await db('tbl_merchants')
                            .where({id: id})
                            .update({is_active: !active})
                            .then((result)=>result > 0 ? true : false);
            }

            list.push(lst_msg.response_message(udpstatus, id));

        }

        status = true;

    }catch(err){
        errmsg = err.message;
    }   

    return resp_msg.response_message(status, errmsg, list);
}

module.exports = _resUpdateActiveInBulk;
