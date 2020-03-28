import React, { useContext } from 'react';

import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    let income = 0, expenses = 0;

    transactions.map((tran) => {
        if(tran.amount < 0) {
            expenses += Math.abs(tran.amount);
        } else {
            income += tran.amount;
        }

        return 0;
    });

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+ &#8377; { income }</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">- &#8377; { expenses }</p>
            </div>
        </div>
    )
}
