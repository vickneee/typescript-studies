console.log('It works!');

import newStudent, { sayHello, person, type Student } from './Actions';

sayHello('TypeScript');
console.log(person);
console.log(newStudent);

const anotherStudent: Student = {
    name: 'Bob',
    age: 23,
};

console.log(anotherStudent);

const Tutorial = () => {
    return (
        <div>
            <h1>React Tutorial</h1>
            <p>This is a React tutorial</p>
        </div>
    )
}

export default Tutorial;