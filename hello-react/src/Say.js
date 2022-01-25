import { useState } from "react";

const Say = () => {
    // IN , OUT Button
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('WelCome');
    const onClickLeave = () => setMessage('GoodBye');

    // Color Button
    const [color, setColor] = useState('');

    return (
        <div style={{ padding: '30px' }}>
            <button onClick={onClickEnter}>IN</button>
            <button onClick={onClickLeave}>OUT</button>
            <h1 style={{ color }}>{message}</h1>

            <button style={{ backgroundColor: 'red' }} onClick={() => setColor('red')}>RED</button>
            <button style={{ backgroundColor: 'orange' }} onClick={() => setColor('orange')}>RED</button>
            <button style={{ backgroundColor: 'yellow' }} onClick={() => setColor('yellow')}>RED</button>
        </div>
    );
}
export default Say;