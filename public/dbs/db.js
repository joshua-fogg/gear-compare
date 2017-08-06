module.exports = {
    getMasks,
    getFins,
    getTableData
}

function getTableData(table, connection) {
    return connection(table).select()
}

function getMasks(connection) {
    return connection('masks').select()
}

function getFins(connection) {
    return connection('fins').where('id', id)
}