export default (state, action) => {
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return{
                ...state,
                loading: false,
                transactions: action.payload
            }

        case 'DELETE_TXN':
            return{
                ...state, 
                transactions: state.transactions.filter(txn => txn._id !== action.payload)
            }
        case 'ADD_TXN':
            return{
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return{
                ...state,
                error: action.payload
            }
        
        default: 
            return state;
    }
}