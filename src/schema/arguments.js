const { GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLFloat, GraphQLBoolean, GraphQLList  } = require('graphql')

/**
 * argument required for creating a record in postgres db
 * 
 *  id = merchant id 
 *  merchant_name = name of the merchant 
 *  phone_no = phone number of the merchant 
 *  latitude = merchant's position 
 *  longitude = merchant's position
 *  is_active = merchant's active status 
 * 
 */
const _argMerchantDetail = {
    merchant_name: { type: GraphQLNonNull(GraphQLString) },
    phone_no: { type: GraphQLNonNull(GraphQLString) },
    latitude: { type: GraphQLNonNull(GraphQLFloat) },
    longtitude: { type: GraphQLNonNull(GraphQLFloat) },
    is_active: { type: GraphQLBoolean },
}

/**
 * argument required for fetching a merchat detail
 * 
 * id = merchant id 
 * 
 */

const _argMerchantId = {
    id: {type: GraphQLNonNull(GraphQLInt)}
}

/**
 * 
 * argument required for updating a merchat detail
 * 
 *  id = merchant id 
 *  merchant_name = name of the merchant 
 *  phone_no = phone number of the merchant 
 *  latitude = merchant's position 
 *  longitude = merchant's position
 *  is_active = merchant's active status 
 * 
 */

const _argUpdateMerchant = {
    id: {type: GraphQLNonNull(GraphQLInt)},
    merchant_name: { type: GraphQLNonNull(GraphQLString) },
    phone_no: { type: GraphQLNonNull(GraphQLString) },
    latitude: { type: GraphQLNonNull(GraphQLFloat) },
    longtitude: { type: GraphQLNonNull(GraphQLFloat) },
    is_active: { type: GraphQLNonNull(GraphQLBoolean) },
}

/**
 *  argument required for updating a merchat detail
 *  
 *  ids = list of merchant id
 * 
 */

const _argListMerchantsIds = {
    ids: { type: GraphQLList(GraphQLInt)}
}

/**
 * argument required for setting paging
 * 
 * payload_size = size of the merchants
 * page_no = current page number 
 * 
 */

const _argSetPaging = {
    payload_size: { type: GraphQLInt},
    page_no: { type: GraphQLInt}
}


module.exports = {
    _argMerchantDetail,
    _argMerchantId,
    _argUpdateMerchant,
    _argListMerchantsIds,
    _argSetPaging
}