"use client";
import { Fragment } from "react";
import "./navigation.component.scss";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./cart.component.scss";

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <Fragment>
      <section class="top-nav">
        <div class="announcement-bar top-nav__group">
          <div class="top-nav__group-link country-selector">Ship to: US</div>
          <div class="countdown-menu">
            <div class="countdown-menu_messsage--desktop">
              <h1>GRAND OPENING</h1>
            </div>
            <div class="countdown-menu_numbers">
              <div class="days">180</div>
              <span> :</span>
              <div class="hours">6</div>
              <span> :</span>
              <div class="minutes">11</div>
              <span> :</span>
              <div class="seconds">12</div>
            </div>
          </div>
        </div>
        <div class="mobile-nav">
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => {
              setNavOpen(true);
            }}
          >
            <i class="fa-light fa-solid fa-bars"></i>
          </button>
          <div class="mobile-menu mobile-menu__side-menu">
            <div
              id="mySidenav"
              className={
                isNavOpen ? "sidenav opensidenav" : "sidenav closesidenav"
              }
            >
              <button
                type="button"
                className="closebtn"
                onClick={() => {
                  setNavOpen(false);
                }}
                classname="nav-nav-link_link"
              >
                &times;
              </button>
              <div class="mobile-brand__logo">
                <Link classname="nav-nav-link_link" to="/">
                  Brand Name
                </Link>
              </div>
              <Link classname="nav-nav-link_link" to="/shop">
                Shop
              </Link>
              <Link classname="nav-nav-link_link" to="/about">
                About
              </Link>
              <Link classname="nav-nav-link_link" to="/blog">
                News
              </Link>
              <Link
                classname="nav-nav-link_link"
                href="./backend/user-login-page.html"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <nav>
          <ul class="nav-menu">
            <Link class="nav-item nav-link nav-main">
              <a classname="nav-nav-link_link" to="/">
                Home
              </a>
            </Link>
            <li class="nav-item nav-link nav-main">
              <Link classname="nav-nav-link_link" to="/shop">
                Shop
              </Link>
            </li>
            <Link class="nav-item nav-link nav-main">
              <a classname="nav-link nav-item nav-main" to="/about">
                About
              </a>
            </Link>
            <Link class="nav-item nav-link nav-main">
              <Link classname="nav-nav-link_link" to="/blog">
                News
              </Link>
            </Link>
            <div class="nav_brand-logo nav-item">
              <Link classname="nav-nav-link_link" to="/">
                Brand Name
              </Link>
            </div>
            <li class="nav-item nav-link nav-login nav-main">
              <Link
                classname="nav-nav-link_link"
                to="/backend/user-login-page.html"
              >
                Login
              </Link>
            </li>
            <li class="nav-item nav-link nav-login nav-search">
              <Link
                classname="nav-nav-link_link"
                to="/backend/user-login-page.html"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Link>
            </li>
            <div className="nav-item nav-cart nav-link nav-login nav-search">
              <button
                className="nav-cart"
                type="button"
                onClick={() => {
                  setCartOpen(true);
                }}
                id="open_cart_btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <div id="cartAmount" class="cartAmount">
                  0
                </div>
              </button>
            </div>
          </ul>
        </nav>
      </section>
      <Outlet />
      <div id="sidecart" className={isCartOpen ? "sidecart open" : "sidecart "}>
        <div class="cart_content">
          <div class="cart_header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="currentColor"
              class="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            <div class="header_title">
              <h2>Your Cart</h2>
              <small id="'items_num">4</small>
            </div>
            <button
              type="button"
              id="close_btn"
              onClick={() => {
                setCartOpen(false);
              }}
              className="close_btn"
            >
              <i className="fa-regular fa-xmark"></i>
            </button>
          </div>

          <div class="cart_items">
            <div class="cart_item">
              <div class="remove_item">
                <i class="fa-regular fa-xmark"></i>
              </div>
              <div class="item_img">
                <img
                  src="./assets/img/products/NFC-CARD-SAMPLE-PNG-1.png"
                  alt=""
                />
              </div>
              <div class="item_details">
                <p>Gladius Card</p>
                <strong>$4.99</strong>
                <div class="qty">
                  <span>-</span>
                  <strong>1</strong>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>

          <div class="cart_actions">
            <div class="subtotal">
              <p>SUBTOTAL:</p>
              <p>
                $<span id="subtotal_price">22.35</span>
              </p>
            </div>
            <button>View Cart</button>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
