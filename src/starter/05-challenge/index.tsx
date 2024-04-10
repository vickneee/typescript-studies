type BasicProfileCardProps = {
    type: 'basic';
    name: string;
};

type AdvancedProfileCardProps = {
    type: 'advanced';
    name: string;
    email: string;
};
type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;
function Component(props: ProfileCardProps) {
    const { type, name } = props;
    if (type === 'basic')
        return (
            <article className='alert alert-success'>
                <h2>user : {name}</h2>
            </article>
        );

    return (
        <article className='alert alert-danger'>
            <h2>user : {name}</h2>
            <h2>email : {props.email}</h2>
        </article>
    );
}
export default Component;

// import './App.css'
// import Component from './starter/05-challenge/index.tsx'
//
// function App() {
//
//     return (
//         <main>
//             <Component type='basic' name='Helle' />
//             <Component type='advanced' name='Helle' email='test@gmail.com' />
//
//         </main>
//     )
// }
//
// export default App;
