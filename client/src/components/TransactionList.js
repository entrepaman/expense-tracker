import React, { useContext, useEffect } from 'react';

import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
    const { transactions, getTransaction } = useContext(GlobalContext);

    useEffect(() => {
        getTransaction();
        // eslint-disable-next-line
    }, []);
    
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map((tran) => <Transaction key={tran._id} transaction={tran} />)
                }
            </ul>
        </>
    )
}
