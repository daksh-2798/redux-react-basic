const initialState = {
    counter : 0,
    result : []
}

//Reducer
const reducer = (state = initialState,action) => {
    switch(action.type){ 
        case('INCREMENT'):
        return{
            ...state,
            counter : state.counter + 1
        }
    
        case('DECREMENT'):
        return{
            ...state,
            counter : state.counter - 1
        }
        case('ADD'):
        return{
            ...state,
            counter : state.counter + action.value
        }
    
        case('SUBTRACT'):
        return{
            ...state,
            counter : state.counter - action.value
        }

        case('STORE_RESULT'):
        return{
            ...state,
            result: state.result.concat({id: new Date(),value: state.counter})
        }
        // default:
        //     return{
        //         counter:state.counter
        //     }
    }
    return state;
}

export default reducer;