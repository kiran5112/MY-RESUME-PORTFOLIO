import React, { useEffect, useState } from 'react'
import ClowdApp from './ClowdApp'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './Footer'


function Web() {
    const [imag, setImag] = useState('')
    const [con, setCon] = useState(false)
    const [product, setProduct] = useState([])
    const [buy, setBuy] = useState(false)
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res) => {
            console.log(res.data.products);
            setProduct(res.data.products)
            let myv = res.data.products
            myv.forEach((ele) => {
                ele.count = 0
            })
            setProduct(myv)
        })


    }, [])

    let sum = 0;
    product.forEach((ele) => {
        sum = sum + ele.count
    })
    function add(index) {
        let temp = [...product]
        temp[index].count = temp[index].count + 1
        setProduct(temp)



    }
    function sub(index) {
        let temp = [...product]
        if (temp[index].count > 0) {
            temp[index].count = temp[index].count - 1
        }
        setProduct(temp)

    }
    function handle(index) {
        let temp = [...product]
        temp[index]
        setBuy(!buy)
        confirm("Do you want to select product✔️")
    }
    return (
        <>
            <div >

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quibusdam, consectetur vel distinctio neque reprehenderit dicta numquam repellat praesentium
                    fuga quis officiis a facere! Tenetur cum a impedit optio eligendi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore odit voluptate suscipit, totam quod expedita cumque optio repellendus illo voluptatum quis, quas fugiat r
                    ecusandae perferendis ducimus. Accusamus, tempore soluta?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit aut asperiores obcaecati, cumque quo, at voluptate commodi magnam accusamus aspernatur ratione
                    laudantium quia! Natus labore reiciendis voluptate hic minus?</p>
                <div>

                    <nav className="navbar navbar-dark bg-dark fixed-top " >
                        <div className="container-fluid">
                            <Link to="/page" className="navbar-brand" ><span>FlipCart🛒</span> <span className='cool'>{sum}</span></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/sarvice">Link</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Buy any product
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <form className="d-flex mt-3" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* <h1>{sum}</h1> */}
                <div className='mater'>
                    {
                        product.map((item, index) => {
                            return <div key={index}>
                                <img src={item.thumbnail} />
                                {/* {item.count} */}
                                <button onClick={() => handle(index)}>{buy ? "book now" : "buy"}</button>
                                <button onClick={() => add(index)}>add</button>
                                <button onClick={() => sub(index)}>sub</button>



                            </div>
                        })
                    }
                </div>
               
               

            </div>
           
           
        </>
    )
}

export default Web