export default (state, action) => {
    switch(action.type){

        case 'DELETE_TXN':
            return{
                ...state, 
                transactions: state.transactions.filter(txn => txn.id !== action.payload)
            }
        case 'ADD_TXN':
            return{
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default: 
            return state;
    }
}