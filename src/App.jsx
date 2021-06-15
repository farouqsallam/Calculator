import {useState, useRef} from 'react'
import Screen from './components/Screen'
import Pad from './components/Pad'
function App() {
    // '' = light , Dark = Dark
    const [theme, setTheme] = useState('')
    const handleTheme = () => {
        if(theme === ''){
            setTheme('Dark')
        }else {
            setTheme('')
        }
    }

    let equalClicked = useRef(false);

    const [current, setCurrent] = useState('')
    const [prev, setPrev] = useState('')

    const handleNumbers = (e) => {
        if(equalClicked.current === true){
            equalClicked.current = false;
            setPrev('')
            setCurrent('')
        }
        const number = e.target.value
        setCurrent(c => c + number)

    }

    const AC = () => {
    setCurrent('') 
    setPrev('')
    }   

    const DEL = () => setCurrent(c => c.slice(0, -1))

    const putInPrev = (e) => {
        if(current !== ''){
            switch(e.target.value){
                case '+':
                    setCurrent('')
                    setPrev(`${current} +`)
                    break
                case '-':
                    setCurrent('')
                    setPrev(`${current} -`)
                    break
    
                case '*':
                    setCurrent('')
                    setPrev(`${current} X`)
                    break
    
                case '/':
                    setCurrent('')
                    setPrev(`${current} ÷`)
                    break
            }
        }else{
            return
        }

    }

    const equal = () => {

        try{
            let sign = prev.slice(-1)
            var prevN = parseFloat(prev) 
            var currentN = parseFloat(current)
         
            if(prev.slice(-3, -2) === '%'){
                 prevN = prevN / 100
            }else if(current.slice(-1) === '%'){
                 currentN = currentN / 100
            }
            
            let result;
                 switch(sign){
                     case '+':
                         result = prevN + currentN
                         break
                      case '-':
                          result = prevN - currentN
                          break
                      case 'X':
                          result = prevN * currentN
                          break
                      case '÷':
                          result = prevN / currentN
                          break
                  }
                  
                  setPrev(prev + ' ' +current)
                  setCurrent(result)
                  equalClicked.current = true

        }catch{
            console.log("ERROR")
        }     
       
   }   
    return (
        <div className={`App ${theme}`}>   
            <Screen current={current} prev={prev} handleTheme={handleTheme} theme={theme}/>
            <Pad handleNumbers={handleNumbers} AC={AC} DEL={DEL} putInPrev={putInPrev} equal={equal}/>
        </div>
    )
}


export default App
