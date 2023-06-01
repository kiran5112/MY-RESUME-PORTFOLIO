import React,{useState} from "react";
import { Link } from "react-router-dom";


function Sarvice(prop) {

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
            <input type='button' defaultValue="9" onClick={click} />
            <input type='button' defaultValue="8" onClick={click} />
            <input type='button' defaultValue="7" onClick={click} />
            <input type='button' defaultValue="6" onClick={click} />
            <input type='button' defaultValue="5" onClick={click} />
            <input type='button' defaultValue="4" onClick={click} />
            <input type='button' defaultValue="3" onClick={click} />
            <input type='button' defaultValue="2" onClick={click} />
            <input type='button' defaultValue="1" onClick={click} />
            <input type='button' defaultValue="0" onClick={click} />
            <input type='button' defaultValue="+" onClick={click} />
            <input type='button' defaultValue="-" onClick={click} />
            <input type='button' defaultValue="/" onClick={click} />
            <input type='button' defaultValue="*" onClick={click} />
            <input type='button' defaultValue="." onClick={click} />
            <input type='button' defaultValue="clear" onClick={clear} />
            <input type='button' defaultValue="=" onClick={calculet} />

            <button onClick={handle}>DONE!</button>

            <button><Link to="/Movie">CANCEL</Link></button>




        </div>
    )
}
export default Sarvice;