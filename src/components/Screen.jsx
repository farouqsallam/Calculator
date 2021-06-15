function Screen(props) {
    const opt = props.prev.split(' ')[1]
    const num1 = props.prev.split(' ')[0]
    const num2 = props.prev.split(' ')[2]

    let sunSource;
    let moonSource;
    if(props.theme === ''){
        sunSource = '/sun.png'
        moonSource = '/moon-gray.png'
    }else if(props.theme === 'Dark'){
        sunSource = '/sun-gray.png'
        moonSource = '/moon.png'
    }
    
    
    return (
        <div className="Screen">
            <div className="theme">
                <div className="btn">
                    <a onClick={props.handleTheme}>
                        <img src={sunSource} alt="sun"/>
                        <img src={moonSource} alt="moon"/>
                    </a>
                </div>
            </div>
            <div className="board">
                <div className="prev">{num1} <span style={{color: '#f37b7b'}}>{opt}</span> {num2}</div>
                <div className="current">{props.current}</div>
            </div>
        </div>
    )
}

export default Screen
