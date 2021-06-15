function Pad(props) {
    return (
        <div className="Pad">
            <button className="cyan" onClick={props.AC}>AC</button>
            <button className="cyan" onClick={props.DEL}>DEL</button>
            
            <button value="%" onClick={props.handleNumbers} className="cyan">%</button>
            <button value="/" className="red" onClick={props.putInPrev}>÷</button>

            <button value="7" onClick={props.handleNumbers}>7</button>
            <button value="8" onClick={props.handleNumbers}>8</button>
            <button value="9" onClick={props.handleNumbers}>9</button>
            
            <button value="*" className="red" onClick={props.putInPrev}>x</button>

            <button value="4" onClick={props.handleNumbers}>4</button>
            <button value="5" onClick={props.handleNumbers}>5</button>
            <button value="6" onClick={props.handleNumbers}>6</button>

            <button value="-" className="red" onClick={props.putInPrev}>_</button>

            <button value="1" onClick={props.handleNumbers}>1</button>
            <button value="2" onClick={props.handleNumbers}>2</button>
            <button value="3" onClick={props.handleNumbers}>3</button>

            <button value="+" className="red" onClick={props.putInPrev}>+</button>
            <button onClick={() => {document.getElementById('body').click()}} >⟳</button>

            <button value="0" onClick={props.handleNumbers}>0</button>
            <button value="." onClick={props.handleNumbers}>.</button>
            <button className="red" onClick={props.equal}>=</button>
        </div>
    )
}

export default Pad
