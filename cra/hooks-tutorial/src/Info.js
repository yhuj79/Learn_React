import { useEffect, useState } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('SHOW INFO');
        return () => {
            console.log('HIDE INFO');
        }
    }, [])

    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeID = e => {
        setID(e.target.value);
    }
    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <div style={{ padding: '30px' }}>
            <h1>Input your Information</h1>
            <input placeholder="Name"
                value={name} onChange={onChangeName}
            />
            <input placeholder="ID"
                value={id} onChange={onChangeID}
            />
            <input placeholder="Passwd"
                value={password} onChange={onChangePassword}
            />
            <h2>이름 : {name}</h2>
            <h2>ID : {id}</h2>
            <h2>비밀번호 : {password}</h2>
        </div>
    )
}
export default Info;