class _respCommonMsg {
    constructor(){
        this.status = false;
        this.error_message = '';
    }

    response_message = (status, error_message) => {
        this.status = status;
        this.error_message = error_message;

        return {
            'status' : this.status,
            'err_message' : this.error_message
        }
    }
}

class _respRstMsg {
    constructor(){
        this.status = false;
        this.error_message = '';
        this.list = []
    }

    response_message = (status, error_message, list) => {
        this.status = status;
        this.error_message = error_message;
        this.list = list;
      
        return {
            'status' : this.status,
            'err_message' : this.error_message,
            'list': this.list
        }
    }
}

class _respUpdateActiveMsg{
    constructor(){
        this.status = false;
        this.id = ''
    }

    response_message = (status, id) => {
        this.status = status;
        this.id = id;
      
        return {
            'status' : this.status,
            'id' : this.id
        }
    }
}

class _respMerchantMsg{
    constructor(){
        this.id = 0;
        this.merchant_name = '';
        this.phone_no = '';
        this.latitude = 0.0;
        this.longitude = 0.0;
        this.is_active = false;
        this.recorded_datetime = '';
    }

    response_message = (id, merchant_name, phone_no, latitude, longitude, is_active, recorded_datetime) =>{
        this.id = id;
        this.merchant_name = merchant_name;
        this.phone_no = phone_no;
        this.latitude = latitude;
        this.longitude = longitude;
        this.is_active = is_active;
        this.recorded_datetime = recorded_datetime;

        return {
            'id': this.id,
            'merchant_name': this.merchant_name,
            'phone_no': this.phone_no,
            'latitude': this.latitude,
            'longitude': this.longitude,
            'is_active': this.is_active,
            'recorded_datetime': this.recorded_datetime
        }
    }
}

class _respQueryMerchantMsg{
    constructor(){
        this.status = false;
        this.error_message = '';
        this.list = [];
        this.data_size = 0;
        this.max_page = 0;
    }

    response_message = (status, error_message, list, data_size, max_page) => {
        this.status = status;
        this.error_message = error_message;
        this.list = list;
        this.data_size = data_size;
        this.max_page = max_page;
      
        return {
            'status' : this.status,
            'err_message' : this.error_message,
            'list': this.list,
            'max_page': this.max_page,
            'data_size': this.data_size
        }
    }
}
module.exports = {
    _respCommonMsg,
    _respRstMsg,
    _respUpdateActiveMsg,
    _respMerchantMsg,
    _respQueryMerchantMsg
}