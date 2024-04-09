import React, { useState } from 'react';

type Person = {
    name: string;
};

function Component() {
    const [text1, setText1] = useState('');
    const [email1, setEmail1] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setEmail1(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const formData = new FormData(e.currentTarget);
        const formData = new FormData(e.target as HTMLFormElement);
        //const data = Object.fromEntries(formData);
        // console.log(data);
        const text = formData.get('text') as string;
        const person: Person = { name: text };
        console.log(person);
    };

    return (
        <section>
            <h2>events example</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    className='form-input mb-1'
                    type='text'
                    name='text'
                    value={text1}
                    onChange={(e) => setText1(e.target.value)}
                />

                <input
                    type='email'
                    className='form-input mb-1'
                    value={email1}
                    onChange={handleChange}
                    name='email'
                />
                <button type='submit' className='btn btn-block'>
                    Submit
                </button>
            </form>
        </section>
    );
}
export default Component;
