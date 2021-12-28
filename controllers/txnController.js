//@route GET /api/v1/transactions
exports.getTransactions = (req, res, next) =>{
    res.send('GET transactions');
}

//@route POST /api/v1/transactions
exports.addTransaction = (req, res, next) =>{
    res.send('POST transactions');
}

//@route DELETE /api/v1/transactions/:id
exports.deleteTransaction = (req, res, next) =>{
    res.send('DELETE transaction');
}