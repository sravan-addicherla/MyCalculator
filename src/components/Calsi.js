import React,{useState,useEffect} from 'react';

function Calsi() {
    const [data,setData]=useState("");
    const [input,setInput]=useState("");
    const [curState,setCurState]=useState("");
    const [prevState,setPrevState]=useState("");
    const [operator,setOpeartor]=useState(null);

    const handleChange=(e)=>{
        if(curState.includes(".") && e.target.name===".") return ;

        curState===""
        ?setCurState(e.target.name)
        :setCurState(prev=>prev+e.target.name);
    }

    useEffect(()=>{
        setInput(curState);
    },[curState]);

    useEffect(() => {
        setInput("0");
      }, []);


    const deleteIt=()=>{
        setCurState(input.substring(0,input.length-1));
    }

    const clearIt=()=>{
        setInput("0");
        setCurState("");
        setPrevState("");
        setData("");
    }

    const signChange=()=>{
        if(curState.charAt(0)==="-"){
            setCurState(curState.substring(1));
        }else{
            setCurState("-"+curState);
        }
    }

    const addOperator=(e)=>{
        setOpeartor(e.target.name);
        if (curState === "") return;
        if (prevState !== "") {
            setData(prev=>prev+curState+e.target.name);
            result();
        } else {
            setData(prev=>prev+curState+e.target.name);
            setPrevState(curState);
            setCurState("");
        }
    }


    const result=(e)=>{
        if(prevState==="" || curState==="") return ;
        if(e?.target.name==="="){
            setData(prev=>prev+curState);
        }

        let total;
        switch (operator) {
            case "/":
              total = String(parseFloat(prevState) / parseFloat(curState));
              break;
      
            case "+":
              total = String(parseFloat(prevState) + parseFloat(curState));
              break;
            case "x":
              total = String(parseFloat(prevState) * parseFloat(curState));
              break;
            case "-":
              total = String(parseFloat(prevState) - parseFloat(curState));
              break;
            default:
              return;
        }
        setCurState("");
        setPrevState(total);
        setInput("");
    }

    return (
        <div className="work-box">
            <input type="text" id="data" value={data}/>
            {input !== "" || input === "0"
                ?<input type="text" value={input}/>
                :<input type="text" value={prevState} />
            }
            <button className="operators" id="clearClass" onClick={clearIt}>AC</button>
            <button className="operators" id="delId" onClick={deleteIt}>C</button>
            <button name="+/-" className="operators" onClick={signChange}>+/-</button>
            <button name="/" className="operators" onClick={addOperator}>/</button>
            <button name="7"onClick={handleChange}>7</button>
            <button name="8" onClick={handleChange}>8</button>
            <button name="9" onClick={handleChange}>9</button>
            <button name="x" className="operators" onClick={addOperator}>x</button>
            <button name="4" onClick={handleChange}>4</button>
            <button name="5" onClick={handleChange}>5</button>
            <button name="6" onClick={handleChange}>6</button>
            <button name="-" className="operators" onClick={addOperator}>-</button>
            <button name="1" onClick={handleChange}>1</button>
            <button name="2" onClick={handleChange}>2</button>
            <button name="3" onClick={handleChange}>3</button>
            <button name="+" className="operators" onClick={addOperator}>+</button>
            <button name="." onClick={handleChange}>.</button>
            <button name="0" onClick={handleChange}>0</button>
            <button name="=" className="equals" onClick={result}>=</button>
        </div>
    )
}

export default Calsi
