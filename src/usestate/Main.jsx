import React, { useState } from 'react'
import datas from './data.json'; 

const Main = () => {
    const [count, setCount] = useState(0);
    console.log(count)

    const [data,] = useState(datas);
    console.log("data", data);

    const handleClickInc = () =>{
        setCount(count + 1);
    }

    const handleClickDec = () =>{
        setCount(count - 1);
    }
  return (
    <div>
        <h1>useState Example 01</h1>
        <p>Count: {count}</p>
        <button onClick={handleClickInc}>+</button>
        <button onClick={handleClickDec}>-</button>


        <div>
            <h2>Data from JSON</h2>
            {data.map((item, index) => (
                <div key={index}>
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                    <p>Email: {item.email}</p>
                    <hr />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Main