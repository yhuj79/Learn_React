import { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
        { id: 4, text: 'text4' }
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {     // concat : 새로운 배열 생성
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }
    const namesList = names.map(name => <li key={name.id}>{name.text}</li>)
    return (
        <>
            <input placeholder="ADD LIST!" value={inputText} onChange={onChange} />
            <button onClick={onClick}>ADD</button>
            <ul>{namesList}</ul>
        </>
    )
};
export default IterationSample;