import React, { useState } from 'react';

function Fibonacci() {




    const [fibonacci, setFibonacci] = useState([0, 1]);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '70px' }}>
            <button
                style={{ fontSize: '16px', padding: '10px' }}
                onClick={() => {
                    if (fibonacci.length > 2) {
                        setFibonacci(fibonacci.slice(0, -1));
                    }
                }}
            >
                Sub
            </button>
            <p style={{ margin: '0 10px', fontSize: '20px' }}>{fibonacci[fibonacci.length - 1]}</p>
            <button
                style={{ fontSize: '16px', padding: '10px' }}
                onClick={() => {
                    if (fibonacci[fibonacci.length - 1] < 21) {
                        setFibonacci([...fibonacci, fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]]);
                        console.log(fibonacci[fibonacci.length - 1]);
                    }
                }}
            >
                Add
            </button>
        </div>
    );







    //     const [fibonacci, setFibonacci] = useState([0, 1]);

    //     const handleAdd = () => {
    //         const nextFibonacci = [...fibonacci, fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]];
    //         setFibonacci(nextFibonacci);
    //     }

    //     const handleSubtract = () => {
    //         if (fibonacci.length > 2) {
    //             const nextFibonacci = fibonacci.slice(0, -1);
    //             setFibonacci(nextFibonacci);
    //         }
    //     };

    //     return (
    //         <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px', justifyContent: 'center', marginTop: '70px' }}>
    //             <button style={{ fontSize: '20px', padding: '10px' }} onClick={handleSubtract}>-</button>
    //             <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>value : {fibonacci[fibonacci.length - 1]}</p>
    //             <button style={{ fontSize: '20px', padding: '10px' }} onClick={handleAdd}>+</button>
    //         </div>
    //     );





}

export default Fibonacci;