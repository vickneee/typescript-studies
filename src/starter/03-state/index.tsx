import { useState } from 'react';

function Component() {
    const [text, setText] = useState('shakeAndBake');
    const [number, setNumber] = useState(1);
    const [list, setList] = useState<string[]>(['No Items']);

    return (
        <div>
            <h2 className="mb-1">React & TypeScript</h2>
            <button className="mb-1 btn btn-center"
                    onClick={() => {
                        setText("It's Working");
                        setNumber(9);
                        setList(['React', 'TypeScript', 'JavaScript']);
                    }}>Click Me</button>
            <h3 className="mb-1">Number: {number}</h3>
            <h3 className="mb-1">Text: {text}</h3>
            <ul>
                <h3 className="mb-1">List Items: </h3>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Component;
