import React, { useState } from 'react'
import './styles.css'

export default function Calculator() {
    const [expression , setExpression] = useState("")
    const [result,setResult] = useState("")
    const handleClick = (value) => {
        if(value === '=') {
            try{
                setResult(eval(expression))
                // setExpression(''); // if I dont want to see the expression 
            }catch(error){
                setResult('Error')
            }
        }else if(value === 'C') {
            setResult("")
            setExpression("")
        }else{
            setExpression((prevValue) => prevValue + value)
        }
    }
  return (
    <div className='calculator'>
        <div className='display'>
            <div className='result'>{result}</div>
            <div className='input-value'>{expression}</div>
        </div>
        <div className='buttons'>
            {[7,8,9,'/',4,5,6,'*',1,2,3,'-','C',0,'=','+'].map((value)=>(
                <button key={value} onClick={() => handleClick(value)} className='button'>{value}</button>
            ))}
        </div>
    </div>
  )
}
