import React, { createContext, useReducer } from "react";
import axios from "axios";

import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getTransaction = async () => {
        try {
            const response = await axios.get("/api/v1/transactions");
            
            dispatch({
                type: "FETCH_TRANSACTION",
                payload: response.data.data
            });
        } catch (err) {
            
        }
    }

    const deleteTransaction = async (id) => {
        await axios.delete(`/api/v1/transactions/${id}`);

        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    const addTransaction = async ({ text, amount }) => {
        const config = {
            headers: {
                "Content-Type": "Application/JSON"
            }
        }

        try {
            const response = await axios.post("/api/v1/transactions", { text, amount }, config);

            dispatch({
                type: "ADD_TRANSACTION",
                payload: {
                    id: response.data.data._id,
                    text,
                    amount
                }
            });
        } catch (err) {
            
        }
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            getTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}