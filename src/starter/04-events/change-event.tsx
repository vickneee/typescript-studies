import React, {useState} from "react";


function Component() {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    return (
        <section>
            <h1>Events example</h1>
            <form className="form">
                <input type='text' placeholder="Write your text" className="form-input mb-1" value={text} onChange={(e) => setText(e.target.value)}/>
                <input type='email' placeholder="email@gmail.com" className='form-input mb-1' value={email} onChange={handleChange}/>
                <button type='submit' className='btn btn-block'>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Component;
