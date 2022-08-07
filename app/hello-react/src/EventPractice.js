import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message } = form;
    const onChange = e => {
        setTimeout(() => console.log(e), 500);
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어씌우기
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div style={{ padding: '30px' }}>
            <h1>Event Practice</h1>
            <input
                type="text"
                name="username"
                placeholder="Input ID"
                value={username}
                onChange={onChange}
            /><br />
            <input
                type="text"
                name="message"
                placeholder="Input Text"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button style={{ marginLeft: '10px' }} onClick={onClick}>IN</button>
        </div>
    );
};
export default EventPractice;