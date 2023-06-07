import axios from "axios";
import React, { useEffect, useState } from "react";

function Javascript() {
    const [list, setList] = useState([])


    // useEffect(() => {
    //     // method='put'
    //     axios.get("https://dummy.restapiexample.com/api/v1/employees").then((res) => {
    //         console.log(res.data);
    //         // setList(res.data)
    //     })
    // }, [])
    function call(e) {
        e.preventDefault();
        axios.put("https://dummyjson.com/products/1").then((res) => {
            console.log(res.data);
            setList(res.data.products)
        })
    }
  
    
    return (
        <div className="image">
            <h1>my app</h1>

            {
                list.map((ele) => {
                    return (
                        <div><li>{ele.employee_name}</li>
                            <li>{ele.title}</li>
                            <li>{ele.stock}</li>
                            <button onClick={call}>click</button>


                        </div>
                    )
                })
            }

        </div>
    )
}
export default Javascript;









