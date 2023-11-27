// import React, { useState } from 'react'

// function State() {
//     const [addition, setAddition] = useState(1)

//     function additionHandler() {
//         setAddition(addition + 1)
//     }

//     return (
//         <div>
//             <h1>Addition Values :{addition}</h1>
//             <button onClick={() => { setAddition(addition * 10) }}>+</button>
//         </div>
//     )
// }

// export default State













// import React, { useState } from 'react';

// function Example() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(prevCount => prevCount + 1);
//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={handleClick}>
//         Click me
//       </button>
//     </div>
//   );
// }
// export default Example;














// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Counter;














import React, { useState } from 'react';

function CounterRow() {
    // State to store the current value
    const [value, setValue] = useState(0);

    // Function to addition of the value
    const handleAdd = () => {
        setValue(value + 1);
    }
    // Function to subtraction of the value
    const handleSubtract = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px', justifyContent: 'center', marginTop: '70px' }}>
            <button style={{ fontSize: '20px', padding: '10px' }} onClick={handleSubtract}>-</button>
            <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>value : {value}</p>
            <button style={{ fontSize: '20px', padding: '10px' }} onClick={handleAdd}>+</button>
        </div>
    );
}

export default CounterRow;