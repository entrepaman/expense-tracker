import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const addTransactionHandler = (e) => {
        e.preventDefault();

        if(text !== "" && amount !== "" && amount !== 0) {
            addTransaction({ text, amount });
            setText("");
            setAmount(0);
        } else {
            alert("Both inputs are required");
        }
    }

    return (
        <>
            <h3>Add Transaction</h3>
            <form onSubmit={addTransactionHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        placeholder="Enter Text..."
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        value={amount}
                        placeholder="Enter amount..."
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
