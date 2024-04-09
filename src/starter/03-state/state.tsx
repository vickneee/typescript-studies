import { useState } from 'react';

type Link = {
    id: number;
    url: string;
    text: string;
};

const navLinks: Link[] = [
    {
        id: 1,
        url: 'https://reactjs.org',
        text: 'react docs',
    },
    {
        id: 2,
        url: 'https://reactrouter.com',
        text: 'react router docs',
    },
    {
        id: 3,
        url: 'https://reacttraining.com',
        // remove text property to see the error
        text: 'react training',
    },
];

function Component() {
    // const [text, setText] = useState('shakeAndBake');
    // const [number, setNumber] = useState(1);
    // const [list, setList] = useState<string[]>([]);
    const [links, setLinks] = useState<Link[]>(navLinks);
    return (
        <div>
            <h2 className='mb-1'>hello from typescript</h2>
            <button
                className='btn btn-center'
                onClick={() => {
                    // setText(1);
                    // setNumber('hello');
                    // setList([1, 3]);
                    // setList(['Hello', 'World']);
                    // setLinks([...links, { id: 4, url: 'hello', someValue: 'hello' }])
                    setLinks([...links, { id: 4, url: 'hello', text: 'hello' }]);
                }}
            >
                click me
            </button>
            {/*<h3 className='mb-1'>number: {number}</h3>*/}
            {/*<h3 className='mb-1'>text: {text}</h3>*/}
            {/*<ul>*/}
            {/*    <h3 className='mb-1'>list items: </h3>*/}
            {/*    {list.map((item, index) => (*/}
            {/*        <li key={index}>{item}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    );
}
export default Component;
