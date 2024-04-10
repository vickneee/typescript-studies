type ComponentProps = {
    name: string;
    id: number;
}

function Component({name, id}: ComponentProps) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>ID: {id}</h2>
        </div>
    )
}

export default Component;