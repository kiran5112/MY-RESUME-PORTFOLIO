import React,{useState} from "react";
import { Link } from "react-router-dom";


function Sarvice() {

    const [result, setResult] = useState("")


    function click(e) {
        setResult(result.concat(e.target.value))


    }

    function clear() {
        setResult("")
    }
    function calculet() {
        setResult(eval(result).toString())
    }
    function handle(){
        if(result){
        confirm( result+'  '+' Rupees Transfer Successfully😊💰')
        setTimeout(()=>{
            alert(' Congradulations!🎊 Ticket is booked succesfully on 4/06/2023')
        },1000)
    }else{
        alert('🥺ENTER THE VALID AMOUNT')
    }
    }


    return (
        <div><h1>Transfer Money</h1>
        <h1>💰🪙💸💴</h1>

        <h3>ENTER THE AMONT</h3>
            <input placeholder='ENTER THE TICKET AMAUNT' value={result} />
            <input type='button' value="9" onClick={click} />
            <input type='button' value="8" onClick={click} />
            <input type='button' value="7" onClick={click} />
            <input type='button' value="6" onClick={click} />
            <input type='button' value="5" onClick={click} />
            <input type='button' value="4" onClick={click} />
            <input type='button' value="3" onClick={click} />
            <input type='button' value="2" onClick={click} />
            <input type='button' value="1" onClick={click} />
            <input type='button' value="0" onClick={click} />
            <input type='button' value="+" onClick={click} />
            <input type='button' value="-" onClick={click} />
            <input type='button' value="/" onClick={click} />
            <input type='button' value="*" onClick={click} />
            <input type='button' value="." onClick={click} />
            <input type='button' value="clear" onClick={clear} />
            <input type='button' value="=" onClick={calculet} />

            <button onClick={handle}>DONE!</button>

            <button><Link to="/Movie">CANCEL</Link></button>




        </div>
    )
}
export default Sarvice;