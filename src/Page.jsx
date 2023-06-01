import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Page() {

  const [data, setData] = useState()
  function time() {
    setTimeout(() => {
      confirm(' your seat confirm')
      setInterval(timmer, 1000)
    }, 500)

  }
  function falsy() {
    confirm('🔒 SORRY!🙁 THIS SEAT IS ALREADY BOOKED!')
    
  }
  function timmer() {
    let n = new Date().toLocaleTimeString()
    setData(n)
  }
  return (
    <div>
      <h1>Book hire!</h1>
      <div className="checkbox">
        <h1><dfn title="click to book">Book</dfn> your seat ----------⏲️{data} in 5mins</h1>
        <input onClick={time} type="checkbox" />
        <label>A</label> <input onClick={time} type="checkbox" />
        <label>B</label>  <input onClick={time} type="checkbox" />
        <label>C</label> <input onClick={time} type="checkbox" />
        <label>D</label> <input onClick={time} type="checkbox" />
        <label>E</label>  <input onClick={time} type="checkbox" />
        <label>F</label> <input onClick={time} type="checkbox" />
        <label>G</label> <input onClick={time} type="checkbox" />
        <label>H</label> <input onClick={falsy} checked='true' type="checkbox" />
        <label>I</label> <input onClick={time} type="checkbox" />
        <label>J</label> <input onClick={time} type="checkbox" />
        <label>K</label> <input onClick={time} type="checkbox" />
        <label>L</label> <input onClick={time} type="checkbox" />
        <label>M</label> <input onClick={time} type="checkbox" />
        <label>N</label> <input onClick={falsy} checked='true' type="checkbox" />
        <label>L</label> <input onClick={time} type="checkbox" />
        <label>O</label> <input onClick={time} type="checkbox" />
        <label>P</label> <input onClick={falsy} checked='true' type="checkbox" />
        <label>Q</label> <input onClick={falsy} checked='true' type="checkbox" />
        <label><dfn title='reverved'>R</dfn></label> <input checked='true' type="checkbox" />
        <label>S</label> <input onClick={time} type="checkbox" />
        <label>T</label> <input onClick={falsy} checked='true' type="checkbox" />
        <label>U</label> <input onClick={time} type="checkbox" />
        <label>V</label> <input onClick={falsy} checked="true" type="checkbox" />

        <button><Link to="/Sarvice">PAY NOW</Link></button>
        <button><Link to="/Movie">CANCEL</Link></button>
      </div>


    </div>
  )
}

export default Page;