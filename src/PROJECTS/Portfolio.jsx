import React from "react";
import { Link } from "react-router-dom";
import style from './user.module.css';




function Portfolio() {
    return (
        <div className={style.port}>
            <div>
                <ul className={style.main}>
                    <li> <a href="coder image.webp">🧑‍⚖️</a></li>
                    <li> <a href="https://kiran5112.github.io/Chocolate-clone/">FRIST-PROJECT</a></li>
                    <li> <a href="https://www.linkedin.com/in/kiran-randhawa/"> HIRE ME</a></li>
                    <li> <a href="https://www.linkedin.com/in/kiran-randhawa/">ABAUT</a></li>
                    <li> <a href="#"> PORTFOLIO</a></li>
                    <li> <a href="#"> SERVICES</a></li>

                </ul>
                <div className={style.font}>
                    <h2>My Name Is</h2>
                    <h1>Kiran Randhawa</h1>
                    <h2>And I am a <span className="span">React Developer💻</span>
                    </h2>
                    <button> <a href="https://www.linkedin.com/in/kiran-randhawa/">DOWNLOAD CV</a></button>
                </div>


            </div>
            <div className={style.imgg}>
                <div className={style.box}>
                    <img src="kirannn.jpeg" />
                </div>
            </div>
            <hr />
            <h1 className={style.text}>My projects</h1>
            <hr />
            <div>

                <ul className={style.main}>
                    <li> <Link to="/Movie">MOVIE-TICKET</Link></li>
                    <li> <Link to="/Web">SHOPPING-APP</Link></li>
                    <li> <Link to="/Weather"> WEATHER-APP</Link></li>
                    <li> <Link to="/Clock">CALCULATOR</Link></li>
                    <li> <Link to="/Portfolio"> PORTFOLIO</Link></li>
                    <li> <Link to="/Tipcl"> MINI-PROJECTS</Link></li>

                </ul></div>
            <h2>More Information</h2>
            <ul className={style.list}>
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