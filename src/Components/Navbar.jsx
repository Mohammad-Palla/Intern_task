import React from 'react'
import "./Navbar/navbar.css"

function Navbar() {
  return (
    <header>
        <a role="link" class="logo" tabindex="-1" href="https://www.capgemini.com"><img
                src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                alt="Capgemini"
                data-blue-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                data-white-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo-white.svg"></img></a>

        <nav class="navbar">

            <a href="#insights">insights</a>
            <a href="#industries">industries</a>
            <a href="#menu">services</a>
            <a href="#career">career</a>
            <a class="#news" href="#news">news</a>
            <a href="#about us">about us</a>
        </nav>

        <div class="icons">
            <i class="fas fa-bars" id="menu-bars"></i>
            <i class="fas fa-search" id="search-icon"></i>
            <a href="#menu" class="fas fa-heart"></a>
            <a href="#" class="fas fa-shopping-cart"></a>
        </div>



        <form action="" id="search-form">
            <input type="search" placeholder="search " name="" id="search-box"></input>
            <label for="search-box" class="fas fa-search"></label>
            <i class="fas fa-times" id="close"></i>
        </form>
        
        <div class="mobile-nav-contact" style="float: right;">
            <div class="mobile-nav-bottom" style="float: right;">
                <span class="lang-current" style="float: right;">
                    <a href="/contact-us" class="btn-link-contact"><span class="text"
                            style="font-size: 15px; -ms-text-kashida-space: 12; ">Contact us </span></a>
                    <a href="https://investors.capgemini.com/en/" target="_blank" class="btn-link-investors"><span
                            class="text" style="font-size: 15px;">Investors</span></a>

                    <span style="font-size: 15px;">
                        Global | EN </span>
                    <img class="lang-icon"
                        src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/fl/flags-global-purple.svg"
                        alt=""></img>

                </span>
            </div>
        </div>  


    </header>
  )
}

export default Navbar