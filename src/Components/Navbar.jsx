import React from 'react'
import "./Navbar/navbar.css"
function Navbar() {
    return (

        <header>
            <div className='navbar'>
                <div className="headertop">
                    <a href="#insights">Contact Us</a>
                    <a href="#industries">Investors</a>
                    <a href="#menu">Global | EN</a>
                </div>
                <div className="headerbottom">
                    <a role="link" className="logo" tabindex="-1" href="https://www.capgemini.com"><img
                        src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                        alt="Capgemini"
                        data-blue-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                        data-white-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo-white.svg"></img>
                    </a>

                    <a href="#insights">insights</a>
                    <a href="#industries">industries</a>
                    <a href="#menu">services</a>
                    <a href="#career">career</a>
                    <a className="#news" href="#news">news</a>
                    <a href="#about us">about us</a>

                    <div className="searchform">
                        <form action="" id="search-form">
                            <input type="search" placeholder="search " name="" id="search-box"></input>
                            <label for="search-box" className="fas fa-search"></label>
                        </form>
                    </div>


                </div>
            </div>

        </header>


    )
}

export default Navbar


