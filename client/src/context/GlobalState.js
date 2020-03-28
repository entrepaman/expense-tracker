import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    const addTransaction = ({ text, amount }) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                text,
                amount
            }
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}