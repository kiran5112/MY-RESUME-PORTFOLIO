import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Clocks() {
    let time = new Date().toLocaleTimeString()
    const [ctime, setCtime] = useState(time)

    function handle() {
        let time = new Date().toLocaleTimeString()
        setCtime(time)
    }
    setInterval(handle, 1000)


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



    return (
        <div>
            <h1>{ctime}</h1>


<div>

<div className='clo'><h1>My calculator</h1>
            <input id='ek' placeholder='0' value={result} />
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
            {/* <input type='button' value="back" onClick={popp} /> */}


        </div>
    


</div>





        </div>
    )
}
export default Clocks




// function Clocks() {
//     const[vall,setVall]=useState("")
//   return (
//     <div style={{backgroundColor:vall}}>kiran
//     <input value={vall} type='text' onChange={(e)=>setVall(e.target.value)}/>
//     </div>
//   )
// }

// export default Clocks



// function Clocks() {
//   const [con, setCon] = useState([])
//   const [search, setSearch] = useState("")
//   const[datas,setDatas]=useState([])

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//       setCon(res.data)
//       setDatas(res.data)
//       console.log(res.data);
//     })
//   },[])
//   useEffect(() => {
//     let temp = [...datas]
//     temp = temp.filter(item => {
//       let cn = item.title.toLowerCase()
//       if (cn.startsWith(search)) return true
//     })
//     setCon(temp)
//   }, [search])
//   return (

//     <div>
//       <h1>my app</h1>
//       <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
//       {con.map((items) => {
//         return <div>{items.title}  </div>
//       })}</div>
//   )
// }

// export default Clocks


