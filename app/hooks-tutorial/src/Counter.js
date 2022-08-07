import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT': return { value: state.value + 1 };
        case 'DECREMENT': return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    const [cs, ccs] = useReducer(reducer, { value: 0 });
    return (
        <div style={{ padding: '30px' }}>
            <h1>Count : {cs.value}</h1>
            <button onClick={() => ccs({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => ccs({ type: 'DECREMENT' })}>-1</button>
        </div>
    )
}
export default Counter;