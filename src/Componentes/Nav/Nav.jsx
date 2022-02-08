import React from "react"
import { Link } from "react-router-dom"



export default function Nav () {
    return (
    <>
    <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#">Planet Tour</a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item">
                <Link to="/"><a className="nav-link"><i className="bi bi-house-door-fill"></i>Home</a></Link>    
                </li>
                <li className="nav-item active">
                <Link to="/Destinos"><a className="nav-link"><i className="bi bi-send-fill"></i>Destinos</a></Link>
                </li>
                <li className="nav-item">
                <Link to="/Promo"><a className="nav-link"><i className="bi bi-piggy-bank-fill"></i>Promoções</a></Link>
                </li>
                <li className="nav-item">
                <Link to="/Contato"><a className="nav-link"><i className="bi bi-telephone-fill"></i>Contato</a></Link>
                </li>
                
            </ul>
        </div>
    </nav>
    </>
    )
};  












