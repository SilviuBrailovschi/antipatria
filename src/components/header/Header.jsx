import Image from "next/image";
import Link from "next/link";
import MobileNav from "../mobileNav/mobile-nav";
import { useState } from "react";

export const Header = () => {
  let [isOpen, setIsopen] = useState(false);
  console.log(isOpen);
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
          <p>Antipatrea's Perfection</p>
        </Link>
      </div>

      <Image
        className="burger-menu-icon"
        src={"/icons/burger-menu.png"}
        alt="burgermenu"
        width={50}
        height={50}
        onClick={() => {
          setIsopen(!isOpen);
        }}
      />

      {isOpen && <MobileNav />}

      <nav>
        <ul>
          <li>
            <Link className="nav-link" href="/">
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
