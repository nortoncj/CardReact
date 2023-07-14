import { Fragment } from "react";
import "./navigation.component.scss";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navigation = () => {
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
          <button type="submit" class="mobile-menu-toggle" onclick="openNav()">
            <i class="fa-light fa-solid fa-bars"></i>
          </button>
          <div class="mobile-menu mobile-menu__side-menu">
            <div id="mySidenav" class="sidenav">
              <a
                to="javascript:void(0)"
                class="closebtn"
                onclick="closeNav()"
                classname="nav-nav-link_link"
              >
                &times;
              </a>
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
            <li class="nav-item nav-link nav-main">
              <Link classname="nav-nav-link_link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item nav-link nav-main">
              <Link classname="nav-nav-link_link" to="/shop">
                Shop
              </Link>
            </li>
            <li class="nav-item nav-link nav-main">
              <Link classname="nav-link nav-item nav-main" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item nav-link nav-main">
              <Link classname="nav-nav-link_link" to="/blog">
                News
              </Link>
            </li>
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
            <li class="nav-item nav-cart nav-link nav-login nav-search">
              <Link
                to="javascript:void(0)"
                onclick="OpenCart()"
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
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
