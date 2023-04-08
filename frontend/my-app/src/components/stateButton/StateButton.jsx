import { useState } from "react";

const StateButton = () => {  
    const [count, setCont] = useState(0)

    const handleClick = () => {  
        setCont(count + 1)
    };

    return ( <button onClick={handleClick}>Contador de Clicks: {count}</button>)

};

export default StateButton;