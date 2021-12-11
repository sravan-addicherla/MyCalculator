import React,{useState,useEffect} from 'react';
import * as math from 'mathjs';

function Calsi() {
    const [data,setData]=useState("");
    const [input,setInput]=useState("");
    const [operator,setOpeartor]=useState(true);
    
    const handleChange=(e)=>{
        if(e.target.className==="operators" && operator===false && data!=="") return;
        if(e.target.className==="operators"){
            setOpeartor(false);
        }else{
            setOpeartor(true);
        }
        setInput(prev=>prev+e.target.name);
    }


    useEffect(() => {
        if(operator===false)return;
        if(isNaN(Number(input.charAt(input.length-1)))){
            setData(math.evaluate(input.substring(0,input.length-1)));
        }else{
            setData(math.evaluate(input))
        }
      }, [input,operator]);


    const deleteIt=()=>{
        setInput(input.substring(0,input.length-1));
    }

    const clearIt=()=>{
        setInput("");
        setData("");
    }

    const signChange=()=>{
       
    }

    const result=()=>{
        setInput(data);
        setOpeartor(false);
        setData("");
    }
    
    
    return (
        <div className="work-box">
            <input type="text" id="data" value={input}/>
            {
                input===""
                ?<input type="text" id="data" value={input}/>
                : <input type="text" value={data} />
                
            }
            <button className="operators" id="clearClass" onClick={clearIt}>AC</button>
            <button className="operators" id="delId" onClick={deleteIt}>C</button>
            <button name="+/-" className="operators" onClick={signChange}>+/-</button>
            <button name="/" className="operators" onClick={handleChange}>/</button>
            <button name="7"onClick={handleChange}>7</button>
            <button name="8" onClick={handleChange}>8</button>
            <button name="9" onClick={handleChange}>9</button>
            <button name="*" className="operators" onClick={handleChange}>x</button>
            <button name="4" onClick={handleChange}>4</button>
            <button name="5" onClick={handleChange}>5</button>
            <button name="6" onClick={handleChange}>6</button>
            <button name="-" className="operators" onClick={handleChange}>-</button>
            <button name="1" onClick={handleChange}>1</button>
            <button name="2" onClick={handleChange}>2</button>
            <button name="3" onClick={handleChange}>3</button>
            <button name="+" className="operators" onClick={handleChange}>+</button>
            <button name="." className="operators" onClick={handleChange}>.</button>
            <button name="0" onClick={handleChange}>0</button>
            <button name="=" className="equals" onClick={result}>=</button>
        </div>
    )
}

export default Calsi
