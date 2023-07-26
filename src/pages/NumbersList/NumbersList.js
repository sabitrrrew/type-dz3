import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, clearList } from './actions/action';

const NumbersList = () => {
    const [inputValue, setInputValue] = useState('');
    const numbers = useSelector(state => state.numbers);
    const dispatch = useDispatch();

    const handleAddNumber = () => {
        const number = parseInt(inputValue, 10);
        if (!isNaN(number)) {
            dispatch(addNumber(number));
        }
        setInputValue('');
    };

    const handleClearList = () => {
        dispatch(clearList());
    };

    return (
        <div>
            <input
                type="number"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={handleAddNumber}>Add</button>
            <button onClick={handleClearList}>Clear</button>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <div>Sum: {numbers.reduce((acc, curr) => acc + curr, 0)}</div>
        </div>
    );
};

export default NumbersList;