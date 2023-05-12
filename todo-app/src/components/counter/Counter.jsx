import {useState} from 'react'
import './Counter.css'

export default function Counter(){

    const [count, setCounter] = useState(0);

    function incrementCounterFunction(){

        setCounter(count + 1)
    }

    
    function minusOneFunction(){

        setCounter(count - 1)
    }

    
    return(
        <div className="Counter">
            <span className="Count">{count}</span>
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}
                > +1 </button>
                <button className="counterButton" 
                        onClick={minusOneFunction}
                > -1 </button>
            </div>
        </div>
    )
}