import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsFillLightningChargeFill } from "react-icons/bs";
import "./HeroSection.css";

function HeroSection() {
  return (
    <Carousel interval={3000} ride="carousel" wrap={true} pause={false}>
      <Carousel.Item>
        <div className="HS_text">
          <h1>
            Discover. <br />
            Shop.Live <span className="gradient"> better.</span>
          </h1>
          <p>A curated marketplace with thousands of premium products.</p>

          <div className="HS_btn">
            <button>
              Shop now <IoIosArrowRoundForward />
            </button>
            <button>Browse categories</button>
          </div>

          <ul className="HS_list">
            <li>
              <FaShippingFast /> Free Shipping
            </li>
            <li>
              <RiSecurePaymentLine /> Secure checkout
            </li>
            <li>
              <BsFillLightningChargeFill /> Same-day deals
            </li>
          </ul>
        </div>

        <img
          className="d-block w-100"
          src="/src/assets/shopping-leisure-lifestyle-concept-portrait-excited-happy-young-girl-likes-shop-attend-favori.jpg"
          alt="slide1"
        />
      </Carousel.Item>

      <Carousel.Item>
        <div className="HS_text">
          <h1>Big Deals. <br /> Big Savings. <br /> Up to  <span className="gradient"> 50%</span> OFF.</h1>
          <p>Limited-time discounts on top products. Shop now before it’s gone.</p>

          <div className="HS_btn">
            <button>
              Shop now <IoIosArrowRoundForward />
            </button>
            <button>Browse categories</button>
          </div>

          <ul className="HS_list">
            <li>
              <FaShippingFast /> Free Shipping
            </li>
            <li>
              <RiSecurePaymentLine /> Secure checkout
            </li>
            <li>
              <BsFillLightningChargeFill /> Same-day deals
            </li>
          </ul>
        </div>

        <img
          className="d-block w-100"
          src="/src/assets/Design sans titre (4).png"
        />
      </Carousel.Item>

      <Carousel.Item>
        <div className="HS_text">
          <h1>Fast  <span className="gradient">delivery </span>  <br /> Secure
          <span className="gradient"> checkout.</span> </h1>
          <p>Fast delivery on all orders. Get your products quickly and safely.</p>

          <div className="HS_btn">
            <button>
              Shop now <IoIosArrowRoundForward />
            </button>
            <button>Browse categories</button>
          </div>
         </div>
        <img className="d-block w-100" src="/src/assets/moblie shop.png" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
