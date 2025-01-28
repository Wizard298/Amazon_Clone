import React from "react";
import "../css_part/footer.css";
import BackToTop from "./BackToTop";
// import { Routes, Route } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <Routes>
            <Route
            path="/"
            element={
                <div className="si">
                <div className="sign">
                    <div className="signin">
                    <div style={{ fontSize: "12.5px", color: "#000" }}>
                        See personalized recommendations
                    </div>
                    <button className="btn">Sign in</button>
                    <div className="seem">
                        <span className="spa">New customer?</span>
                        <a href="https://www.amazon.in">Start here</a>
                    </div>
                    </div>
                </div>
                </div>
            }
            />
        </Routes> */}
      <div className="si">
        <div className="sign">
          <div className="signin">
            <div style={{ fontSize: "12.5px", color: "#000" }}>
              See personalized recommendations
            </div>
            <button className="btn">Sign in</button>
            <div className="seem">
              <span className="spa">New customer?</span>
              <a href="https://www.amazon.in">Start here</a>
            </div>
          </div>
        </div>
      </div>

      <BackToTop />

      <div className="end">
        <div className="first">
          <div className="mainf">Get to Know Us</div>
          <div className="about">
            <a href="https://www.amazon.in">About Us</a>
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Careers</a>{" "}
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Press Releases</a>{" "}
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Amazon Science</a>
          </div>
        </div>
        <div className="second">
          <div className="mainf">Connect with Us</div>
          <div className="about">
            <a href="https://www.amazon.in">Facebook</a>
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Twitter</a>{" "}
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Instagram</a>{" "}
          </div>
        </div>
        <div className="third">
          <div className="mainf">Make Money with Us</div>
          <div className="about">
            <a href="https://www.amazon.in">Sell on Amazon</a>
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Sell under Amazon Accelerator</a>{" "}
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Protect and Build Your Brand</a>{" "}
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Amazon Global Selling</a>
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Become an Affiliate</a>
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Fulfilment by Amazon</a>
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Advertise Your Products</a>
          </div>
          <div className="about">
            <a href="https://www.amazon.in"> Amazon Pay on Merchants</a>
          </div>
        </div>
        <div className="fourth">
          <div className="mainf">Let Us Help You</div>
          <div className="about">
            <a href="https://www.amazon.in">COVID-19 and Amazon</a>
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Your Account</a>
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Returns Centre</a>{" "}
          </div>
          <div className="about">
            <a href="https://www.amazon.in">100% Purchase Protection</a>{" "}
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Amazon App Download</a>
          </div>
          <div className="about">
            <a href="https://www.amazon.in">Help</a>
          </div>
        </div>
      </div>

      {/* <hr/> */}

      <div className="endpart">
        <div className="endpart-links">
          <div className="endpart-item-links">
            <a href="https://www.amazon.in">
              AbeBooks
              <br />
              <span>Books, art & collectibles</span>
            </a>
          </div>
          <div className="endpart-item-links">
            <a href="https://www.amazon.in">
              Amazon Web Services
              <br />
              <span>Scalable Cloud Computing Services</span>
            </a>
          </div>
          <div className="endpart-item-links">
            <a href="https://www.amazon.in">
              Audible
              <br />
              <span>Download Audio Books</span>
            </a>
          </div>
          <div className="endpart-item-links">
            <a href="https://www.amazon.in">
              IMDb
              <br />
              <span>Movies, TV & Celebrities</span>
            </a>
          </div>
          <div className="endpart-item-links">
            <a href="https://www.amazon.in">
              Shopbop
              <br />
              <span>Designer, Fashion Brands</span>
            </a>
          </div>
          <div className="endpart-item-links">
            <a href="https://www.amazon.in">
              Amazon Business
              <br />
              <span>Everything For Your Business</span>
            </a>
          </div>
          <div className="endpart-item-links">
            <a href="https://www.amazon.in">
              Prime Now
              <br />
              <span>2-Hour Delivery on Everyday Items</span>
            </a>
          </div>
          <div className="endpart-item-links">
            <a href="https://www.amazon.in">
              Amazon Prime Music
              <br />
              <span>
                100 million songs, ad-free Over 15 million podcast episodes
              </span>
            </a>
          </div>
        </div>

        <div className="copyright">
          <a href="https://www.amazon.in">Conditions of Use & Sale</a>
          <a href="https://www.amazon.in">Privacy Notice</a>
          <a href="https://www.amazon.in">Interest-Based Ads</a>
          {/* <div className="copyright-links">
                        <a href="https://www.amazon.in">Conditions of Use & Sale</a>
                    </div>
                    <div className="copyright-links">
                        <a href="https://www.amazon.in">Privacy Notice</a>
                    </div>
                    <div className="copyright-links">
                        <a href="https://www.amazon.in">Interest-Based Ads</a>
                    </div> */}

          <div className="copyright-text">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
