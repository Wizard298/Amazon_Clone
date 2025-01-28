import React from "react";
import '../css_part/header.css';
import img1 from '../img_part/logo.jpg.png';
import img2 from '../img_part/address.jpg.png';
import search_img from '../img_part/search.png';
import img3 from '../img_part/India.png';
import img4 from '../img_part/Hello.png';
import img5 from '../img_part/Returns.png';
import img6 from '../img_part/cart.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="main-head">
          <div className="head-img">
            <Link className="head-logo1" to="/">
              <img src={img1} alt="reloading" />
            </Link>
          </div>

          <div className="head-img">
            <a className="head-logo2" href="https://www.amazon.in">
              <img src={img2} alt="reloading" />
            </a>
          </div>

          {/* Form Part */}
          <div className="head-search">
            <form action="ok" className="head-form">
              <div className="head-options">
                <label htmlFor="cars"></label>
                <select id="cars" className="head-select" name="cars">
                  <option value="search-alias=aps">All Categories</option>
                  <option value="search-alias=alexa-skills">Alexa Skills</option>
                  <option value="search-alias=amazon-devices"> Amazon Devices </option>
                  <option value="search-alias=fashion">Amazon Fashion</option>
                  <option value="search-alias=amazon-pharmacy"> Amazon Pharmacy </option>
                  <option value="search-alias=appliances">Appliances</option>
                  <option value="search-alias=mobile-apps"> Apps &amp; Games </option>
                  <option value="search-alias=baby">Baby</option>
                  <option value="search-alias=beauty">Beauty</option>
                  <option value="search-alias=stripbooks">Books</option>
                  <option value="search-alias=automotive"> Car &amp; Motorbike </option>
                  <option value="search-alias=apparel"> Clothing &amp; Accessories </option>
                  <option value="search-alias=collectibles">Collectibles</option>
                  <option value="search-alias=computers"> Computers &amp; Accessories </option>
                  <option value="search-alias=electronics">Electronics</option>
                  <option value="search-alias=furniture">Furniture</option>
                  <option value="search-alias=lawngarden"> Garden &amp; Outdoors </option>
                  <option value="search-alias=gift-cards">Gift Cards</option>
                  <option value="search-alias=grocery"> Grocery &amp; Gourmet Foods </option>
                  <option value="search-alias=hpc"> Health &amp; Personal Care </option>
                  <option value="search-alias=kitchen">Home &amp; Kitchen</option>
                  <option value="search-alias=industrial">Industrial &amp; Scientific </option>
                  <option value="search-alias=jewelry">Jewellery</option>
                  <option value="search-alias=digital-text">Kindle Store</option>
                  <option value="search-alias=luggage">Luggage &amp; Bags</option>
                  <option value="search-alias=luxury-beauty"> Luxury Beauty </option>
                  <option value="search-alias=dvd">Movies &amp; TV Shows</option>
                  <option value="search-alias=popular">Music</option>
                  <option value="search-alias=mi">Musical Instruments</option>
                  <option value="search-alias=office-products"> Office Products </option>
                  <option value="search-alias=pets">Pet Supplies</option>
                  <option value="search-alias=instant-video">Prime Video</option>
                  <option current="parent" value="search-alias=shoes"> Shoes &amp; Handbags </option>
                  <option value="search-alias=software">Software</option>
                  <option value="search-alias=sporting"> Sports, Fitness &amp; Outdoors </option>
                  <option value="search-alias=specialty-aps-sns"> Subscribe &amp; Save </option>
                  <option value="search-alias=home-improvement"> Tools &amp; Home Improvement </option>
                  <option value="search-alias=toys">Toys &amp; Games</option>
                  <option value="search-alias=under-ten-dollars"> Under ₹500 </option>
                  <option value="search-alias=videogames">Video Games</option>
                  <option value="search-alias=watches">Watches</option>
                </select>
              </div>
              
              <div className="head-textbox">
                <div className="head-input">
                  <input
                    type="search"
                    name="Searchbox"
                    placeholder="Search Amazon.in" />
                </div>
                <div>
                  <a className="search" href="https://www.amazon.in">
                    <img src={search_img} alt="reloading" />
                  </a>
                </div>
              </div>
            </form>
          </div>


          <div className="head-img">
            <a className="img3" href="https://www.amazon.in">
              <img src={img3} alt="reloading" />
            </a>
          </div>
          <div className="head-img">
            <a className="img4" href="https://www.amazon.in">
              <img src={img4} alt="reloading" />
            </a>
          </div>
          <div className="head-img">
            <a className="img5" href="https://www.amazon.in">
              <img src={img5} alt="reloading" />
            </a>
          </div>
          <div className="head-img">
            <Link className="img6" to="/cart">
              <img src={img6} alt="reloading" />
            </Link>
          </div>
        </div>

        {/* Second Part */}
        <div className="container">
          <div className="container-nav">
            <nav>
              <ul>
                <li><a href="https://www.amazon.in">Amazon miniTV</a></li>
                <li><a href="https://www.amazon.in">Sell</a></li>
                <li><a href="https://www.amazon.in">Best Sellers</a></li>
                <li><a href="https://www.amazon.in">Today's deals</a></li>
                <li><a href="https://www.amazon.in">Mobiles</a></li>
                <li><a href="https://www.amazon.in">Customer Service</a></li>
                <li><a href="https://www.amazon.in">Electronics</a></li>
                <li><a href="https://www.amazon.in">New Releases</a></li>
                <li><a href="https://www.amazon.in">Prime</a></li>
                <li><a href="https://www.amazon.in">Home & Kitchen</a></li>
                <li><a href="https://www.amazon.in">Amazon Pay</a></li>
              </ul>
            </nav>
          </div>
          <div className="app">
            <a href="https://www.amazon.in">
              <img src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" className="image" alt="Amazon app" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
