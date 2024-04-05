export function sayHello(name: string): void {
    console.log(`Hello ${name}!`);
}

export const person = 'Susan';

export type Student = {
    name: string;
    age: number;
};

const newStudent: Student = {
    name: 'Peter',
    age: 24,
};

export default newStudent;