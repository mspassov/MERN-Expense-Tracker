const Transaction = require('../models/Transaction');

//@route GET /api/v1/transactions
exports.getTransactions = async (req, res, next) =>{
    try {
			const transactions = await Transaction.find();

			return res.status(200).json({
				success: true,
				count: transactions.length,
				data: transactions
			});
			
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: 'Server Error'
			})
		}
}

//@route POST /api/v1/transactions
exports.addTransaction = async (req, res, next) =>{
    try {
			const {text, amount } = req.body;
			const newTxn = await Transaction.create(req.body);

			return res.status(201).json({
				success: true,
				data: newTxn
			});

		} catch (error) {

			if(error.name === 'ValidationError'){
				return res.status(400).json({
					success: false,
					error: 'Validation error'
				})
			}
			else{
				return res.status(500).json({
					success: false,
					error: "Server Error"
				})
			}
		}

}

//@route DELETE /api/v1/transactions/:id
exports.deleteTransaction = async (req, res, next) =>{
    try {
			const toDelete = Transaction.findById(req.params.id);

			if(!toDelete){
				return res.status(404).json({
					success: false,
					error: 'No transaction found'
				})
			}

			await toDelete.remove();

			return res.status(200).json({
				success: true,
				data: {}
			})

		} catch (error) {
			return res.status(500).json({
					success: false,
					error: "Server Error"
				})
		}
}