const _descRootQuery = {
    name: 'query',
    desc: 'read or fetch the values'
}

const _decsRootMutation = {
    name: 'mutation',
    desc: 'modify server-side data'
}

const _descRespondMesage = {
    name: 'respMessage',
    desc: 'give a status and error message if there is any'
}

const _decsRespondMerchant = {
    name: 'respMerchant',
    desc: 'give merchants detail'
}

const _descRespondResultStatus = {
    name: 'respRespondResultStatus',
    desc: 'give a list of updating the toggle of active/inactive status '
}

const _descToggleResultStatus = {
    name: 'respToggleResultStatus',
    desc: 'give a status of a active/inactive status'
}

const _descQueryerchantStatus = {
    name: 'respQueryerchantStatus',
    desc: 'give a status of querying merchant'
}

const _desc_mtCreateMerchant = 'Create new merchant';

const _desc_mtUpdateMerchant = 'Update a merchant';

const _desc_mtUpdateIsActiveInBulk = 'Toggle “Is Active” in bulk';

const _desc_qrMerchantById = 'Fetch merchant by ID';

const _desc_qrMerchants = 'Fetch merchants, with pagination and sorting';


module.exports = {
    _descRootQuery,
    _decsRootMutation,
    _descRespondMesage,
    _decsRespondMerchant,
    _descRespondResultStatus,
    _descToggleResultStatus,
    _descQueryerchantStatus,
    _desc_mtCreateMerchant,
    _desc_mtUpdateMerchant,
    _desc_mtUpdateIsActiveInBulk,
    _desc_qrMerchantById,
    _desc_qrMerchants
}