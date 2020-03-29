export default (state, action) => {
    switch (action.type) {
        case "FETCH_TRANSACTION":
            return {
                ...state,
                transactions: action.payload
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [{
                    _id: action.payload.id,
                    text: action.payload.text,
                    amount: parseInt(action.payload.amount)
                }, ...state.transactions]
            }
        default:
            return state;
    }
}