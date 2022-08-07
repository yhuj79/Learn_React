import { useState } from "react";

const Say = () => {
    const [text, setText] = useState("");
    const set1 = () => setText("this is set1.");
    const set2 = () => setText("this is set2.");

    const [color, setColor] = useState("");
    return (
        <div style={{ padding: '30px' }}>
            <button onClick={set1}>SET 1</button><button onClick={set2}>SET 2</button>
            <h1 style={{ color }}>{text}</h1>

            <button onClick={() => setColor("green")}>GREEN</button>
            <button onClick={() => setColor("blue")}>BLUE</button>
            <br />
            <button onClick={() => setColor("")}>Color Reset</button>
        </div>
    )
}
export default Say;