import { useState, useEffect } from 'react'

const CountComponent = () => {
    const [count, setCount] = useState(1);
    const [countDos, setCountDos] = useState(10);
    //   useEffect(() => {
    //     console.log('Componente montado')
    //   }); 

    //   useEffect(() => {
    //     console.log('useEffect con array de dependencia vacia')
    //   }), []; 

    useEffect(() => {
        console.log('useEffect con dependencias')
    }, [count]);

    const handleAddCount = () => {
        // setCount(count + 1);
        setCountDos(countDos + 10);
    }

    const handleRemoveCount = () => {
        setCount(count - 1);
        // setCountDos(countDos - 10);
    }

    return (
        <div>
            <button onClick={handleAddCount}>+</button>
            <div>{count}</div>
            <div>{countDos}</div>
            <button onClick={handleRemoveCount}>-</button>
        </div>
    );
}

export default CountComponent