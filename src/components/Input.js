import React, { useState } from "react";

const input = (props) => {
    const [input, setInput] = useState("");

    const addItems = () => {
        if(input.length>0){
            props.setItems([...props.items, input]);
            setInput("");
        }
    };
    return (
        <div className="input-container">
            <input
                type="text"
                name="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => addItems()}>Add Todo</button>
        </div>
    );
};

export default input;
