const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLFloat, GraphQLBoolean, GraphQLInputObjectType } = require('graphql')
const { _descQueryerchantStatus, _descRespondMesage, _decsRespondMerchant, _descRespondResultStatus, _descToggleResultStatus } = require('../constants/description')


/**
 *  to return the status of each update
 * 
 *  id = merchant id 
 *  status = status of toggling the is_active 
 * 
 */
 const _sToggleResultStatus = new GraphQLObjectType({
    name: _descToggleResultStatus.name,
    description: _descToggleResultStatus.desc,
  
    fields: () => ({
       id: { type:GraphQLNonNull(GraphQLInt)},
       status: { type:GraphQLNonNull(GraphQLBoolean)}
    })
})

/**
 *  to return the merchant details
 * 
 *  id = merchant id 
 *  merchant_name = name of the merchant 
 *  phone_no = phone number of the merchant 
 *  latitude = merchant's position 
 *  longitude = merchant's position
 *  is_active = merchant's active status 
 *  recorded_datetime = date time of the merchant detail creation
 * 
 */

const _sMerchant = new GraphQLObjectType({
    name: _decsRespondMerchant.name,
    description: _descRespondMesage.desc,

    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        merchant_name: { type: GraphQLNonNull(GraphQLString) },
        phone_no: { type: GraphQLNonNull(GraphQLString) },
        latitude: { type: GraphQLNonNull(GraphQLFloat) },
        longitude: { type: GraphQLNonNull(GraphQLFloat) },
        is_active: { type: GraphQLNonNull(GraphQLBoolean) },
        recorded_datetime: { type: GraphQLNonNull(GraphQLString) },
    })
})

/**
 *  to return GraphQL Status with list of merchants
 * 
 *  status = status of the GraphQL, true = success and false = fail
 *  err_message = error message if GraphQL failure is happening
 *  list = list of merchants 
 *  max_page = total of the pages 
 *  data_size = total merchants returns
 * 
 */

const _sRespondMerchantStatus = new GraphQLObjectType({
    name: _descQueryerchantStatus.name,
    description: _descQueryerchantStatus.desc,

    fields: () => ({
        status: { type:GraphQLNonNull(GraphQLBoolean)},
        err_message: { type:GraphQLNonNull(GraphQLString)},
        list: { type: GraphQLList(_sMerchant)},
        max_page: {type: GraphQLNonNull(GraphQLInt)},
        data_size: {type: GraphQLNonNull(GraphQLInt)}
    })
})

/**
 *  to return GraphQL Status
 * 
 *  status = status of the GraphQL, true = success and false = fail
 *  err_message = error message if GraphQL failure is happening
 * 
 */

const _sRespondCommonStatus = new GraphQLObjectType({
    name: _descRespondMesage.name,
    description: _descRespondMesage.desc,

    fields: () =>({
        status: { type:GraphQLNonNull(GraphQLBoolean)},
        err_message: {type:GraphQLString}
    })
})

/**
 *  to return GraphQL Status with list of toggle active status
 * 
 *  status = status of the GraphQL, true = success and false = fail
 *  err_message = error message if GraphQL failure is happening
 *  list = list of toggle active status
 * 
 */

const _sRespondUpdateActiveStatus = new GraphQLObjectType({
    name: _descRespondResultStatus.name,
    description: _descRespondResultStatus.desc,

    fields: () =>({
        status: { type:GraphQLNonNull(GraphQLBoolean)},
        err_message: { type:GraphQLNonNull(GraphQLString)},
        list: { type: GraphQLList(_sToggleResultStatus)}
    })
})

module.exports = {
    _sRespondCommonStatus,
    _sRespondUpdateActiveStatus,
    _sRespondMerchantStatus
}
