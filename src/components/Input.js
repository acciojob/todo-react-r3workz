import React, { useState } from "react";

const input = (props) => {
    const [input, setInput] = useState("");

    const addItems = () => {
        props.setItems([...props.items, input]);
        setInput("");
    };
    return (
        <div>
            <input
                type="text"
                name="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => addItems()}>Add TODO</button>
        </div>
    );
};

export default input;
