import {useState} from 'react'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton';
import './Counter.css'

export default function Counter(){
    const [count, setCounter] = useState(0);

    function incrementCounterParentFunction(by){

        setCounter(count + by)
    }

    function resetCounterParentFunction(){
        setCounter(0)
    }
    
    return(
        <>        
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction}/>
            <ResetButton resetMethod={resetCounterParentFunction}/>
        </>
    )    
}