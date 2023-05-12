import {useState} from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'

export default function Counter(){
    const [count, setCounter] = useState(0);

    function incrementCounterParentFunction(by){

        setCounter(count + by)
    }
    return(
        <>        
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction}/>
        </>
    )
    
}


function CounterButton({by, incrementMethod}){
    const [count, setCounter] = useState(0);
    function incrementCounterFunction(){

        setCounter(count + by)
        incrementMethod(by)
    }

    
    function decrementCounterFunction(){

        setCounter(count - by)
        incrementMethod(-by)
    }

    
    return(
        <div className="Counter">
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}
                > +{by} </button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                > -{by} </button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}