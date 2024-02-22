import React from 'react';

// function Greet() {
//     return <h1>Hello Akash</h1>
// }

// export const Greet = () => <h1>Greetings from Functional Component</h1>

// export const Greet = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
//             {props.children}
//         </div>
//     );
// }


// Destructuring Props to extract name & heroName
// export const Greet = ({name, heroName}) => <div><h1>Hello {name} a.k.a. {heroName}</h1></div>;

// Destructure Props explicitely into name & heroName
export const Greet = (props) => {
    const {name, heroName} = props;
    return (
        <div>
            <h1>Greetings {name} a.k.a. {heroName}</h1>
        </div>
    )
};

export default Greet;