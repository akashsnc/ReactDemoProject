import React from 'react';


const Hello = () => {
    // return(
    //     <div id='hello' className='jsxClass'>
    //         <h1>Hello from JSX</h1>
    //     </div>
    // );

    return React.createElement(
        'div', 
        {id: 'hello', className: 'elementClass'}, 
        React.createElement('h1', null, 'Hello from React Element')
    );
}

export default Hello;