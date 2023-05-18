export default function ResetButton({resetMethod}){

    function resetCounterFunction(){
        resetMethod()
    }

    return(
        <>
            <button className="resetButton" 
                            onClick={resetCounterFunction}
                    > Reset </button>
        </>
    )
}