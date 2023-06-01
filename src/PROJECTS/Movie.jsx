
import React, { createContext, useEffect, useState } from "react";
import MOVIE_DATA from "../LocalMovie";
import { Link } from "react-router-dom";
import Product from "../Product";

var data = createContext();

var good = createContext();
const bol = 'Booking application'
const bol2 = [MOVIE_DATA]
function Movie() {


  const [move, setMove] = useState((MOVIE_DATA))
  const [con, setCon] = useState(true)
  const [find, setFind] = useState('Thor')
  // const [data, setData] = useState()
  const [box, setBox] = useState(true)
  console.log(move);

  function handle() {
    confirm('YOU WANT TO BOOK THIS ?')
    setCon(!con)
  }

  // useEffect(() => {
  // function check() {
  //   let temp = [...move]
  //   temp = temp.filter(ele => {
  //     let y = ele.Title.toLowerCase()
  //     if (y.startsWith(find)) return true
  //   })
  //   setMove(temp)
  // }
  // }, [find])



  return (
    <>

      <h1>Movie Ticket Booking app</h1>

      <div>

        <nav className="navbar bg-body-tertiary bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand">🎞️🎬📽️BOOK YOUR TICKET🔖 -------</a> <Link to="/Sarvice"><button>Payment</button></Link> 
            <form className="d-flex" role="search">
              <input className="form-control me-2 bg-secondary" onChange={(e) => check(e.target.value)} type="search" placeholder="Search Movie" aria-label="Search" />

              <button className="btn btn-secondary"  ><Link to='/product'>Movie details</Link></button>
            </form>
          </div>
        </nav>
      </div>
      <div>
<marquee direction="left" >30% cashback on paytm🎊  45% discount on week days💰 </marquee>
        <div className="zo">
          {
            move.map((value, index) => {
              return <div className="zoo" key={index}>
                <span className="text">{value.Title}</span>

                <img src={value.Poster} />

                <span className="text"> Time:{value.Runtime}</span>
                <span className="text">Year:{value.Year}</span>


                <button onClick={handle}><Link to='/Page'>{con ? 'BOOK NOW' : 'BOOKED'}</Link></button>


              </div>
              
            })
          }

        </div>
      </div>
      <button><Link to='/product'>Movie details</Link></button>
      <data.Provider value={bol2}>
        <good.Provider value={bol}>
          <Product />
        </good.Provider>
      </data.Provider>


    </>


  )
}
export default Movie;
export { data, good }