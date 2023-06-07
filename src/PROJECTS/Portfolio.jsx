import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function Portfolio() {
    return (
        <div>
            <div>
                <ul className="main">
                    <li> <a href="coder image.webp">🧑‍⚖️</a></li>
                    <li> <a href="#"> HOME</a></li>
                    <li> <a href="kiran Biarane - Shortcut.lnk"> HIRE ME</a></li>
                    <li> <a href="coder image.webp">ABAUT</a></li>
                    <li> <a href="study meterial.txt"> PORTFOLIO</a></li>
                    <li> <a href="#"> SERVICES</a></li>

                </ul>
                <div className="font">
                    <h2>My Name Is</h2>
                    <h1>Kiran Randhawa</h1>
                    <h2>And I am a <span className="span">React Developer💻</span>
                    </h2>
                    <button onclick="alert('fetching the data')">Download Cv</button>
                </div>


            </div>
            <div className="imgg">
                <div className="box">
                    <img src="kirannn.jpeg" />
                </div>


            </div>
            <h2>My projects</h2>
            <div>        <ul className="main">
                <li> <Link to="/Movie">MOVIE-TICKET</Link></li>
                <li> <Link to="/Web">SHOPPING-APP</Link></li>
                <li> <Link to="/Weather"> WEATHER-APP</Link></li>
                <li> <Link to="/Tipcl">CALCULATOR</Link></li>
                <li> <Link to="/Portfolio"> PORTFOLIO</Link></li>
                <li> <Link to="/Clock"> MINI-PROJECTS</Link></li>

            </ul></div>
            <h2>More information</h2>
            <ul className="list">
                <li>Skills: HTML, CSS, JAVASCRIPT, REACT, REDUX, BOOTSTRAP. </li>
                <li>Projects: Shopping app, Weather app, Website Deign, Toodo list app, Tip calculator, My portfolio, Watch, Calculator, Music app etc, </li>
                <li>EMAIl: kbijarane@gmail.com.</li>
                <li>College: MJ college Jalgoan. </li>
                <li>Address: At Malegoan In Maharastra. </li>
            </ul>
        </div>
    )
}
export default Portfolio;