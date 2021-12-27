import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial state
const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: 330},
        {id: 3, text: 'Book', amount: -10},
        {id: 4, text: 'Camera', amount: 150}
    ]
}

// Create context
export const GlobalContext = createContext(initialState) 

//Provider Component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TXN',
            payload: id
        })
    }

    function addTransaction(txn){
        dispatch({
            type: 'ADD_TXN',
            payload: txn
        })
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}