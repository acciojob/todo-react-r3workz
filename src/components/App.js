import React, { useState } from "react";
import "./../styles/App.css";

import Input from "./Input";

const App = () => {
    const [items, setItems] = useState([]);
    return (
        <div>
            {/* Do not remove the main div */}
            <h1>TO-DO List</h1>
            <Input items={items} setItems={setItems} />
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <h4>{item}</h4>
                            <button
                                onClick={() =>
                                    setItems(
                                        items.filter((_, i) => i !== index)
                                    )
                                }
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
