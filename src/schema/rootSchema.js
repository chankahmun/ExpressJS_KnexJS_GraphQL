const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const {  _sRespondMerchantStatus, _sRespondCommonStatus, _sRespondUpdateActiveStatus, } = require('./schemas');
const { _argMerchantDetail, _argMerchantId, _argUpdateMerchant, _argListMerchantsIds, _argSetPaging } = require('./arguments');
const { _descRootQuery, 
    _decsRootMutation, 
    _desc_mtCreateMerchant,
    _desc_mtUpdateMerchant,
    _desc_mtUpdateIsActiveInBulk,
    _desc_qrMerchantById,
    _desc_qrMerchants } = require('../constants/description');
const _resGetAllMerchants = require('../resolvers/resGetAllMerchants');
const _resGetMerchantsById = require('../resolvers/resGetMerchantsById');
const _resInsertMerchant = require('../resolvers/resInsertMerchant');
const _resUpdateMerchant = require('../resolvers/resUpdateMerchant');
const _resUpdateActiveInBulk = require('../resolvers/resUpdateActiveInBulk');

// query root 
/**
 *  _qrMerchants : Fetch merchants, with pagination and sorting
 *  _qrMerchantById : Fetch merchant by ID
 * 
 */
const _rQuery = new GraphQLObjectType({
    name: _descRootQuery.name,
    description: _descRootQuery.desc,

    fields: () =>({
        _qrMerchants: {
            description: _desc_qrMerchants,
            type: _sRespondMerchantStatus,
            args: _argSetPaging,
            resolve: _resGetAllMerchants
        },
        _qrMerchantById: {
            description: _desc_qrMerchantById,
            type: _sRespondMerchantStatus,
            args: _argMerchantId,
            resolve:_resGetMerchantsById
        }
        
    })
})

// mutation root
/**
 *  _mtCreateMerchant : Create new merchant
 *  _mtUpdateMerchant : Update a merchant
 *  _mtUpdateIsActiveInBulk : Toggle “Is Active” in bulk
 * 
 */
const _rMutation = new GraphQLObjectType({
    name: _decsRootMutation.name,
    description: _decsRootMutation.desc,

    fields: () =>({
        _mtCreateMerchant:{
            description: _desc_mtCreateMerchant,
            type: _sRespondCommonStatus,
            args: _argMerchantDetail,
            resolve: _resInsertMerchant
        },
        _mtUpdateMerchant:{
            description: _desc_mtUpdateMerchant,
            type: _sRespondCommonStatus,
            args: _argUpdateMerchant,
            resolve: _resUpdateMerchant
        },
        _mtUpdateIsActiveInBulk:{
            description: _desc_mtUpdateIsActiveInBulk,
            type:_sRespondUpdateActiveStatus,
            args:_argListMerchantsIds,
            resolve: _resUpdateActiveInBulk
        }
    })
})

module.exports = new GraphQLSchema({ query: _rQuery, mutation: _rMutation });

