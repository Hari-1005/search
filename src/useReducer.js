const initialState = {count : 0};

const counterReducer = (state,action) => {
    switch (action.type) {
        case "increase":
            return {count : state.count + 1}
        case "decrease":
            return {count : state.count - 1}
        case "increaseByAmount":
            return {count : state.count + action.payload}
        case "decreaseByAmount":
            return {count : state.count - action.payload}
    
        default:
            return state;
    }
}

export {initialState, counterReducer}