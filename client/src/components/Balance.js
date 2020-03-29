import React, { useContext } from 'react';

import { GlobalContext } from "../context/GlobalState";

import { numberWithCommas } from "../utils/format";

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    let balance = 0;

    transactions.map((tran) => {
        balance += tran.amount;
        
        return 0;
    });
    
    return (
        <>
            <h4>Balance</h4>
            <h1 id="balance">&#8377; { numberWithCommas(balance) }</h1>
        </>
    )
}
