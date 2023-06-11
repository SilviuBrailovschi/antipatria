import Image from "next/image";
import Link from "next/link";
import MobileNav from "../mobileNav/mobile-nav";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  let [isOpen, setIsopen] = useState(false);
  return (
    <header
      onClick={() => {
        setIsopen(!isOpen);
      }}
    >
      <div className="logo-container">
        <Link href="/">
          <Image
            className="logo-img"
            src={"/images/Antipatria_LOGO_NoBackground.png"}
            alt="logo"
            width={60}
            height={50}
          />
        </Link>
        <Link href="/">
          {" "}
          <div className="pageTitle">Antipatrea's Perfection</div>
        </Link>
      </div>
      <FontAwesomeIcon
        className="burger-menu-icon"
        icon={faBars}
        style={{ fontSize: 50, color: "white" }}
        onClick={() => {
          setIsopen(!isOpen);
        }}
      />

      {isOpen && <MobileNav />}

      <nav>
        <ul>
          <li>
            <Link className="nav-link" href="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/aboutUs">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/contactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
